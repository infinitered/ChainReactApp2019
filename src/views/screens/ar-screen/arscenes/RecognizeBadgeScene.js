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
} from "react-viro"

const BADGE_NOT_FOUND = 0
const BADGE_ATTENDEE = 1
const BADGE_SPEAKER = 2
const BADGE_STAFF = 3

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
    this._getTarget = this._getTarget.bind(this)
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
    if (this.state.foundBadgeType == BADGE_NOT_FOUND) {
      return [
        <ViroARImageMarker {...this._getARImageMarkerProps(BADGE_ATTENDEE)} />,
        <ViroARImageMarker {...this._getARImageMarkerProps(BADGE_SPEAKER)} />,
        <ViroARImageMarker {...this._getARImageMarkerProps(BADGE_STAFF)} />,
      ]
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
      target: this._getTarget(badgeType),
      onAnchorFound: this._getOnMarkerFoundCallback(badgeType),
    }
  }

  _getTarget(badgeType) {
    if (badgeType == BADGE_SPEAKER) {
      return "badge_speaker"
    } else if (badgeType == BADGE_STAFF) {
      return "badge_staff"
    } else {
      return "badge_attendee"
    }
  }

  _getOnMarkerFoundCallback(badgeType) {
    return () => {
      this.setState({ foundBadgeType: badgeType })
    }
  }

  /*
   Return the experience we want once a badge is found
   */
  _getExperience() {
    return (
      <Viro3DObject source={require("./res/cr_map.vrx")} type={"VRX"} scale={[0.1, 0.1, 0.1]} />
    )
  }

  // TODO: Add some UI instructions for initialization
  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      // Handle resumption of tracking
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
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
})

module.exports = RecognizeBadgeScene
