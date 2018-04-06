import * as React from "react"
import { TouchableHighlight, Image, Linking } from "react-native"
import { viewPresets, imageSource, imageStyle, linkPresets } from "./social-button.presets"
import { SocialButtonProps } from "./social-button.props"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function SocialButton(props: SocialButtonProps) {
  // grab the props
  const { preset = "website", ...rest } = props

  const image = imageSource[preset] || imageSource["website"]
  const link = linkPresets[preset] || linkPresets["website"]

  return (
    <TouchableHighlight style={viewPresets.default} onPress={() => Linking.openURL(link)} {...rest}>
      <Image source={image} style={imageStyle.default} />
    </TouchableHighlight>
  )
}
