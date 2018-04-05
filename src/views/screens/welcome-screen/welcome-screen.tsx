import * as React from "react"
import { ViewStyle, TextStyle } from "react-native"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { Footer } from "../../shared/footer"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
const backgroundImage = require("./bg.welcome.png")

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = { justifyContent: "flex-end" }
const HEADER1: TextStyle = { paddingHorizontal: spacing.large, color: palette.white }
const HEADER2: TextStyle = {
  marginBottom: 38,
  paddingHorizontal: spacing.large,
  color: palette.offWhite,
}
const SUBHEADER: TextStyle = {
  marginBottom: 290,
  paddingHorizontal: spacing.large,
  color: palette.offWhite,
}

export class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
  nextScreen = () => this.props.navigation.navigate("info")

  render() {
    return (
      <Screen preset="fixed" style={ROOT} backgroundImage={backgroundImage}>
        <Text preset="header" tx="welcomeScreen.header1" style={HEADER1} />
        <Text preset="header" tx="welcomeScreen.header2" style={HEADER2} />
        <Text preset="subheader" tx="welcomeScreen.subtitle" style={SUBHEADER} />
        <Footer>
          <Button
            tx="welcomeScreen.nextScreenButton"
            onPress={this.nextScreen}
            style={{ width: 335, height: 50, borderRadius: 0 }}
            textStyle={{ fontSize: 14, fontWeight: "500" }}
          />
        </Footer>
      </Screen>
    )
  }
}
