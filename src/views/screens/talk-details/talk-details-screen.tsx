import * as React from "react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"

export interface TalkDetailsScreenProps extends NavigationScreenProps<{}> {}

export class TalkDetailsScreen extends React.Component<TalkDetailsScreenProps, {}> {
  render() {
    return (
      <Screen preset="fixedCenter">
        <Text tx="talkDetailsScreen.title" />
      </Screen>
    )
  }
}
