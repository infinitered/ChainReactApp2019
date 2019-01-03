import * as React from "react"
import { View, ViewStyle, TextStyle, TouchableOpacityProperties } from "react-native"
import { Text } from "../../../shared/text"
import { Button } from "../../../shared/button"
import { spacing } from "../../../../theme/spacing"
import { palette } from "../../../../theme/palette"
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
