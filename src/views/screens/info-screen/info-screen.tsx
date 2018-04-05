import * as React from "react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"

export interface InfoScreenProps extends NavigationScreenProps<{}> {}

export class InfoScreen extends React.Component<InfoScreenProps, {}> {
  render() {
    return (
      <Screen preset="fixedCenter">
        <Text preset="header" tx="infoScreen.header" />
      </Screen>
    )
  }
}
