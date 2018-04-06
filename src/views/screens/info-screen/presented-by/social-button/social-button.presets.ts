import { ViewStyle } from "react-native"
import { color } from "../../../../../theme/color"
import { spacing } from "../../../../../theme/spacing"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  width: 32,
  height: 32,
  justifyContent: "center",
  alignItems: "center",
  marginRight: spacing.medium,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  default: { ...BASE_VIEW } as ViewStyle,
}

export const imageSource = {
  website: require("./link.png"),
  twitter: require("./twitter.png"),
  github: require("./github.png"),
  medium: require("./medium.png"),
  dribbble: require("./dribbble.png"),
  instagram: require("./instagram.png"),
  facebook: require("./facebook.png"),
}

export const imageStyle = {
  default: {},
}

export const linkPresets = {
  website: "https://infinite.red",
  twitter: "https://twitter.com/infinite_red",
  github: "https://github.com/infinitered",
  medium: "https://shift.infinite.red",
  dribbble: "https://dribbble.com/infinitered",
  instagram: "https://www.instagram.com/infinitered_designers/",
  facebook: "https://facebook.com/infiniteredinc",
}

/**
 * A list of preset names.
 */
export type SocialButtonPresetNames = keyof typeof imageSource
