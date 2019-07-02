import { types } from "mobx-state-tree"
import { NavigationStoreModel } from "../navigation-store"
import { createTalkStoreModel } from "../talk-store"

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  navigationStore: types.optional(NavigationStoreModel, {}),
  talkStore: createTalkStoreModel(),
})

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType
