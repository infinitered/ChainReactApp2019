import * as React from "react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"

export interface VenueScreenProps extends NavigationScreenProps<{}> {}

export class VenueScreen extends React.Component<VenueScreenProps, {}> {
  render() {
    return (
      <Screen preset="fixedCenter" backgroundColor={palette.portGore}>
        <Text preset="title" tx="venueScreen.title" />
      </Screen>
    )
  }
}
