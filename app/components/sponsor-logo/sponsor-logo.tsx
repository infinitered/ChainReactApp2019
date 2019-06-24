import * as React from "react"
import { Image, View, ViewStyle } from "react-native"
import { Text } from "../text"
import { SponsorLogoProps } from "./sponsor-logo.props"
import { sponsorLogoSizePresets, sponsors } from "./sponsor-logo.presets"

const ROOT: ViewStyle = {
  flexDirection: "column",
}

export class SponsorLogo extends React.Component<SponsorLogoProps, {}> {
  render() {
    const { size, sponsor, style, subtitle } = this.props
    return (
      <View style={ROOT}>
        <Image source={sponsors[sponsor]} style={{ ...sponsorLogoSizePresets[size], ...style }} />
        {subtitle && <Text text={subtitle} />}
      </View>
    )
  }
}
