import * as React from "react"
import { Platform, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { color, palette, typography } from "../../theme"
import { translate } from "../../i18n"
import { Text } from "../text"
import { TextFieldProps } from "./text-field.props"

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  minHeight: Platform.select({ ios: 32, android: null }),
  fontSize: 18,
  backgroundColor: color.primaryDarker,
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {
    borderBottomColor: palette.martinique,
    borderBottomWidth: 1,
  },
}

/**
 * A component which has a label and an input together.
 */
export class TextField extends React.Component<TextFieldProps, {}> {
  render() {
    const {
      placeholderTx,
      placeholder,
      labelTx,
      label,
      preset = "default",
      style: styleOverride,
      inputStyle: inputStyleOverride,
      ...rest
    } = this.props
    const containerStyle: ViewStyle = { ...PRESETS[preset], ...styleOverride }
    const inputStyle: TextStyle = { ...INPUT, ...inputStyleOverride }
    const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

    return (
      <View style={containerStyle}>
        {(label || labelTx) && <Text preset="fieldLabel" tx={labelTx} text={label} />}
        <TextInput
          placeholder={actualPlaceholder}
          placeholderTextColor={color.palette.lighterGrey}
          underlineColorAndroid={color.transparent}
          {...rest}
          style={inputStyle}
        />
      </View>
    )
  }
}
