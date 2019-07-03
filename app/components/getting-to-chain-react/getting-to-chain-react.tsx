import * as React from "react"
import { Image, ImageStyle, Linking, TextStyle, View, ViewStyle } from "react-native"
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
const DRIVING_TITLE: TextStyle = {
  ...SUBTITLE,
  marginTop: 48,
}
const DESCRIPTION: TextStyle = {
  marginTop: spacing.large,
}
const RIDE_BUTTON: ViewStyle = {
  alignItems: "center",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  marginBottom: spacing.medium,
  marginHorizontal: spacing.large,
  paddingHorizontal: 16,
  paddingVertical: 8,
}
const LYFT_BUTTON: ViewStyle = {
  ...RIDE_BUTTON,
  backgroundColor: "#FC1FBE",
  marginTop: 40,
}
const UBER_BUTTON: ViewStyle = {
  ...RIDE_BUTTON,
  backgroundColor: "black",
}
const RIDE_BUTTON_ICON: ImageStyle = {
  height: 37,
  width: 65,
}
const RIDE_BUTTON_TEXT: TextStyle = {
  color: "white",
  flex: 1,
  fontSize: 14,
  letterSpacing: 3,
  paddingHorizontal: 0,
  textAlign: "center",
}
const LYFT_LINK =
  "https://lyft.com/ride?id=lyft&destination[latitude]=45.524168&destination[longitude]=-122.682034&partner=AOgviPj1KANm"
const UBER_LINK =
  "https://m.uber.com/ul/?action=setPickup&client_id=kZAgs9gWaBLXRkjw9olNYaWvWiJp4ikH&pickup=my_location&dropoff[formatted_address]=Portland%20Center%20Stage%20at%20The%20Armory%2C%20Northwest%2011th%20Avenue%2C%20Portland%2C%20OR%2C%20USA&dropoff[latitude]=45.524168&dropoff[longitude]=-122.682034"
const PARKING_LINK = "https://www.pcs.org/inside-pcs/directions#Parking"

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
          tx="venueScreen.gettingToChainReact.rideWithLyft"
          onPress={() => Linking.openURL(LYFT_LINK)}
          textStyle={RIDE_BUTTON_TEXT}
          style={LYFT_BUTTON}
        >
          <Image resizeMode="center" source={require("./logo-lyft.png")} style={RIDE_BUTTON_ICON} />
        </Button>
        <Button
          tx="venueScreen.gettingToChainReact.rideWithUber"
          onPress={() => Linking.openURL(UBER_LINK)}
          textStyle={RIDE_BUTTON_TEXT}
          style={UBER_BUTTON}
        >
          <Image resizeMode="center" source={require("./logo-uber.png")} style={RIDE_BUTTON_ICON} />
        </Button>
        <Text
          preset="sectionHeader"
          tx="venueScreen.gettingToChainReact.drivingTitle"
          style={DRIVING_TITLE}
        />
        <Text
          preset="body"
          tx="venueScreen.gettingToChainReact.drivingDescription"
          style={DESCRIPTION}
        />
        <Button
          text="PARKING RECOMMENDATION"
          preset="dark"
          onPress={() => Linking.openURL(PARKING_LINK)}
          style={DESCRIPTION}
        />
      </View>
    )
  }
}
