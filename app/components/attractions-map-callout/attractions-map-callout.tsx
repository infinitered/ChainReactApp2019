import * as React from "react"
import Mapbox from "@mapbox/react-native-mapbox-gl"
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  Linking,
} from "react-native"
import { Text } from "../text"
import { color, spacing, getScreenWidth } from "../../theme"
import { CLOSE_ICON } from "./"

export interface AttractionsMapCalloutProps {
  title: string
  description: string
  link: string
  onPressClose(): void
}

const CALLOUT_CONTAINER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}

const CALLOUT_CONTENT_CONTAINER: ViewStyle = {
  padding: spacing.large,
  backgroundColor: color.callout,
  shadowColor: color.calloutShadow,
  shadowOffset: { width: 0, height: 8 },
  shadowRadius: 12,
  shadowOpacity: 0.3,
  flexDirection: "row",
  justifyContent: "space-between",
}

const CALLOUT_ARROW: ViewStyle = {
  marginTop: -2,
  elevation: 0,
  backgroundColor: "transparent",
  borderTopWidth: 12,
  borderRightWidth: 10,
  borderBottomWidth: 0,
  borderLeftWidth: 10,
  borderTopColor: color.palette.purple,
  borderRightColor: "transparent",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
}

const CALLOUT_INFO: ViewStyle = { flex: 1 }

const TITLE: TextStyle = {
  fontSize: 14,
  lineHeight: 17,
  color: color.palette.white,
  letterSpacing: 3,
  fontWeight: "500",
  marginBottom: 10,
}

const DESCRIPTION: TextStyle = {
  fontSize: 13,
  lineHeight: 22,
  color: color.palette.white,
  letterSpacing: 0.24,
  fontWeight: "300",
  marginBottom: spacing.large,
}

const DIRECTIONS: TextStyle = {
  fontSize: 11,
  lineHeight: 13,
  color: color.palette.white,
  letterSpacing: 2,
  fontWeight: "500",
}

const CLOSE_TOUCHABLE: ViewStyle = {
  paddingLeft: spacing.large,
  paddingBottom: spacing.large,
}

const CLOSE_IMAGE: ImageStyle = {
  width: 14,
  height: 14,
}

const HIT_SLOP = {
  top: spacing.large,
  right: spacing.large,
  bottom: spacing.large,
  left: spacing.large,
}

export class AttractionsMapCallout extends React.Component<AttractionsMapCalloutProps, {}> {
  renderLink = link => {
    const openLink = () => {
      Linking.canOpenURL(link).then(supported => {
        if (!supported) return
        Linking.openURL(link)
      })
    }
    return (
      <TouchableOpacity onPress={openLink}>
        <Text style={DIRECTIONS} tx="venueScreen.nearbyAttractions.navigation.getDirections" />
      </TouchableOpacity>
    )
  }

  render() {
    const widthStyle = {
      width: getScreenWidth() * 0.9,
    }
    return (
      <Mapbox.Callout>
        <View style={CALLOUT_CONTAINER}>
          <View style={{ ...CALLOUT_CONTENT_CONTAINER, ...widthStyle }}>
            <View style={CALLOUT_INFO}>
              <Text style={TITLE} text={this.props.title.toUpperCase()} />
              <Text style={DESCRIPTION} text={this.props.description} />
              {this.renderLink(this.props.link)}
            </View>
            <View>
              <TouchableOpacity
                style={CLOSE_TOUCHABLE}
                onPress={this.props.onPressClose}
                hitSlop={HIT_SLOP}
              >
                <Image source={CLOSE_ICON} style={CLOSE_IMAGE} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={CALLOUT_ARROW} />
        </View>
      </Mapbox.Callout>
    )
  }
}
