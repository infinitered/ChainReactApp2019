import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../text"
import { spacing } from "../../theme"

const ROOT: ViewStyle = {
  flexDirection: "row",
  marginVertical: spacing.small,
  marginRight: spacing.small,
}

export function BulletItem(props: { text: string; style?: TextStyle }) {
  return (
    <View style={{ ...ROOT, ...props.style }}>
      <Text preset="body" text={`\u2022  `} />
      <Text preset="body" text={props.text} />
    </View>
  )
}
