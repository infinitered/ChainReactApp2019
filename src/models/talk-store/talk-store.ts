import { types, flow, getEnv } from "mobx-state-tree"
import { TalkModel, TalkSnapshot } from "../talk"

export const TalkStoreModel = types.model().props({
  talks: types.optional(types.array(TalkModel), []),
  status: types.optional(types.enumeration(["pending", "done", "error"]), "done"),
  updatedAt: types.maybe(types.Date)
}).actions(self => ({
  subscribe: () => {},
  load: (talks: TalkSnapshot[]) => {
    self.talks.replace(talks as any)
  },
})).actions(self => ({
  goGetEm: flow(function * (url: string) {
    self.status = "pending"
    const result = yield getEnv(self).api.get("thing")
    if (result.ok) {
      self.status = "done"
      self.load(result.talks)
    } else {
      self.status = "error"
    }
  }),
  findById: (id) => {
    // return self.talks.find(() => {
      
    // })
  }
}))

export const defaults = {}
export const createTalkStoreModel = () => types.optional(TalkStoreModel, defaults)
