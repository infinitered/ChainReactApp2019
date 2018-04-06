import * as React from "react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"

export interface ScheduleScreenProps extends NavigationScreenProps<{}> {}

export class ScheduleScreen extends React.Component<ScheduleScreenProps, {}> {
  render() {
    return (
      <Screen preset="fixedCenter">
        <Text tx="scheduleScreen.title" />
      </Screen>
    )
  }
}
