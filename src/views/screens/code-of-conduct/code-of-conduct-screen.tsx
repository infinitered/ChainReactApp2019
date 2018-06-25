import * as React from "react"
import { TextStyle, ViewStyle, Image, View } from "react-native"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { color } from "../../../theme"

export interface CodeOfConductScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  marginTop: spacing.extraLarge,
  marginHorizontal: spacing.large,
}
const HEADER_TEXT: TextStyle = {
  fontWeight: "600",
  letterSpacing: 3.0,
  marginLeft: spacing.medium,
  color: color.palette.shamrock,
}
const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  letterSpacing: 1.68,
}
const BACK_ARROW: ViewStyle = {
  flexDirection: "row",
  paddingLeft: spacing.medium,
}
const INTRO: TextStyle = {
  marginTop: spacing.medium,
}
const backArrow = () => (
  <View style={BACK_ARROW}>
    <Image source={require("../../shared/title-bar/icon.back-arrow.png")} />
    <Text text="INFO" style={HEADER_TEXT} />
  </View>
)

export class CodeOfConductScreen extends React.Component<CodeOfConductScreenProps, {}> {
  static navigationOptions = {
    headerStyle: { backgroundColor: palette.portGore, borderBottomWidth: 0 },
    headerBackImage: backArrow,
    headerTintColor: palette.shamrock,
  }

  render() {
    return (
      <Screen style={ROOT} preset="scrollStack" backgroundColor={palette.portGore}>
        <Text preset="header" tx="codeOfConductScreen.title" style={TITLE} />
        <Text preset="body" tx="codeOfConductScreen.intro" style={INTRO} />
      </Screen>
    )
  }
}
