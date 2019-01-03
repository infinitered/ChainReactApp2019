import * as React from "react"
import { View, ViewStyle, Dimensions } from "react-native"
import { spacing } from "../../../../theme/spacing"
import { palette } from "../../../../theme/palette"
import { AttractionsList } from "./attractions-list"
import { AttractionsMap } from "./attractions-map"

const SCREEN_WIDTH = Dimensions.get("window").width

const ROOT: ViewStyle = {
  width: SCREEN_WIDTH,
  paddingTop: spacing.large,
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
