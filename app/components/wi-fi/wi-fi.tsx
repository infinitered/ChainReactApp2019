import * as React from "react"
import { View, ViewStyle, TextStyle, Image, ImageStyle } from "react-native"
import { Text } from "../text"
import { spacing, palette } from "../../theme"

const ROOT: ViewStyle = {
  marginTop: spacing.huge,
  paddingHorizontal: spacing.large,
}
const BODY: TextStyle = {
  marginTop: spacing.large,
}
const IMAGE: ImageStyle = {
  width: "60%",
  height: 75,
  resizeMode: "contain",
}
const INPUT_WRAPPER: ViewStyle = {
  flex: 1,
  borderBottomColor: palette.martinique,
  borderBottomWidth: 1,
  paddingTop: spacing.large,
  paddingBottom: 8,
  marginTop: 40,
}
const INPUT: TextStyle = {
  marginTop: spacing.large,
}
const SPLITZY: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

export class WiFi extends React.Component<{}, {}> {
  render() {
    return (
      <View style={ROOT}>
        <Text preset="header" tx="infoScreen.wifi.title" />
        <Text preset="body" tx="infoScreen.wifi.description" style={BODY} />
        <View style={INPUT_WRAPPER}>
          <View style={SPLITZY}>
            <Text preset="label" tx="infoScreen.wifi.networkLabel" />
            <Image style={IMAGE} source={require("./sponsor-logo/playstation.png")} />
          </View>
          <Text preset="input" tx="infoScreen.wifi.networkName" style={INPUT} />
        </View>
        <View style={INPUT_WRAPPER}>
          <Text preset="label" tx="infoScreen.wifi.passwordLabel" />
          <Text preset="input" tx="infoScreen.wifi.password" style={INPUT} />
        </View>
      </View>
    )
  }
}
