import { types } from "mobx-state-tree"

export const SpeakerModel = types.model().props({
  id: types.identifier(),
  name: types.maybe(types.string),
  employer: types.maybe(types.string),
  image: types.maybe(types.string),
  facebook: types.maybe(types.string),
  github: types.maybe(types.string),
  twitter: types.maybe(types.string),
  medium: types.maybe(types.string),
  instagram: types.maybe(types.string),
  dribbble: types.maybe(types.string),
  websites: types.maybe(types.array(types.string)),
  bio: types.maybe(types.string),
})
