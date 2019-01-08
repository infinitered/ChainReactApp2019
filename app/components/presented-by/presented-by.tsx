import * as React from "react"
import { View, Image, ViewStyle, ImageStyle, TextStyle, Dimensions } from "react-native"
import { presentedByPresets } from "./presented-by.presets"
import { PresentedByProps } from "./presented-by.props"
import { Text } from "../text"
import { SocialButton } from "../social-button"
import { spacing, palette } from "../../theme"

const SCREEN_WIDTH = Dimensions.get("window").width
const MAX_WIDTH = SCREEN_WIDTH - 2 * spacing.large

const BACKGROUND: ImageStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  alignSelf: "center",
}
const TEXT: TextStyle = {
  color: palette.offWhite,
}
const TITLE: TextStyle = {
  color: palette.white,
}
const SUBTITLE: TextStyle = {
  ...TEXT,
}
const BIO: TextStyle = {
  ...TEXT,
  marginVertical: spacing.large,
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
  marginBottom: 107,
  maxWidth: MAX_WIDTH,
  flexWrap: "wrap",
}
const SOCIAL_BUTTON: ViewStyle = {
  marginTop: spacing.small,
}
const FOOTER: ViewStyle = {
  alignItems: "center",
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
    <View>
      <Image style={BACKGROUND} source={backgroundImage} />
      <View style={viewStyle} {...rest}>
        <Text preset="header" tx="infoScreen.presentedBy.title" style={TITLE} />
        <Text preset="header" tx="infoScreen.presentedBy.subtitle" style={SUBTITLE} />
        <Text preset="body" style={BIO} tx="infoScreen.presentedBy.bio" />
        <View style={FOOTER}>
          <Image style={LOGO} source={infiniteRedLogo} />
          <View style={SOCIAL_WRAPPER}>
            <SocialButton preset="website" link={linkPresets.website} style={SOCIAL_BUTTON} />
            <SocialButton preset="twitter" link={linkPresets.twitter} style={SOCIAL_BUTTON} />
            <SocialButton preset="github" link={linkPresets.github} style={SOCIAL_BUTTON} />
            <SocialButton preset="medium" link={linkPresets.medium} style={SOCIAL_BUTTON} />
            <SocialButton preset="dribbble" link={linkPresets.dribbble} style={SOCIAL_BUTTON} />
            <SocialButton preset="instagram" link={linkPresets.instagram} style={SOCIAL_BUTTON} />
            <SocialButton preset="facebook" link={linkPresets.facebook} style={SOCIAL_BUTTON} />
          </View>
        </View>
      </View>
    </View>
  )
}
