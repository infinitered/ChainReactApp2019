import * as React from "react"
import { View, Image, ViewStyle, ImageStyle } from "react-native"
import { presentedByPresets } from "./presented-by.presets"
import { PresentedByProps } from "./presented-by.props"
import { Text } from "../../../shared/text"
import { spacing } from "../../../../theme/spacing"
import { SocialButton } from "./social-button"

const BACKGROUND: ImageStyle = {
  position: "absolute",
  resizeMode: "cover",
  bottom: 0,
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
        <SocialButton preset="website" />
        <SocialButton preset="twitter" />
        <SocialButton preset="github" />
        <SocialButton preset="medium" />
        <SocialButton preset="dribbble" />
        <SocialButton preset="instagram" />
      </View>
    </View>
  )
}
