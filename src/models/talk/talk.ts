import { types } from "mobx-state-tree"
import { SpeakerModel } from "../speaker"

export const TalkModel = types.model().props({
  id: types.identifier(),
  title: "",
  description: "",
  speakers: types.optional(types.array(types.reference(SpeakerModel)), []),
})

export type Talk = typeof TalkModel.Type

export type TalkSnapshot = typeof TalkModel.SnapshotType