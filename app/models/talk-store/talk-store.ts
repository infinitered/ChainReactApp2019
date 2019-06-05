import { types, flow, getEnv } from "mobx-state-tree"
import gql from "graphql-tag"
import { TalkModel, TalkSnapshot } from "../talk"

export const TalkStoreModel = types
  .model()
  .props({
    talks: types.optional(types.array(TalkModel), []),
    status: types.optional(types.enumeration(["pending", "done", "error"]), "done"),
    updatedAt: types.maybe(types.Date),
  })
  .actions(self => ({
    subscribe: () => {},
    load: (talks: TalkSnapshot[]) => {
      self.talks.replace(talks as any)
    },
  }))
  .actions(self => ({
    getAll: flow(function*() {
      self.status = "pending"
      const result = yield getEnv(self).graphql.query({
        query: gql`
          query Talks {
            talks {
              id
              title
              description
              image
              startTime
              endTime
              menuItems
              sponsor
              talkType
              location
              track
              speakers {
                id
                name
                employer
                image
                facebook
                twitter
                github
                medium
                instagram
                dribbble
                websites
                bio
              }
            }
          }
        `,
      })

      if (result.data) {
        self.status = "done"
        self.load(result.data.talks)
      } else {
        self.status = "error"
      }
    }),
  }))
  .views(self => ({
    get sortedTalks() {
      return self.talks.sort(
        (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
      )
    },
  }))

export const defaults = {}
export const createTalkStoreModel = () => types.optional(TalkStoreModel, defaults)

type TalkStoreType = typeof TalkStoreModel.Type
export interface TalkStore extends TalkStoreType {}
