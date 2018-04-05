import { StackNavigator } from "react-navigation"
import { WelcomeScreen } from "../views/screens/welcome-screen"
import { InfoScreen } from "../views/screens/info-screen"

export const MainNavigator = StackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    info: { screen: InfoScreen },
  },
  {
    headerMode: "none",
  },
)
