import * as React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { PresentedBy } from "./presented-by"
import { palette } from "../../../theme/palette"

export interface InfoScreenProps extends NavigationScreenProps<{}> {}

const ROOT: ViewStyle = {
  backgroundColor: palette.portGore,
}
const TEXT: TextStyle = {
  color: palette.offWhite,
  marginBottom: 50,
}

export class InfoScreen extends React.Component<InfoScreenProps, {}> {
  render() {
    return (
      <Screen preset="fixedCenter" style={ROOT}>
        <Text preset="header" tx="infoScreen.header" style={TEXT} />
        <PresentedBy />
      </Screen>
    )
  }
}
