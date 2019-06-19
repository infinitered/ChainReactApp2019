import { types } from "mobx-state-tree"

export const SettingModel = types.model().props({
  name: types.maybeNull(types.string),
  value: types.maybeNull(types.boolean),
})
export type SettingSnapshot = typeof SettingModel.SnapshotType
