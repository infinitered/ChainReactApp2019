import * as React from "react"
import Mapbox from "@mapbox/react-native-mapbox-gl"
import { TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import { AttractionsMapCallout } from "../attractions-map-callout"
import { color, getScreenHeight, getScreenWidth } from "../../theme"
import { unnest } from "ramda"
const nearbyAttractionsData = require("../nearby-attractions/nearby-attractions.data.json")

Mapbox.setAccessToken(
  "pk.eyJ1Ijoiamh1c2tleSIsImEiOiJjamFicHEyYmowMmh4MzNwbGJsMHFmNHhoIn0._2iDBeHi7lUMHWUEdTFrqA",
)

export interface AttractionsMapState {
  selected: string
}

const MAPVIEW: ViewStyle = {
  height: 506,
  flex: 1,
}

const HIDDEN_MARKER: ViewStyle = { backgroundColor: color.transparent }

const VENUE_MARKER: ViewStyle = { width: 41, height: 66 }

const ATTRACTION_MARKER: ViewStyle = { width: 18, height: 32 }

export class AttractionsMap extends React.Component<{}, AttractionsMapState> {
  mapView: any
  state = {
    selected: null,
  }

  onPressLocation = (location, locationId) => {
    this.setState({ selected: locationId })
    this.mapView.flyTo(location.geometry.coordinates)
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
        <TouchableWithoutFeedback onPress={() => this.onPressLocation(location, locationId)}>
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
    const size = { width: getScreenWidth(), maxHeight: getScreenHeight() * 0.8 }
    const styleUrl: any = "mapbox://styles/jhuskey/cjabpqolp3lf02so534xe4q9g"
    return (
      <Mapbox.MapView
        ref={ref => (this.mapView = ref)}
        centerCoordinate={nearbyAttractionsData.locations[0].geometry.coordinates}
        rotateEnabled={false}
        pitchEnabled={false}
        styleURL={styleUrl}
        style={{ ...MAPVIEW, ...size }}
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
