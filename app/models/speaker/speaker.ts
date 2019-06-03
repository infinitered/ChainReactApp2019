import { types } from "mobx-state-tree"

export const SpeakerModel = types.model().props({
  id: types.identifier,
  name: types.maybeNull(types.string),
  employer: types.maybeNull(types.string),
  image: types.maybeNull(types.string),
  facebook: types.maybeNull(types.string),
  github: types.maybeNull(types.string),
  twitter: types.maybeNull(types.string),
  medium: types.maybeNull(types.string),
  instagram: types.maybeNull(types.string),
  dribbble: types.maybeNull(types.string),
  websites: types.maybeNull(types.array(types.string)),
  bio: types.maybeNull(types.string),
})
