import * as React from "react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"

export interface VenueScreenProps extends NavigationScreenProps<{}> {}

export class VenueScreen extends React.Component<VenueScreenProps, {}> {
  render() {
    return (
      <Screen preset="fixedCenter">
        <Text tx="venueScreen.title" />
      </Screen>
    )
  }
}
