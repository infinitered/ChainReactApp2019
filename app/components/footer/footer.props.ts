import { ViewStyle, ViewProperties } from "react-native"
import { FooterPresetNames } from "./footer.presets"

export interface FooterProps extends ViewProperties {
  /**
   * The children to display if not using `tx` or nested components.
   */
  children?: object

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * One of the different types of text presets.
   */
  preset?: FooterPresetNames
}
