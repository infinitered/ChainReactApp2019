import { ViewProperties } from "react-native"
import { ScheduleCellPresetNames } from "./schedule-cell.presets"

export interface ScheduleCellProps extends ViewProperties {
  // Index to determine if cell is even or odd
  index: number
  talk: any
  preset?: ScheduleCellPresetNames
  onPress: Function
  noTime?: boolean
}
