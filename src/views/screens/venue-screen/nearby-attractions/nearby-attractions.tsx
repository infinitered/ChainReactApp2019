import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../../../shared/text"
import { spacing } from "../../../../theme/spacing"
import { palette } from "../../../../theme/palette"
import { AttractionsList } from "./attractions-list"
import { AttractionsMap } from "./attractions-map"

const ROOT: ViewStyle = {
  paddingVertical: spacing.large,
  paddingHorizontal: 17,
  backgroundColor: palette.portGoreLight,
}

export class NearbyAttractions extends React.Component<{}, {}> {
  render() {
    return (
      <View style={ROOT}>
        <AttractionsList />
        <AttractionsMap />
      </View>
    )
  }
}
