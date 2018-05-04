import { ViewProperties } from "react-native"
import { ScheduleCellPresetNames } from "./schedule-cell.presets"
import { Talk } from "../../../../models/talk"

export interface ScheduleCellProps extends ViewProperties {
  // Index to determine if cell is even or odd
  index: number
  talk: any
  preset?: ScheduleCellPresetNames
  onPress: Function
}
