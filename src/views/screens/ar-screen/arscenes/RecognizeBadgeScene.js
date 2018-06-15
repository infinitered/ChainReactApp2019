"use strict"

import React, { Component } from "react"

import { StyleSheet } from "react-native"

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroMaterials,
  ViroAmbientLight,
  ViroNode,
  ViroARImageMarker,
  ViroBox,
  ViroARTrackingTargets,
  ViroPortal,
  ViroPortalScene,
  ViroImage,
} from "react-viro"

const BADGE_NOT_FOUND = -1

const BADGE_TYPES = [
  "badges-final_attendee-front_v2",
  "badges-final_speaker-front_v2",
  "badges-final_staff-front_v3",
  "badges-final_attendee-front_v3",
  "badges-final_speaker-front_v3",
  "badges-final_staff-front_v3",
]

export default class RecognizeBadgeScene extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      foundBadgeType: BADGE_NOT_FOUND,
    }

    // bind 'this' to functions
    this._getMarkers = this._getMarkers.bind(this)
    this._getARImageMarkerProps = this._getARImageMarkerProps.bind(this)
    this._getOnMarkerFoundCallback = this._getOnMarkerFoundCallback.bind(this)
    this._getExperience = this._getExperience.bind(this)
    this._onInitialized = this._onInitialized.bind(this)
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={"#ffffff"} />

        {this._getMarkers()}
      </ViroARScene>
    )
  }

  /*
   This function either returns 3 ViroARImageMarkers for each badge type if a badge
   hasn't been found yet or if a badge type has already been found, it returns the
   marker for that badge type w/ the experience.
   */
  _getMarkers() {
    console.log("[Viro] getting markers, current found badge: " + this.state.foundBadgeType)
    if (this.state.foundBadgeType == BADGE_NOT_FOUND) {
      let markers = []
      for (var badgeType = 0; badgeType < BADGE_TYPES.length; badgeType++) {
        markers.push(<ViroARImageMarker {...this._getARImageMarkerProps(badgeType)} />)
      }
      return markers
    } else {
      return [
        <ViroARImageMarker {...this._getARImageMarkerProps(this.state.foundBadgeType)}>
          {this._getExperience()}
        </ViroARImageMarker>,
      ]
    }
  }

  _getARImageMarkerProps(badgeType) {
    return {
      key: badgeType,
      target: BADGE_TYPES[badgeType],
      onAnchorFound: this._getOnMarkerFoundCallback(badgeType),
    }
  }

  _getOnMarkerFoundCallback(badgeType) {
    return () => {
      // notify the parent view that the badge was found
      this.props.onBadgeFound()
      console.log("[Viro] found badge: " + badgeType)
      this.setState({ foundBadgeType: badgeType })
    }
  }

  /*
   Return the experience we want once a badge is found
   */
  _getExperience() {
    return (
      <ViroNode scale={[0.015, 0.015, 0.015]}>
        <Viro3DObject source={require("./res/cr_map.vrx")} type={"VRX"} />
        <ViroPortalScene>
          <ViroPortal>
            <Viro3DObject
              source={require("./res/cr_portal.vrx")}
              type={"VRX"}
              resources={[require("./res/cr_box.png")]}
            />
          </ViroPortal>

          <Viro3DObject
            source={require("./res/cr_shadowbox.vrx")}
            type={"VRX"}
            resources={[require("./res/cr_box.png")]}
          />
        </ViroPortalScene>
      </ViroNode>
    )
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      // Handle resumption of tracking
      this.props.onARInitialized(true)
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
      this.props.onARInitialized(false)
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
})

ViroARTrackingTargets.createTargets({
  badge_attendee: {
    source: require("./res/badge_attendee.jpg"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  badge_speaker: {
    source: require("./res/badge_speaker.jpg"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  badge_staff: {
    source: require("./res/badge_staff.jpg"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_attendee-back": {
    source: require("./res/badges-final_attendee-back.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_speaker-back": {
    source: require("./res/badges-final_speaker-back.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_staff-back": {
    source: require("./res/badges-final_staff-back.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_attendee-front_v2": {
    source: require("./res/badges-final_attendee-front_v2.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_speaker-front_v2": {
    source: require("./res/badges-final_speaker-front_v2.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_staff-front_v2": {
    source: require("./res/badges-final_staff-front_v2.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_attendee-front_v3": {
    source: require("./res/badges-final_attendee-front_v3.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_speaker-front_v3": {
    source: require("./res/badges-final_speaker-front_v3.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  "badges-final_staff-front_v3": {
    source: require("./res/badges-final_staff-front_v3.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
})

module.exports = RecognizeBadgeScene
