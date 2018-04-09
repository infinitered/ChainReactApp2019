import { ViewProperties } from "react-native"
import { SponsorLogoSizePresets, SponsorLogoPresets } from "./sponsor-logo.presets"

export interface SponsorLogoProps extends ViewProperties {
  size?: SponsorLogoSizePresets
  sponsor?: SponsorLogoPresets
}
