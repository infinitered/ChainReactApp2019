import * as React from "react"
import { Linking, ViewStyle } from "react-native"
import { ContentLink } from "../content-link"
import { spacing } from "../../theme"

const ROOT: ViewStyle = {
  marginTop: spacing.extraLarge,
  paddingHorizontal: spacing.large,
  marginBottom: spacing.huge,
}

export function BlogLink() {
  const onPressLink = () => {
    Linking.openURL(
      "https://shift.infinite.red/an-insiders-guide-to-the-best-spots-in-portland-ce84e316bfc9",
    )
  }
  return (
    <ContentLink
      style={ROOT}
      headerTx="venueScreen.blog.title"
      bodyTx="venueScreen.blog.description"
      buttonTx="venueScreen.blog.button"
      onPressLink={onPressLink}
    />
  )
}
