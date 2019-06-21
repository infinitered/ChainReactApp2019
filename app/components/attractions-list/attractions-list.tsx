import * as React from "react"
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import { Text } from "../text"
import { palette, spacing, getScreenHeight, getScreenWidth } from "../../theme"
import { Attraction } from "../attraction"
const nearbyAttractionsData = require("../nearby-attractions/nearby-attractions.data.json")

export interface AttractionsListState {
  selectedType: "food" | "drink" | "coffee" | "sights"
}

const ROOT: ViewStyle = {
  flex: 1,
  paddingHorizontal: 17,
  paddingBottom: spacing.large + spacing.small,
}
const NAV: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}
const NAV_ITEM: ViewStyle = {
  paddingRight: spacing.extraLarge,
  paddingVertical: spacing.small,
}
const SELECTED_NAV_ITEM: TextStyle = {
  color: palette.shamrock,
}
const LIST: ViewStyle = {
  marginTop: spacing.medium,
}

export class AttractionsList extends React.Component<{}, AttractionsListState> {
  constructor(props) {
    super(props)
    this.state = {
      selectedType: "food",
    }
  }

  render() {
    const { selectedType } = this.state
    return (
      <View style={{ ...ROOT, ...{ width: getScreenWidth() } }}>
        <View style={NAV}>
          <TouchableOpacity
            style={NAV_ITEM}
            onPress={() => this.setState({ selectedType: "food" })}
          >
            <Text
              preset="label"
              tx="venueScreen.nearbyAttractions.navigation.food"
              style={selectedType === "food" ? SELECTED_NAV_ITEM : {}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={NAV_ITEM}
            onPress={() => this.setState({ selectedType: "drink" })}
          >
            <Text
              preset="label"
              tx="venueScreen.nearbyAttractions.navigation.drink"
              style={selectedType === "drink" ? SELECTED_NAV_ITEM : {}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={NAV_ITEM}
            onPress={() => this.setState({ selectedType: "coffee" })}
          >
            <Text
              preset="label"
              tx="venueScreen.nearbyAttractions.navigation.coffee"
              style={selectedType === "coffee" ? SELECTED_NAV_ITEM : {}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={NAV_ITEM}
            onPress={() => this.setState({ selectedType: "sights" })}
          >
            <Text
              preset="label"
              tx="venueScreen.nearbyAttractions.navigation.sights"
              style={selectedType === "sights" ? SELECTED_NAV_ITEM : {}}
            />
          </TouchableOpacity>
        </View>
        <View style={LIST}>
          {nearbyAttractionsData[selectedType].map(attraction => (
            <Attraction attraction={attraction} key={attraction.id} />
          ))}
        </View>
      </View>
    )
  }

  renderAttraction = attraction => {
    return <View />
  }
}
