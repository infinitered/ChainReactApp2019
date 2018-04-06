import { StackNavigator, TabNavigator } from "react-navigation"
import { ScheduleScreen } from "../views/screens/schedule-screen"
import { VenueScreen } from "../views/screens/venue-screen"
import { InfoScreen } from "../views/screens/info-screen"
import { TalkDetailsScreen } from "../views/screens/talk-details"
import { TabBar } from "../views/shared/tab-bar"

export const MainNavigator = StackNavigator(
  {
    tabs: {
      screen: TabNavigator(
        {
          schedule: StackNavigator(
            {
              schedule: ScheduleScreen,
              talkDetails: TalkDetailsScreen,
            },
            {
              headerMode: "none",
              initialRouteName: "schedule",
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
  },
)
