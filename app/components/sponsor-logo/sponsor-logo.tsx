import * as React from "react"
import { Image, View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../text"
import { SponsorLogoProps } from "./sponsor-logo.props"
import { sponsorLogoSizePresets, sponsors } from "./sponsor-logo.presets"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  flexDirection: "column",
  alignItems: "center",
}

const SUBTITLE: TextStyle = {
  color: color.palette.shamrock,
}

export class SponsorLogo extends React.Component<SponsorLogoProps, {}> {
  render() {
    const { size, sponsor, style, subtitle } = this.props
    return (
      <View style={ROOT}>
        <Image source={sponsors[sponsor]} style={{ ...sponsorLogoSizePresets[size], ...style }} />
        {subtitle && <Text style={SUBTITLE} text={subtitle} />}
      </View>
    )
  }
}
