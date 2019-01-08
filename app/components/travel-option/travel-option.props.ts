import { TextProperties } from "react-native"
import { TravelOptionPresets } from "./travel-option.presets"

export interface TravelOptionProps extends TextProperties {
  preset?: TravelOptionPresets
}
