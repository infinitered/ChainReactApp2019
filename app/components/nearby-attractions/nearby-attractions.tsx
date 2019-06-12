import * as React from "react"
import { View, ViewStyle } from "react-native"
import { palette, spacing, getScreenWidth } from "../../theme"
import { AttractionsList } from "../attractions-list"
import { AttractionsMap } from "../attractions-map"

const ROOT: ViewStyle = {
  paddingTop: spacing.large,
  backgroundColor: palette.portGoreLight,
}

export class NearbyAttractions extends React.Component<{}, {}> {
  render() {
    const fullWidth = {
      width: getScreenWidth(),
    }
    return (
      <View style={{ ...ROOT, ...fullWidth }}>
        <AttractionsList />
        <AttractionsMap />
      </View>
    )
  }
}
