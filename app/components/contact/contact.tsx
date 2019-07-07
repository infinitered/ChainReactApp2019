import * as React from "react"
import { Alert, Linking, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { spacing } from "../../theme"
import { SocialButton } from "../social-button"
import { Text } from "../text"
import { translate } from "../../i18n"

interface ContactProps {
  email: string
  twitter: string
  phoneNumber: string
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
  marginLeft: spacing.small,
}

export class Contact extends React.Component<ContactProps, {}> {
  openCallTextAlertDialog = () => {
    const { phoneNumber } = this.props
    const callLink = `tel:${phoneNumber}`
    const smsLink = `sms:${phoneNumber}`
    const title = translate("codeOfConductScreen.contact.alertTitle")
    const message = translate("codeOfConductScreen.contact.alertBody")
    const text = translate("codeOfConductScreen.contact.text")
    const call = translate("codeOfConductScreen.contact.call")
    const cancel = translate("common.cancel")

    Alert.alert(
      title,
      message,
      [
        { text: call, onPress: () => Linking.openURL(callLink) },
        { text: text, onPress: () => Linking.openURL(smsLink) },
        { text: cancel, style: "cancel" },
      ],
      { cancelable: true },
    )
  }

  render() {
    const { email, twitter, phoneNumber } = this.props
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
        <TouchableOpacity onPress={this.openCallTextAlertDialog} style={ROW}>
          <SocialButton link={""} preset="phone" />
          <Text style={TEXT} text={phoneNumber} preset="body" />
        </TouchableOpacity>
      </View>
    )
  }
}
