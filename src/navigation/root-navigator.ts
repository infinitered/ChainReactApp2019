import { StackNavigator } from "react-navigation"
import { MainNavigator } from "./main-navigator"

export const RootNavigator = StackNavigator(
  {
    mainStack: { screen: MainNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
