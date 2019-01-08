import { createStackNavigator, createTabNavigator } from "react-navigation"
import { ScheduleScreen } from "../screens/schedule-screen"
import { VenueScreen } from "../screens/venue-screen"
import { InfoScreen } from "../screens/info-screen"
import { TalkDetailsScreen } from "../screens/talk-details"
import { ARScreen } from "../screens/ar-screen"
import { ARTab } from "../screens/artab-screen"
import { TabBar } from "../components/tab-bar"
import { CodeOfConductScreen } from "../screens/code-of-conduct"

export const MainNavigator = createStackNavigator(
  {
    tabs: {
      screen: createTabNavigator(
        {
          schedule: createStackNavigator(
            {
              scheduleScreen: { screen: ScheduleScreen },
              talkDetails: { screen: TalkDetailsScreen },
            },
            {
              // headerMode: "none",
              initialRouteName: "scheduleScreen",
            },
          ),
          venue: { screen: VenueScreen },
          info: createStackNavigator(
            {
              infoScreen: { screen: InfoScreen },
              codeOfConduct: { screen: CodeOfConductScreen },
            },
            {
              initialRouteName: "infoScreen",
            },
          ),
          ar: { screen: ARTab },
        },
        {
          tabBarComponent: TabBar,
          tabBarPosition: "bottom",
          animationEnabled: false,
          swipeEnabled: false,
          initialRouteName: "schedule",
        },
      ),
    },
    arscreen: { screen: ARScreen },
  },
  {
    headerMode: "none",
    initialRouteName: "tabs",
    navigationOptions: {
      gesturesEnabled: false,
    },
    cardStyle: { shadowColor: "transparent" },
  },
)
