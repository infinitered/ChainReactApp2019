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
  ViroQuad,
  ViroARTrackingTargets,
  ViroPortal,
  ViroPortalScene,
  ViroImage,
  ViroLightingEnvironment,
  ViroDirectionalLight,
  ViroSpotLight,
  ViroSpinner,
  ViroSphere,
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
      runAnimation: false,
    }

    // bind 'this' to functions
    this._getMarkers = this._getMarkers.bind(this)
    this._getARImageMarkerProps = this._getARImageMarkerProps.bind(this)
    this._getOnMarkerFoundCallback = this._getOnMarkerFoundCallback.bind(this)
    this._onAnchorUpdated = this._onAnchorUpdated.bind(this)
    this._getExperience = this._getExperience.bind(this)
    this._onInitialized = this._onInitialized.bind(this)
    this._objLoadEnd = this._objLoadEnd.bind(this)
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={"#ffffff"} />

        {this._getMarkers()}

        {this._getExperience()}
      </ViroARScene>
    )
  }

  /*
   This function either returns a ViroARImageMarkers for each badge image if a badge
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
      return [<ViroARImageMarker {...this._getARImageMarkerProps(this.state.foundBadgeType)} />]
    }
  }

  _getARImageMarkerProps(badgeType) {
    return {
      key: badgeType,
      target: BADGE_TYPES[badgeType],
      onAnchorFound: this._getOnMarkerFoundCallback(badgeType),
      onAnchorUpdated: this._onAnchorUpdated,
    }
  }

  _getOnMarkerFoundCallback(badgeType) {
    return anchor => {
      // notify the parent view that the badge was found
      this.props.onBadgeFound()
      console.log("[Viro] found badge: " + badgeType)
      this.setState({ foundBadgeType: badgeType, foundAnchor: anchor, runAnimation: true })
    }
  }

  _onAnchorUpdated(anchor) {
    this.setState({
      foundAnchor: anchor,
    })
  }

  _objLoadEnd() {
    // wait 1 second, and show the experience and run the animation!
    setTimeout(() => {
      this.setState({
        runAnimation: true,
      })
    }, 1000)
  }

  /*
   Return the experience we want once a badge is found
   */
  _getExperience() {
    let scale = [0, 0, 0]
    let position = [0, 0, 0]
    let rotation = [0, 0, 0]

    if (this.state.foundAnchor != undefined) {
      scale = [1, 1, 1]
      position = this.state.foundAnchor.position
      rotation = this.state.foundAnchor.rotation
    }

    return (
      <ViroNode position={position} rotation={rotation} scale={scale}>
        <ViroNode scale={[0.011, 0.011, 0.011]} position={[0, 0, 0.005]}>
          <ViroLightingEnvironment source={require("./res/floral_tent_1k.hdr")} />

          <Viro3DObject
            source={require("./res/cr_logo_obj.vrx")}
            type={"VRX"}
            resources={[require("./res/cr_logo.png")]}
          />
          <Viro3DObject
            source={require("./res/cr_city.vrx")}
            type={"VRX"}
            animation={{ name: "01", run: this.state.runAnimation, loop: false }}
            resources={[
              require("./res/cr_ar_badges_Normal_OpenGL.png"),
              require("./res/cr_ar_badges_Base_Color.png"),
              require("./res/cr_ar_badges_Roughness.png"),
              require("./res/cr_ar_badges_Metallic.png"),
            ]}
          />
          <Viro3DObject
            source={require("./res/cr_floorplan.vrx")}
            type={"VRX"}
            animation={{ name: "01", run: this.state.runAnimation, loop: false }}
            resources={[
              require("./res/cr_ar_badges_Normal_OpenGL.png"),
              require("./res/cr_ar_badges_Base_Color.png"),
              require("./res/cr_ar_badges_Roughness.png"),
              require("./res/cr_ar_badges_Metallic.png"),
            ]}
          />
          <Viro3DObject
            source={require("./res/cr_cars.vrx")}
            type={"VRX"}
            animation={{ name: "01", run: this.state.runAnimation, loop: true }}
            resources={[
              require("./res/cr_cars_BaseColor.png"),
              require("./res/cr_cars_Metallic.png"),
              require("./res/cr_cars_Roughness.png"),
            ]}
          />
          <Viro3DObject
            source={require("./res/cr_labels_obj.vrx")}
            type={"VRX"}
            animation={{ name: "01", run: this.state.runAnimation, loop: false }}
            resources={[require("./res/cr_labels.png")]}
          />
        </ViroNode>
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

ViroMaterials.createMaterials({
  red: {
    lightingModel: "Blinn",
    cullMode: "None",
    shininess: 2.0,
    diffuseColor: "#ff1111",
  },
  black: {
    lightingModel: "Constant",
    diffuseColor: "#000",
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
