import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../../../theme/color"
import { spacing } from "../../../../theme/spacing"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  height: 262,
  width: 379,
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing.ginormous + spacing.large,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presentedByPresets = {
  /**
   * A smaller piece of secondard information.
   */
  default: { ...BASE_VIEW } as ViewStyle,
}

/**
 * A list of preset names.
 */
export type PresentedByPresetNames = keyof typeof presentedByPresets
