import * as React from "react"
import Mapbox from "@mapbox/react-native-mapbox-gl"
import { View, ViewStyle, TouchableWithoutFeedback, Dimensions } from "react-native"
import { AttractionsMapCallout } from "../attractions-map-callout"
import { color } from "../../../../../theme"
import { unnest } from "ramda"
const nearbyAttractionsData = require("../nearby-attractions.data.json")

Mapbox.setAccessToken(
  "pk.eyJ1Ijoiamh1c2tleSIsImEiOiJjamFicHEyYmowMmh4MzNwbGJsMHFmNHhoIn0._2iDBeHi7lUMHWUEdTFrqA",
)

export interface AttractionsMapState {
  selected: string
}

const MAPVIEW: ViewStyle = {
  width: "100%",
  height: 506,
  flex: 1,
  maxHeight: Dimensions.get("window").height * 0.8,
}

const HIDDEN_MARKER: ViewStyle = { backgroundColor: color.transparent }

const VENUE_MARKER: ViewStyle = { width: 41, height: 66 }

const ATTRACTION_MARKER: ViewStyle = { width: 18, height: 32 }

export class AttractionsMap extends React.Component<{}, AttractionsMapState> {
  mapView: any
  state = {
    selected: null,
  }

  renderCategory = (key, category) => category.map(location => this.renderLocation(key, location))

  renderLocation = (key, location) => {
    const markerDimensions = key === "locations" ? VENUE_MARKER : ATTRACTION_MARKER
    const locationId = `${location.id}-${key}`
    const isSelected = this.state.selected === locationId
    return (
      <Mapbox.PointAnnotation
        key={locationId}
        id={locationId}
        title={location.properties.place_name}
        coordinate={location.geometry.coordinates}
        selected={isSelected}
      >
        <TouchableWithoutFeedback onPress={() => this.setState({ selected: locationId })}>
          <View style={[HIDDEN_MARKER, markerDimensions]} />
        </TouchableWithoutFeedback>
        <AttractionsMapCallout
          title={location.properties.place_name}
          description={location.properties.place_description}
          link={location.properties.place_link}
          onPressClose={() => this.setState({ selected: null })}
        />
      </Mapbox.PointAnnotation>
    )
  }

  render() {
    return (
      <Mapbox.MapView
        centerCoordinate={nearbyAttractionsData.locations[0].geometry.coordinates}
        rotateEnabled={false}
        pitchEnabled={false}
        styleURL="mapbox://styles/jhuskey/cjabpqolp3lf02so534xe4q9g"
        style={MAPVIEW}
        // showUserLocation
      >
        {unnest(
          Object.keys(nearbyAttractionsData).map(key =>
            this.renderCategory(key, nearbyAttractionsData[key]),
          ),
        )}
      </Mapbox.MapView>
    )
  }
}
