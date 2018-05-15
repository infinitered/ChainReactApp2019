import { ViewStyle, TouchableOpacityProperties, TextStyle } from "react-native"
import { SocialButtonPresetNames } from "./social-button.presets"

export interface SocialButtonProps extends TouchableOpacityProperties {
  /**
   * One of the different types of text presets.
   */
  preset?: SocialButtonPresetNames
  link: string
}
