import * as React from "react"
import { TextStyle } from "react-native"
import { Text } from "../../components/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../components/screen"
import { PresentedBy } from "../../components/presented-by"
import { palette, spacing } from "../../theme"
import { WiFi } from "../../components/wi-fi"
import { Conduct } from "../../components/conduct"
import { Sponsors } from "../../components/sponsors"
import { SurveyLink } from "../../components/survey-link"

export interface InfoScreenProps extends NavigationScreenProps<{}> {}
export interface InfoScreenState {
  renderFullContent: boolean
}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}

export class InfoScreen extends React.Component<InfoScreenProps, InfoScreenState> {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    headerStyle: { backgroundColor: palette.portGore, borderBottomWidth: 0 },
  }

  state = {
    renderFullContent: false,
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ renderFullContent: true })
    })
  }

  render() {
    return (
      <Screen preset="scrollStack" backgroundColor={palette.portGore}>
        <Text preset="title" tx="infoScreen.title" style={TITLE} />
        <WiFi />
        <Conduct onPress={() => this.props.navigation.navigate("codeOfConduct")} />
        <SurveyLink />
        {this.state.renderFullContent ? <Sponsors /> : null}
        <PresentedBy />
      </Screen>
    )
  }
}
