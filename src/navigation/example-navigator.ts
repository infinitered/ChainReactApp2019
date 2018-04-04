import { StackNavigator } from "react-navigation"
import { WelcomeScreen } from "../views/example/welcome-screen"
import { SecondExampleScreen } from "../views/example/second-example-screen"

export const ExampleNavigator = StackNavigator({
  welcome: { screen: WelcomeScreen },
  secondExample: { screen: SecondExampleScreen },
})
