import * as React from "react"
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { color, palette } from "../../app/theme"

const ROOT: ViewStyle = {
  backgroundColor: color.background,
  borderBottomColor: palette.mantiniqueLight,
  borderBottomWidth: 1,
}
const TITLE: TextStyle = { fontWeight: "600", color: color.text }
const TITLE_WRAPPER: ViewStyle = {}
const USAGE: TextStyle = { color: color.text, fontSize: 10, paddingTop: 0 }
const HEADER: ViewStyle = {
  paddingTop: 20,
  paddingBottom: 10,
  paddingHorizontal: 10,
}
const COMPONENT: ViewStyle = { backgroundColor: color.background }

export interface UseCaseProps {
  /** The title. */
  text: string
  /** When should we be using this? */
  usage?: string
  /** The component use case. */
  children: React.ReactNode
  /** A style override. Rarely used. */
  style?: ViewStyle
  /** Don't use any padding because it's important to see the spacing. */
  noPad?: boolean
  /** Don't use background color because it's important to see the color. */
  noBackground?: boolean
}

export function UseCase(props: UseCaseProps) {
  const style = {
    ...COMPONENT,
    ...{ padding: props.noPad ? 0 : 10 },
    ...{ backgroundColor: props.noBackground ? "rgba(0,0,0,1)" : COMPONENT.backgroundColor },
    ...props.style,
  }
  return (
    <View style={ROOT}>
      <View style={HEADER}>
        <View style={TITLE_WRAPPER}>
          <Text style={TITLE}>{props.text}</Text>
        </View>
        {props.usage && <Text style={USAGE}>{props.usage}</Text>}
      </View>
      <View style={style}>{props.children}</View>
    </View>
  )
}
