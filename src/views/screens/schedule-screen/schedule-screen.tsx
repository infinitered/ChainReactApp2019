import * as React from "react"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { isThursday, isFriday } from "date-fns"
import { ScheduleNav } from "./schedule-nav"

export interface ScheduleScreenProps extends NavigationScreenProps<{}> {}

export class ScheduleScreen extends React.Component<
  ScheduleScreenProps,
  { selected: "wednesday" | "thursday" | "friday" }
> {
  state = {
    selected: getSelectedDay(),
  }

  render() {
    return (
      <Screen preset="fixedCenter" backgroundColor={palette.portGore}>
        <Text preset="title" tx="scheduleScreen.title" />
        <ScheduleNav selected={this.state.selected} onSelected={this.onSelected} />
      </Screen>
    )
  }

  onSelected = selected => {
    this.setState({ selected })
  }
}

const getSelectedDay = (): "wednesday" | "thursday" | "friday" => {
  const date = new Date()
  if (isThursday(date)) return "thursday"
  if (isFriday(date)) return "friday"
  return "wednesday"
}
