import * as React from "react"
import { Image, SafeAreaView, ViewStyle } from "react-native"
import { ScrollView } from "react-navigation"
import { ScreenProps } from "./screen.props"
import { isNonScrolling, presets } from "./screen.presets"

/**
 * This screen does not scroll.
 *
 * @param props The screen props
 */
function ScreenWithoutScrolling(props: ScreenProps) {
  const {
    preset: propsPreset,
    backgroundImage,
    backgroundColor,
    style: propStyle,
    children,
    ...rest
  } = props
  const preset = presets[propsPreset] || presets["fixed"]
  const style = { ...preset.nonScroll, ...propStyle }
  const backgroundStyle = backgroundColor ? { backgroundColor: backgroundColor } : {}

  if (backgroundImage) {
    return (
      <SafeAreaView style={[style, backgroundStyle]} {...rest}>
        <Image
          source={props.backgroundImage}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        {props.children}
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={[style, backgroundStyle]} {...rest}>
        {children}
      </SafeAreaView>
    )
  }
}

/**
 * This screen scrolls.
 *
 * @param props The screen props
 */
function ScreenWithScrolling(props: ScreenProps) {
  const { preset: propsPreset, backgroundColor, style, children, ...rest } = props
  const preset = presets[propsPreset] || presets["scroll"]
  const outerStyle = preset.scrollOuter
  const backgroundStyle = backgroundColor ? { backgroundColor: backgroundColor } : {}
  const innerStyle = { ...preset.scrollInner, ...style } as ViewStyle

  return (
    <SafeAreaView style={[outerStyle, backgroundStyle]} {...rest}>
      <ScrollView style={[outerStyle, backgroundStyle]} contentContainerStyle={innerStyle}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
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
