import { types } from "mobx-state-tree"
import { NavigationStoreModel } from "../navigation-store"
import { createTalkStoreModel } from "../talk-store"
import { SpeakerStoreModel } from "../speaker-store";

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  navigationStore: types.optional(NavigationStoreModel, {}),
  talkStore: createTalkStoreModel(),
  speakerStore: types.optional(SpeakerStoreModel, {}),
  // attractionStore: types.optional(AttractionStoreModel, {}),
  // sponsorStore: types.optional(SponsorStoreModel, {})
})

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType
