import * as React from "react"
import { View, Image, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { Text } from "../text"
import { spacing } from "../../theme"

const venue = require("./img.venue.png")

const ROOT: ViewStyle = {
  flex: 1,
  marginTop: spacing.extraLarge,
  paddingHorizontal: spacing.large,
  marginBottom: 49,
}
const VENUE_STYLE: ImageStyle = {
  width: 314,
  height: 265,
  position: "absolute",
  top: 10,
  right: -spacing.large,
}
const TITLE: TextStyle = {
  marginTop: 223,
}
const DESCRIPTION: TextStyle = {
  marginTop: spacing.large,
}

export class GerdingTheater extends React.Component<{}, {}> {
  render() {
    return (
      <View style={ROOT}>
        <Image source={venue} style={VENUE_STYLE} />
        <Text preset="header" tx="venueScreen.gerdingTheater.title" style={TITLE} />
        <Text preset="body" tx="venueScreen.gerdingTheater.description" style={DESCRIPTION} />
      </View>
    )
  }
}
