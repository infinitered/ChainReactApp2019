import * as React from "react"
import { Image } from "react-native"
import { spacing } from "../../../../../theme/spacing"
import { palette } from "../../../../../theme/palette"
import { SponsorLogoProps } from "./sponsor-logo.props"
import { SponsorLogoSizePresets, SponsorLogoPresets } from "./sponsor-logo.presets"

export class SponsorLogo extends React.Component<SponsorLogoProps, {}> {
  render() {
    const { size, sponsor } = this.props
    return <Image source={SponsorLogoPresets[sponsor]} style={SponsorLogoSizePresets[size]} />
  }
}
