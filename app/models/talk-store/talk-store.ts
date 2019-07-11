import { flow, getEnv, types } from "mobx-state-tree"
import gql from "graphql-tag"
import { TalkModel, TalkSnapshot } from "../talk"
import { SettingModel, SettingSnapshot } from "../setting"
import { Environment } from "../environment"

export const TalkStoreModel = types
  .model()
  .props({
    talks: types.optional(types.array(TalkModel), []),
    status: types.optional(types.enumeration(["pending", "done", "error"]), "done"),
    updatedAt: types.maybe(types.Date),
    settings: types.optional(types.array(SettingModel), []),
  })
  .actions(self => ({
    subscribe: () => {},
    load: (talks: TalkSnapshot[], settings: SettingSnapshot[]) => {
      self.talks.replace(talks as any)
      self.settings.replace(settings as any)
    },
  }))
  .actions(self => ({
    getAll: flow(function*() {
      self.status = "pending"
      const env: Environment = getEnv(self)
      try {
        const result = yield env.graphql.query({
          fetchPolicy: "network-only",
          query: gql`
            query Talks {
              settings {
                name
                value
              }
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
                discussionEnabled
                prerequisites
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
          self.load(result.data.talks, result.data.settings)
        } else {
          self.status = "error"
        }
      } catch (e) {
        __DEV__ && console.tron.log(e)
      }
    }),
  }))
  .views(self => ({
    get sortedTalks() {
      return self.talks.sort(
        (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
      )
    },
    get discussionsEnabled() {
      try {
        return self.settings.length > 0
          ? self.settings.find(s => s.name === "discussions_enabled").value
          : false
      } catch (error) {
        __DEV__ && console.tron.log(error.message)
        return false
      }
    },
  }))

export const defaults = {}
export const createTalkStoreModel = () => types.optional(TalkStoreModel, defaults as any) // Using any because https://github.com/mobxjs/mobx-state-tree/issues/1307

type TalkStoreType = typeof TalkStoreModel.Type
export interface TalkStore extends TalkStoreType {}
