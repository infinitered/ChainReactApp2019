import * as React from "react"
import { ScrollView, View, ViewStyle } from "react-native"
import { color } from "../../app/theme"

export interface StoryProps {
  children?: React.ReactNode
}

const ROOT: ViewStyle = { flex: 1, backgroundColor: color.background }

export function Story(props: StoryProps) {
  return (
    <View style={ROOT}>
      <ScrollView>{props.children}</ScrollView>
    </View>
  )
}
