import * as React from "react"
import { TextStyle } from "react-native"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { GerdingTheater } from "./gerding-theater"
import { GettingToChainReact } from "./getting-to-chain-react"
import { NearbyAttractions } from "./nearby-attractions"

export interface VenueScreenProps extends NavigationScreenProps<{}> {}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}

export class VenueScreen extends React.Component<VenueScreenProps, {}> {
  render() {
    return (
      <Screen preset="scroll" backgroundColor={palette.portGore}>
        <Text preset="title" tx="venueScreen.title" style={TITLE} />
        <GerdingTheater />
        <GettingToChainReact />
        <NearbyAttractions />
      </Screen>
    )
  }
}
