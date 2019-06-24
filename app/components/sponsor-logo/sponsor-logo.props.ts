import { ViewProperties, ImageStyle } from "react-native"
import { SponsorLogoSizePresetNames, SponsorNames } from "./sponsor-logo.presets"

export interface SponsorLogoProps extends ViewProperties {
  size?: SponsorLogoSizePresetNames
  sponsor?: SponsorNames
  style?: ImageStyle
  subtitle?: string
}
