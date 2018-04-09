import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { PresentedBy } from "./presented-by"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { WiFi } from "./wi-fi"
import { Sponsors } from "./sponsors"

export interface InfoScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: palette.portGore,
}
const TEXT: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}

export class InfoScreen extends React.Component<InfoScreenProps, {}> {
  render() {
    return (
      <Screen preset="scrollStack" style={ROOT} backgroundColor={palette.portGore}>
        <Text preset="title" tx="infoScreen.header" style={TEXT} />
        <WiFi />
        <Sponsors />
        <PresentedBy />
      </Screen>
    )
  }
}
