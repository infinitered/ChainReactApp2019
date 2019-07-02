import * as React from "react"
import { TextStyle, TouchableOpacityProperties, View, ViewStyle } from "react-native"
import { Text } from "../text"
import { Button } from "../button"
import { palette, spacing } from "../../theme"

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

export function Conduct(props: TouchableOpacityProperties) {
  return (
    <View style={ROOT}>
      <Text preset="header" tx="infoScreen.conduct.title" style={HEADER} />
      <Text preset="body" tx="infoScreen.conduct.description" style={BODY} />
      <Button text="VIEW CODE OF CONDUCT" preset="dark" onPress={props.onPress} />
    </View>
  )
}
