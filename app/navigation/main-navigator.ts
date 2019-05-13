import { createStackNavigator, createBottomTabNavigator } from "react-navigation"
import { ScheduleScreen } from "../screens/schedule-screen"
import { VenueScreen } from "../screens/venue-screen"
import { InfoScreen } from "../screens/info-screen"
import { TalkDetailsScreen } from "../screens/talk-details"
import { ProfileScreen } from "../screens/profile-screen"
import { TabBar } from "../components/tab-bar"
import { CodeOfConductScreen } from "../screens/code-of-conduct"

export const MainNavigator = createStackNavigator(
  {
    tabs: {
      screen: createBottomTabNavigator(
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
          profile: { screen: ProfileScreen },
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
