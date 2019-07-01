import * as React from "react"
import { Image, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "../text"
import { SponsorLogoProps } from "./sponsor-logo.props"
import { sponsorLogoSizePresets, sponsors } from "./sponsor-logo.presets"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  flexDirection: "column",
  width: "50%",
  alignItems: "center",
}

const SUBTITLE: TextStyle = {
  fontSize: 12,
  fontWeight: "600",
  letterSpacing: 3.0,
  color: color.palette.shamrock,
}

export class SponsorLogo extends React.Component<SponsorLogoProps, {}> {
  render() {
    const { size, sponsor, style, subtitle } = this.props
    if (!subtitle) {
      return (
        <Image source={sponsors[sponsor]} style={{ ...sponsorLogoSizePresets[size], ...style }} />
      )
    } else {
      return (
        <View style={ROOT}>
          <Image
            source={sponsors[sponsor]}
            style={{ ...sponsorLogoSizePresets[size], ...style, marginBottom: 0 }}
          />
          {subtitle && <Text style={SUBTITLE} text={subtitle} />}
        </View>
      )
    }
  }
}
