import { types } from "mobx-state-tree"
import { SpeakerModel } from "../speaker"

export const TalkModel = types.model().props({
  id: types.identifier,
  startTime: types.maybeNull(types.string),
  endTime: types.maybeNull(types.string),
  title: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  speakers: types.maybeNull(types.array(SpeakerModel)),
  menuItems: types.maybeNull(types.array(types.string)),
  sponsor: types.maybeNull(types.string),
  talkType: types.maybeNull(types.string),
  location: types.maybeNull(types.string),
})

export type Talk = typeof TalkModel.Type

export type TalkSnapshot = typeof TalkModel.SnapshotType
