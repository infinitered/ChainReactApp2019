import { createStackNavigator, createTabNavigator } from "react-navigation"
import { ScheduleScreen } from "../views/screens/schedule-screen"
import { VenueScreen } from "../views/screens/venue-screen"
import { InfoScreen } from "../views/screens/info-screen"
import { TalkDetailsScreen } from "../views/screens/talk-details"
import { ARScreen } from "../views/screens/ar-screen"
import { ARTab } from "../views/screens/artab-screen"
import { TabBar } from "../views/shared/tab-bar"
import { CodeOfConductScreen } from "../views/screens/code-of-conduct"

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
