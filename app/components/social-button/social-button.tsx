import * as React from "react"
import { Image, Linking, TouchableHighlight } from "react-native"
import { imageSource, imageStyle, viewPresets } from "./social-button.presets"
import { SocialButtonProps } from "./social-button.props"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function SocialButton(props: SocialButtonProps) {
  // grab the props
  const { preset = "website", link, style, ...rest } = props

  const image = imageSource[preset] || imageSource["website"]

  return (
    <TouchableHighlight
      style={[viewPresets.default, style]}
      onPress={() => Linking.openURL(link)}
      {...rest}
    >
      <Image source={image} style={imageStyle.default} />
    </TouchableHighlight>
  )
}
