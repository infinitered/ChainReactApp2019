import { types } from "mobx-state-tree"

export const SpeakerModel = types.model().props({
  id: types.identifier(),
  name: types.maybe(types.string),
  employer: types.maybe(types.string),
  image: types.maybe(types.string),
})
