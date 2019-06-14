import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../text"
import { Button } from "../button"
import { spacing, palette } from "../../theme"

const ROOT: ViewStyle = {
  marginTop: spacing.huge,
  paddingHorizontal: spacing.large,
}

const HEADER: TextStyle = {
  color: palette.white,
}
const BODY: TextStyle = {
  marginTop: spacing.medium,
  marginBottom: spacing.medium,
}

export function ContentLink(props: {
  headerTx: string
  bodyTx: string
  buttonTx: string
  style?: ViewStyle
  onPressLink: () => void,
}) {
  return (
    <View style={{ ...ROOT, ...props.style }}>
      <Text preset="header" tx={props.headerTx} style={HEADER} />
      <Text preset="body" tx={props.bodyTx} style={BODY} />
      <Button tx={props.buttonTx} preset="dark" onPress={props.onPressLink} />
    </View>
  )
}
