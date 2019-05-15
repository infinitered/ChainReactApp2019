import * as React from "react"
import { Image, ViewStyle } from "react-native"
import { color, spacing } from "../../theme"
import { Text } from "../text"

// const ICON_WRAPPER: ViewStyle = {
//   alignItems: "center",
//   flexGrow: 1,
//   justifyContent: "center",
//   minHeight: 26,
// }

const ICON: ViewStyle = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: 24,
  maxWidth: 24,
}

const TAB_ICONS: any = {
  schedule: require("./icons/calendar.inactive.png"),
  scheduleActive: require("./icons/calendar.active.png"),
  venue: require("./icons/map.inactive.png"),
  venueActive: require("./icons/map.active.png"),
  info: require("./icons/info.inactive.png"),
  infoActive: require("./icons/info.active.png"),
}

export const TabIcon = ({ routeName, focused }) => {
  const tabName = focused ? `${routeName}Active` : routeName

  return <Image style={ICON} source={TAB_ICONS[tabName]} />
}
