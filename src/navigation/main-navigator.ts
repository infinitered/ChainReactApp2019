import { createStackNavigator, createTabNavigator } from "react-navigation"
import { ScheduleScreen } from "../views/screens/schedule-screen"
import { VenueScreen } from "../views/screens/venue-screen"
import { InfoScreen } from "../views/screens/info-screen"
import { TalkDetailsScreen } from "../views/screens/talk-details"
import { TabBar } from "../views/shared/tab-bar"

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
          info: { screen: InfoScreen },
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
