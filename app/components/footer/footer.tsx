import * as React from "react"
import { View } from "react-native"
import { viewPresets } from "./footer.presets"
import { FooterProps } from "./footer.props"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Footer(props: FooterProps) {
  // grab the props
  const { preset = "dark", children, style: styleOverride, ...rest } = props

  // assemble the style
  const viewPresetToUse = viewPresets[preset] || viewPresets.dark

  const viewStyle = { ...viewPresetToUse, ...styleOverride }

  return (
    <View style={viewStyle} {...rest}>
      {children}
    </View>
  )
}
