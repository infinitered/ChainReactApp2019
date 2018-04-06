import { StackNavigator } from "react-navigation"
import { MainNavigator } from "./main-navigator"
import { WelcomeScreen } from "../views/screens/welcome-screen"

export const RootNavigator = StackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    mainStack: { screen: MainNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
