import * as React from "react"
import { Image } from "react-native"
import { SponsorLogoProps } from "./sponsor-logo.props"
import { sponsorLogoSizePresets, sponsors } from "./sponsor-logo.presets"

export class SponsorLogo extends React.Component<SponsorLogoProps, {}> {
  render() {
    const { size, sponsor, style } = this.props
    return (
      <Image source={sponsors[sponsor]} style={{ ...sponsorLogoSizePresets[size], ...style }} />
    )
  }
}
