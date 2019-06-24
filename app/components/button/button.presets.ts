import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.medium,
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
}

const DARK_BASE_VIEW: ViewStyle = {
  backgroundColor: color.palette.vintageRock,
  paddingVertical: spacing.small,
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing.large,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondary information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.palette.crimson } as ViewStyle,
  dark: { ...BASE_VIEW, ...DARK_BASE_VIEW } as ViewStyle,
}

export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
  dark: { ...BASE_TEXT, fontSize: 14, color: color.palette.shamrock, height: 14 } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
