import { types } from "mobx-state-tree"
import { SpeakerModel } from "../speaker"

export const SpeakerStoreModel = types.model().props({
  speakers: types.optional(types.array(SpeakerModel), [])
})
