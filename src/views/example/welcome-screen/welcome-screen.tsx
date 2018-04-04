import * as React from "react"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

export class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
  nextScreen = () => this.props.navigation.navigate("secondExample")

  render() {
    return (
      <Screen preset="fixedCenter">
        <Text preset="header" tx="welcomeScreen.header" />
        <Button tx="welcomeScreen.nextScreenButton" onPress={this.nextScreen} />
      </Screen>
    )
  }
}
