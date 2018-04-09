import * as React from "react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"

export interface ScheduleScreenProps extends NavigationScreenProps<{}> {}

export class ScheduleScreen extends React.Component<ScheduleScreenProps, {}> {
  render() {
    return (
      <Screen preset="fixedCenter" backgroundColor={palette.portGore}>
        <Text preset="title" tx="scheduleScreen.title" />
      </Screen>
    )
  }
}
