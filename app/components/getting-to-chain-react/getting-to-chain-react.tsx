import * as React from "react"
import { View, ViewStyle, TextStyle, Linking } from "react-native"
import { Text } from "../text"
import { Button } from "../button"
import { palette, spacing } from "../../theme"
import { TravelOption } from "../travel-option"

const ROOT: ViewStyle = {
  marginTop: spacing.huge,
  paddingHorizontal: spacing.large,
  marginBottom: spacing.large,
}
const TITLE_GRAY: TextStyle = {
  color: palette.offWhite,
}
const SUBTITLE: TextStyle = {
  color: palette.shamrock,
  marginTop: 78,
}
const DESCRIPTION: TextStyle = {
  marginTop: spacing.large,
}
const RIDE_BUTTON: ViewStyle = {
  alignItems: "center",
  // flexDirection: "row",
  // justifyContent: "flex-start",
  marginTop: spacing.large,
}
const LYFT_BUTTON: ViewStyle = {
  ...RIDE_BUTTON,
  backgroundColor: "#FC1FBE",
}
const UBER_BUTTON: ViewStyle = {
  ...RIDE_BUTTON,
  backgroundColor: "black",
}
const RIDE_BUTTON_TEXT: TextStyle = {
  fontSize: 16,
  color: "white",
  textAlign: "center",
}
const LINK: string = "https://www.pcs.org/inside-pcs/directions#Parking"

export class GettingToChainReact extends React.Component<{}, {}> {
  render() {
    return (
      <View style={ROOT}>
        <Text preset="header" tx="venueScreen.gettingToChainReact.title1" />
        <Text preset="header" tx="venueScreen.gettingToChainReact.title2" style={TITLE_GRAY} />
        <Text
          preset="sectionHeader"
          tx="venueScreen.gettingToChainReact.subtitle"
          style={SUBTITLE}
        />
        <Text preset="body" tx="venueScreen.gettingToChainReact.description1" style={DESCRIPTION} />
        <Text preset="body" tx="venueScreen.gettingToChainReact.description2" style={DESCRIPTION} />
        <TravelOption preset="rideShare" />
        <TravelOption preset="massTransit" />
        <Button
          imageSource={require("./logo-lyft.png")}
          text="Get a ride"
          onPress={() => Linking.openURL(LINK)}
          textStyle={RIDE_BUTTON_TEXT}
          style={LYFT_BUTTON}
        />
        <Button
          imageSource={require("./logo-uber.png")}
          text="Get a ride"
          onPress={() => Linking.openURL(LINK)}
          textStyle={RIDE_BUTTON_TEXT}
          style={UBER_BUTTON}
        />
        <Button
          text="PARKING RECOMMENDATION"
          preset="dark"
          onPress={() => Linking.openURL(LINK)}
          style={DESCRIPTION}
        />
      </View>
    )
  }
}
