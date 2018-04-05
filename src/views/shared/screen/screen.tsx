import * as React from "react"
import { ScrollView, View, ViewStyle, Image } from "react-native"
import { ScreenProps } from "./screen.props"
import { presets, isNonScrolling } from "./screen.presets"

/**
 * This screen does not scroll.
 *
 * @param props The screen props
 */
function ScreenWithoutScrolling(props: ScreenProps) {
  const preset = presets[props.preset] || presets["fixed"]
  const style = { ...preset.nonScroll, ...props.style }

  if (props.backgroundImage) {
    return (
      <View style={style}>
        <Image
          source={props.backgroundImage}
          style={{ position: "absolute", resizeMode: "cover" }}
        />
        {props.children}
      </View>
    )
  } else {
    return <View style={style}>{props.children}</View>
  }
}

/**
 * This screen scrolls.
 *
 * @param props The screen props
 */
function ScreenWithScrolling(props: ScreenProps) {
  const preset = presets[props.preset] || presets["scroll"]
  const outerStyle = preset.scrollOuter
  const innerStyle = { ...preset.scrollInner, ...props.style } as ViewStyle

  return (
    <ScrollView style={outerStyle} contentContainerStyle={innerStyle}>
      {props.children}
    </ScrollView>
  )
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Screen(props: ScreenProps) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />
  } else {
    return <ScreenWithScrolling {...props} />
  }
}
