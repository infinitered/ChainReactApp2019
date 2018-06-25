import * as React from "react"
import { View, Image, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { presentedByPresets } from "./presented-by.presets"
import { PresentedByProps } from "./presented-by.props"
import { Text } from "../../../shared/text"
import { SocialButton } from "../../../shared/social-button"
import { spacing } from "../../../../theme/spacing"
import { palette } from "../../../../theme/palette"

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
  marginBottom: 117,
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
            <SocialButton preset="website" link={linkPresets.website} />
            <SocialButton preset="twitter" link={linkPresets.twitter} />
            <SocialButton preset="github" link={linkPresets.github} />
            <SocialButton preset="medium" link={linkPresets.medium} />
            <SocialButton preset="dribbble" link={linkPresets.dribbble} />
            <SocialButton preset="instagram" link={linkPresets.instagram} />
          </View>
        </View>
      </View>
    </View>
  )
}
