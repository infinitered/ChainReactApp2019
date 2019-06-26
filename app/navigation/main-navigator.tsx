import * as React from "react"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"
import { ScheduleScreen } from "../screens/schedule-screen"
import { VenueScreen } from "../screens/venue-screen"
import { InfoScreen } from "../screens/info-screen"
import { TalkDetailsScreen } from "../screens/talk-details"
import { ProfileScreen } from "../screens/profile-screen"
import { CodeOfConductScreen } from "../screens/code-of-conduct"
import { TabIcon } from "../components/tab-icon"
import { color, palette, spacing } from "../theme"

export const MainNavigator = createStackNavigator(
  {
    tabs: {
      screen: createBottomTabNavigator(
        {
          schedule: createStackNavigator(
            {
              scheduleScreen: { screen: ScheduleScreen },
              talkDetails: { screen: TalkDetailsScreen },
              talkCodeOfConduct: { screen: CodeOfConductScreen },
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
          profile: createStackNavigator(
            {
              profileScreen: { screen: ProfileScreen },
              profileCodeOfConduct: { screen: CodeOfConductScreen },
            },
            {
              initialRouteName: "profileScreen",
            },
          ),
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
              const { routeName } = navigation.state
              return <TabIcon routeName={routeName} focused={focused} />
            },
          }),
          tabBarPosition: "bottom",
          animationEnabled: false,
          swipeEnabled: false,
          initialRouteName: "schedule",
          tabBarOptions: {
            style: {
              backgroundColor: color.tabbar,
              height: 56,
              paddingVertical: spacing.tiny,
            },
            activeTintColor: palette.white,
          },
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
