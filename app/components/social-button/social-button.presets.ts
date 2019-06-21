import { ViewStyle } from "react-native"
import { spacing } from "../../theme"

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
  website: require("./social_icon_assets/link.png"),
  twitter: require("./social_icon_assets/twitter.png"),
  github: require("./social_icon_assets/github.png"),
  medium: require("./social_icon_assets/medium.png"),
  dribbble: require("./social_icon_assets/dribbble.png"),
  instagram: require("./social_icon_assets/instagram.png"),
  facebook: require("./social_icon_assets/facebook.png"),
  email: require("./social_icon_assets/email.icon.png"),
  phone: require("./social_icon_assets/phone.icon.png"),
  slack: require("./social_icon_assets/slack.png"),
}

export const imageStyle = {
  default: {},
}

/**
 * A list of preset names.
 */
export type SocialButtonPresetNames = keyof typeof imageSource
