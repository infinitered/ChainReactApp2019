import * as React from "react"
import {
  Animated,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from "react-native"
import { color } from "../../../theme"
import { spacing } from "../../../theme"
import { Text } from "../../shared/text"

// static styles
const SAFE_AREA: ViewStyle = {
  backgroundColor: color.tabbar,
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.tabbar,
  flexDirection: "row",
  justifyContent: "center",
  minHeight: 49,
  paddingBottom: spacing.tiny,
}

const TAB: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "column",
  marginTop: spacing.small,
}

const ICON_WRAPPER: ViewStyle = {
  alignItems: "center",
  flexGrow: 1,
  justifyContent: "center",
  minHeight: 26,
}

const ICON: ViewStyle = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: 24,
  maxWidth: 24,
}

const TAB_ICONS: any = {
  schedule: require("./calendar.inactive.png"),
  scheduleActive: require("./calendar.active.png"),
  venue: require("./map.inactive.png"),
  venueActive: require("./map.active.png"),
  info: require("./info.inactive.png"),
  infoActive: require("./info.active.png"),
  ar: require("./ar.inactive.png"),
  arActive: require("./ar.active.png"),
}

export const Tab = ({
  activeTintColor,
  inactiveTintColor,
  navigation,
  position,
  renderIcon,
  route,
  index,
  inputRange,
}) => {
  const isActive = index === navigation.state.index
  const activeOpacity = position.interpolate({
    inputRange,
    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
  })
  const inactiveOpacity = position.interpolate({
    inputRange,
    outputRange: inputRange.map(i => (i === index ? 0 : 1)),
  })

  return (
    <TouchableOpacity onPress={() => navigation.navigate(route.routeName)} style={TAB}>
      <View style={ICON_WRAPPER}>
        <Animated.View style={[ICON, { opacity: activeOpacity }]}>
          <Image source={TAB_ICONS[`${route.routeName}Active`]} />
        </Animated.View>
        <Animated.View style={[ICON, { opacity: inactiveOpacity }]}>
          <Image source={TAB_ICONS[`${route.routeName}`]} />
        </Animated.View>
      </View>
      <Text
        preset="label"
        style={{ color: isActive ? color.palette.white : color.palette.waterloo }}
        tx={`tabbar.${route.routeName}`}
      />
    </TouchableOpacity>
  )
}

export const TabBar = props => {
  const { routes } = props.navigation.state
  const inputRange = [-1, ...routes.map((x, i) => i)]

  return (
    <SafeAreaView style={SAFE_AREA}>
      <View style={CONTAINER}>
        {routes.map((route, index) => {
          const tabProps = { ...props, route, index, inputRange, key: route.routeName }
          return <Tab {...tabProps} />
        })}
      </View>
    </SafeAreaView>
  )
}
