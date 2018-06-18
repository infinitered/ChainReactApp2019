import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { PresentedBy } from "./presented-by"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { WiFi } from "./wi-fi"
import { Conduct } from "./conduct"
import { Sponsors } from "./sponsors"

export interface InfoScreenProps extends NavigationScreenProps<{}> {}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}
const ROOT: ViewStyle = {
  marginTop: spacing.extraLarge,
}

export class InfoScreen extends React.Component<InfoScreenProps, {}> {
  render() {
    return (
      <Screen style={ROOT} preset="scrollStack" backgroundColor={palette.portGore}>
        <Text preset="title" tx="infoScreen.title" style={TITLE} />
        <WiFi />
        <Conduct />
        <Sponsors />
        <PresentedBy />
      </Screen>
    )
  }
}
