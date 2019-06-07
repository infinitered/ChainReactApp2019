import * as React from "react"
import { View, ViewStyle, TextStyle, Linking } from "react-native"
import { Text } from "../text"
import { Button } from "../button"
import { spacing, palette } from "../../theme"

const ROOT: ViewStyle = {
  marginTop: spacing.extraLarge,
  paddingHorizontal: spacing.large,
  marginBottom: spacing.huge,
}

const SUBTITLE: TextStyle = {
  color: palette.shamrock,
}

const BODY: TextStyle = {
  marginTop: spacing.medium,
  marginBottom: spacing.medium,
}

export function BlogLink() {
  const onPressLink = () => {
    Linking.openURL(
      "https://shift.infinite.red/an-insiders-guide-to-the-best-spots-in-portland-ce84e316bfc9",
    )
  }
  return (
    <View style={ROOT}>
      <Text preset="sectionHeader" tx="venueScreen.blog.title" style={SUBTITLE} />
      <Text preset="body" tx="venueScreen.blog.description" style={BODY} />
      <Button tx="venueScreen.blog.button" preset="dark" onPress={onPressLink} />
    </View>
  )
}
