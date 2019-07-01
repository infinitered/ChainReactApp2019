import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { BackButton } from "../../components/back-button"
import { Contact } from "../../components/contact"
import { Screen } from "../../components/screen"
import { Text } from "../../components/text"
import { color, spacing } from "../../theme"
import { palette } from "../../theme/palette"

export interface CodeOfConductScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  marginHorizontal: spacing.large,
  paddingBottom: spacing.huge,
}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  letterSpacing: 1.68,
}

const SECTION: TextStyle = {
  marginVertical: spacing.medium,
}

const SECTION_TITLE: TextStyle = {
  fontWeight: "500",
  letterSpacing: 3.0,
  fontSize: 14,
  color: color.palette.shamrock,
  marginTop: spacing.medium,
}

const email = "conf@infinite.red"
const twitter = "chainreactconf"
const phoneNumber = "(360) 562-0450"

export class CodeOfConductScreen extends React.Component<CodeOfConductScreenProps, {}> {
  static navigationOptions = ({ navigation, _ }) => ({
    headerStyle: { backgroundColor: color.palette.portGore, borderBottomWidth: 0 },
    headerBackImage: <BackButton backTitle={navigation.getParam("backTitle", "INFO")} />,
    headerTintColor: color.palette.shamrock,
  })

  render() {
    return (
      <Screen style={ROOT} preset="scroll" backgroundColor={palette.portGore}>
        <Text preset="header" tx="codeOfConductScreen.title" style={TITLE} />
        <Text preset="body" tx="codeOfConductScreen.intro" style={SECTION} />
        <Contact phoneNumber={phoneNumber} email={email} twitter={twitter} />
        <Text preset="body" style={SECTION_TITLE} tx={"codeOfConductScreen.quickVersionTitle"} />
        <Text preset="body" style={SECTION} tx={"codeOfConductScreen.quickVersion"} />
        <Text preset="body" style={SECTION_TITLE} tx={"codeOfConductScreen.lessQuickTitle"} />
        <Text preset="body" style={SECTION} tx={"codeOfConductScreen.lessQuickVersion"} />
      </Screen>
    )
  }
}
