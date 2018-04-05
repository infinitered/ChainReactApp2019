import * as React from "react"
import { Text } from "../../shared/text"
import { Button } from "../../shared/button"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { Footer } from "../../shared/footer"
import { palette } from "../../../theme/palette"
const backgroundImage = require("./bg.welcome.png")

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

export class WelcomeScreen extends React.Component<WelcomeScreenProps, {}> {
  nextScreen = () => this.props.navigation.navigate("info")

  render() {
    return (
      <Screen
        preset="fixed"
        style={{ justifyContent: "flex-end" }}
        backgroundImage={backgroundImage}
      >
        <Text
          preset="header"
          tx="welcomeScreen.header1"
          style={{ paddingHorizontal: 20, color: palette.white }}
        />
        <Text
          preset="header"
          tx="welcomeScreen.header2"
          style={{ marginBottom: 38, paddingHorizontal: 20, color: palette.offWhite }}
        />
        <Text
          preset="subheader"
          tx="welcomeScreen.subtitle"
          style={{ marginBottom: 290, paddingHorizontal: 20, color: palette.offWhite }}
        />
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
