import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../text"
import { textPresets, viewPresets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { HIT_SLOP } from "../../theme"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "primary",
    tx,
    text,
    children,
    style: styleOverride,
    textStyle: textStyleOverride,
    ...rest
  } = props

  // assemble the style
  const viewPresetToUse = viewPresets[preset] || viewPresets.primary
  const textPresetToUse = textPresets[preset] || textPresets.primary

  const viewStyle = { ...viewPresetToUse, ...styleOverride }
  const textStyle = { ...textPresetToUse, ...textStyleOverride }

  return (
    <TouchableOpacity style={viewStyle} hitSlop={HIT_SLOP} {...rest}>
      <Text tx={tx} text={text} style={textStyle} />
      {children}
    </TouchableOpacity>
  )
}
