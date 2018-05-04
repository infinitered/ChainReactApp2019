import * as React from "react"
import { View, Image, ViewStyle, ImageStyle } from "react-native"
import { presentedByPresets } from "./presented-by.presets"
import { PresentedByProps } from "./presented-by.props"
import { Text } from "../../../shared/text"
import { SocialButton } from "../../../shared/social-button"
import { spacing } from "../../../../theme/spacing"

const BACKGROUND: ImageStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
}
const LOGO: ImageStyle = {
  width: 110,
  height: 49,
  marginTop: spacing.medium,
}
const SOCIAL_WRAPPER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 40,
  marginBottom: 117,
}
const backgroundImage = require("./bg.team.png")
const infiniteRedLogo = require("./logo.infinitered.png")

export const linkPresets = {
  website: "https://infinite.red",
  twitter: "https://twitter.com/infinite_red",
  github: "https://github.com/infinitered",
  medium: "https://shift.infinite.red",
  dribbble: "https://dribbble.com/infinitered",
  instagram: "https://www.instagram.com/infinitered_designers/",
  facebook: "https://facebook.com/infiniteredinc",
}

export function PresentedBy(props: PresentedByProps) {
  // grab the props
  const { ...rest } = props

  // assemble the style
  const viewPresetToUse = presentedByPresets.default

  const viewStyle = { ...viewPresetToUse }

  return (
    <View style={viewStyle} {...rest}>
      <Image style={BACKGROUND} source={backgroundImage} />
      <Text tx="infoScreen.presentedBy" preset="label" />
      <Image style={LOGO} source={infiniteRedLogo} />
      <View style={SOCIAL_WRAPPER}>
        <SocialButton preset="website" link={linkPresets.website} />
        <SocialButton preset="twitter" link={linkPresets.twitter} />
        <SocialButton preset="github" link={linkPresets.github} />
        <SocialButton preset="medium" link={linkPresets.medium} />
        <SocialButton preset="dribbble" link={linkPresets.dribbble} />
        <SocialButton preset="instagram" link={linkPresets.instagram} />
      </View>
    </View>
  )
}
