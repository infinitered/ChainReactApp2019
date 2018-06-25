import * as React from "react"
import { View, ViewStyle, TextStyle, TouchableOpacity, Linking } from "react-native"
import { spacing } from "../../../../theme/spacing"
import { SocialButton } from "../../../shared/social-button"
import { Text } from "../../../shared/text"

interface ContactProps {
  email: string
  twitter: string
}
const ROOT: ViewStyle = {
  padding: spacing.large,
}
const ROW: ViewStyle = {
  paddingVertical: spacing.large,
  flexDirection: "row",
}
const TEXT: TextStyle = {
  fontWeight: "500",
  letterSpacing: 3.0,
  fontSize: 14,
}

export class Contact extends React.Component<ContactProps, {}> {
  render() {
    const { email, twitter } = this.props
    const twitterText = `@${twitter}`
    const twitterLink = `https://twitter.com/${twitter}`
    const emailLink = `mailto:${email}`

    return (
      <View style={ROOT}>
        <TouchableOpacity onPress={() => Linking.openURL(emailLink)} style={ROW}>
          <SocialButton link={emailLink} preset="email" />
          <Text style={TEXT} preset="body" text={email.toUpperCase()} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(twitterLink)} style={ROW}>
          <SocialButton link={twitterLink} preset="twitter" />
          <Text style={TEXT} text={twitterText.toUpperCase()} preset="body" />
        </TouchableOpacity>
      </View>
    )
  }
}
