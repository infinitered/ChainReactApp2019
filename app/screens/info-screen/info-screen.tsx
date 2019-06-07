import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Text } from "../../components/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../components/screen"
import { PresentedBy } from "../../components/presented-by"
import { palette, spacing } from "../../theme"
import { WiFi } from "../../components/wi-fi"
import { Conduct } from "../../components/conduct"
import { Sponsors } from "../../components/sponsors"
import { Photobomb } from "../../components/photobomb/photobomb"

export interface InfoScreenProps extends NavigationScreenProps<{}> {}

const TITLE: TextStyle = {
  marginLeft: spacing.large,
}
const ROOT: ViewStyle = {
  marginTop: spacing.extraLarge,
}

export class InfoScreen extends React.Component<InfoScreenProps, {}> {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Screen style={ROOT} preset="scrollStack" backgroundColor={palette.portGore}>
        <Text preset="title" tx="infoScreen.title" style={TITLE} />
        <WiFi />
        <Conduct onPress={() => this.props.navigation.navigate("codeOfConduct")} />
        <Photobomb />
        <Sponsors />
        <PresentedBy />
      </Screen>
    )
  }
}
