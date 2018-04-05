import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../../theme/color"
import { spacing } from "../../../theme/spacing"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  justifyContent: "flex-start",
  alignItems: "center",
  alignSelf: "flex-end",
  width: 375,
  height: 117,
  paddingTop: 16,
  paddingHorizontal: 20,
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
  dark: { ...BASE_VIEW, backgroundColor: color.palette.ebony } as ViewStyle,
}

/**
 * A list of preset names.
 */
export type FooterPresetNames = keyof typeof viewPresets
