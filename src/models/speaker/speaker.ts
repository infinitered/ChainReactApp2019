import { types } from "mobx-state-tree"

export const SpeakerModel = types.model().props({
  id: types.identifier(),
  name: types.optional(types.string, ""),
  employerName: types.optional(types.string, ""),
})