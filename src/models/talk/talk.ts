import { types } from "mobx-state-tree"
import { SpeakerModel } from "../speaker"

export const TalkModel = types.model().props({
  id: types.identifier(),
  startTime: types.maybe(types.string),
  endTime: types.maybe(types.string),
  title: types.maybe(types.string),
  description: types.maybe(types.string),
  image: types.maybe(types.string),
  speakers: types.maybe(types.array(SpeakerModel)),
  menuItems: types.maybe(types.array(types.string)),
  sponsor: types.maybe(types.string),
  talkType: types.maybe(types.string),
  location: types.maybe(types.string),
})

export type Talk = typeof TalkModel.Type

export type TalkSnapshot = typeof TalkModel.SnapshotType
