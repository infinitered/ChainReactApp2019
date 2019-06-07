import * as React from "react"
import { View, ViewStyle, TextStyle, Linking, Platform } from "react-native"
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

export function Photobomb() {
  const onPressLink = () => {
    const url = Platform.select({
      ios: "https://itunes.apple.com/us/app/chain-react-photobomb/id1253527606?mt=8",
      android: "https://play.google.com/store/apps/details?id=com.echobind.chainreactphotobomb",
    })
    Linking.openURL(url)
  }

  return (
    <View style={ROOT}>
      <Text preset="header" tx="infoScreen.photobomb.title" style={HEADER} />
      <Text preset="body" tx="infoScreen.photobomb.description" style={BODY} />
      <Button tx="infoScreen.photobomb.button" preset="dark" onPress={onPressLink} />
    </View>
  )
}
