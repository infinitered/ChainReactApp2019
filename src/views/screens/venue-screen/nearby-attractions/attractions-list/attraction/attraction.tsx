import * as React from "react"
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import { Text } from "../../../../../shared/text"
import { spacing } from "../../../../../../theme/spacing"
import { palette } from "../../../../../../theme/palette"
import { AttractionProps } from "./attraction.props"
import { Rating } from "./rating"

const ROOT: ViewStyle = {
  flex: 1,
  paddingVertical: 25,
}
const NAME_WRAPPER: ViewStyle = {
  flexDirection: "row",
}
const TITLE_WRAPPER: ViewStyle = {
  width: "70%",
}
const TITLE: TextStyle = {
  color: palette.white,
}
const ADDRESS: TextStyle = {
  color: palette.offWhite,
}

export class Attraction extends React.Component<AttractionProps, {}> {
  render() {
    const { attraction } = this.props
    const cleanedAddress = attraction.properties.place_address
      .replace(", United States", "")
      .replace(", Portland, OR", ",\nPortland, OR")
      .replace(", Portland, Oregon", ",\nPortland, OR")
    return (
      <View style={ROOT}>
        <View style={NAME_WRAPPER}>
          <View style={TITLE_WRAPPER}>
            <Text
              preset="sectionHeader"
              text={attraction.properties.place_name.toUpperCase()}
              style={TITLE}
            />
          </View>
          <Rating rating={attraction.properties.rating} />
        </View>
        <Text preset="fieldLabel" text={cleanedAddress} style={ADDRESS} />
      </View>
    )
  }
}
