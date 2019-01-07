import * as React from "react"
import { View, ViewStyle, TextStyle, Linking } from "react-native"
import { Text } from "../text"
import { Button } from "../button"
import { palette, spacing } from "../../theme"
import { TravelOption } from "../travel-option"

const ROOT: ViewStyle = {
  marginTop: spacing.huge,
  paddingHorizontal: spacing.large,
  marginBottom: spacing.huge,
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
          text="PARKING RECOMMENDATION"
          preset="dark"
          onPress={() => Linking.openURL(LINK)}
          style={DESCRIPTION}
        />
      </View>
    )
  }
}
