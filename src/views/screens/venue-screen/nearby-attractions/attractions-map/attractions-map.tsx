import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../../../../shared/text"
import { spacing } from "../../../../../theme/spacing"
import { palette } from "../../../../../theme/palette"
import { MapView } from "@mapbox/react-native-mapbox-gl"
const nearbyAttractionsData = require("../nearby-attractions.data.json")

const ROOT: ViewStyle = {}

export class AttractionsMap extends React.Component<{}, {}> {
  render() {
    return (
      // <View />
      <MapView
        rotateEnabled={false}
        pitchEnabled={false}
        styleURL="mapbox://styles/jhuskey/cjabpqolp3lf02so534xe4q9g"
      />
    )
  }
}
