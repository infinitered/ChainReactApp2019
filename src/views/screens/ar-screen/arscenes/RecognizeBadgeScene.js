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
  ViroAnimations,
} from "react-viro"

const BADGE_NOT_FOUND = -1

const BADGE_TYPES = [
  "attendee_1",
  "attendee_2",
  "attendee_3",
  "attendee_4",
  "attendee_5",
  "attendee_6",
  "attendee_7",
  "attendee_8",
  "attendee_9",
  "speaker_1",
  "speaker_2",
  "speaker_3",
  "speaker_4",
  "speaker_5",
  "speaker_6",
  "speaker_7",
  "staff_1",
  "staff_7",
]

export default class RecognizeBadgeScene extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      foundBadgeType: BADGE_NOT_FOUND,
      runAnimation: false,
      finishedInitialAnimation: false,
      showFloorOne: true,
      runAnimationLabel1: false,
      runAnimationLabel2: false,
      readyLoadModel: false, // TODO: delay model loading by a bit to allow animations to run.
    }

    // bind 'this' to functions
    this._switchFloors = this._switchFloors.bind(this)
    this._getMarkers = this._getMarkers.bind(this)
    this._getARImageMarkerProps = this._getARImageMarkerProps.bind(this)
    this._getOnMarkerFoundCallback = this._getOnMarkerFoundCallback.bind(this)
    this._onAnchorUpdated = this._onAnchorUpdated.bind(this)
    this._getExperience = this._getExperience.bind(this)
    this._onInitialized = this._onInitialized.bind(this)
    this._objLoadEnd = this._objLoadEnd.bind(this)
    this._getButtonAnimation = this._getButtonAnimation.bind(this)
    this._onFinishInitialAnimation = this._onFinishInitialAnimation.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        readyLoadModel: true,
      })
    }, 500)
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} onClick={this._switchFloors}>
        <ViroAmbientLight color={"#ffffff"} />

        {this._getMarkers()}

        {this._getExperience()}
      </ViroARScene>
    )
  }

  _switchFloors() {
    if (this.state.finishedInitialAnimation) {
      this.setState({ showFloorOne: !this.state.showFloorOne })
    }
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

  _getButtonAnimation(btnNumber) {
    if (
      (btnNumber == 1 && this.state.showFloorOne) ||
      (btnNumber == 2 && !this.state.showFloorOne)
    ) {
      return "buttonFadeSelected"
    }
    return "buttonFadeUnselected"
  }

  /*
   Return the experience we want once a badge is found
   */
  _getExperience() {
    if (!this.state.readyLoadModel) {
      return null
    }

    let scale = [0, 0, 0]
    let position = [0, 0, 0]
    let rotation = [0, 0, 0]

    if (this.state.foundAnchor != undefined) {
      scale = [1, 1, 1]
      position = this.state.foundAnchor.position
      rotation = this.state.foundAnchor.rotation
    }

    let floor1Animation = {}
    let floor2Animation = {}
    if (!this.state.finishedInitialAnimation) {
      floor1Animation = {
        name: "01",
        run: this.state.runAnimation,
        loop: false,
        onFinish: this._onFinishInitialAnimation,
      }
      floor2Animation = { name: "01", run: this.state.runAnimation, loop: false }
    } else {
      floor1Animation = {
        name: this.state.showFloorOne ? "fadeIn" : "fadeOut",
        run: true,
        loop: false,
      }
      floor2Animation = {
        name: !this.state.showFloorOne ? "fadeIn" : "fadeOut",
        run: true,
        loop: false,
      }
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
            resources={[
              require("./res/cr_ar_badges_Normal_OpenGL.png"),
              require("./res/cr_ar_badges_Base_Color.png"),
              require("./res/cr_ar_badges_Roughness.png"),
              require("./res/cr_ar_badges_Metallic.png"),
            ]}
          />
          <Viro3DObject
            source={require("./res/cr_floor_1.vrx")}
            type={"VRX"}
            animation={floor1Animation}
            resources={[
              require("./res/cr_ar_badges_Normal_OpenGL.png"),
              require("./res/cr_ar_badges_Base_Color.png"),
              require("./res/cr_ar_badges_Roughness.png"),
              require("./res/cr_ar_badges_Metallic.png"),
            ]}
          />
          <Viro3DObject
            source={require("./res/cr_floor_1_labels.vrx")}
            type={"VRX"}
            animation={floor1Animation}
            resources={[require("./res/cr_labels.png")]}
          />
          <Viro3DObject
            source={require("./res/cr_floor_2.vrx")}
            opacity={0}
            type={"VRX"}
            animation={floor2Animation}
            resources={[
              require("./res/cr_floor_2_Normal_OpenGL.png"),
              require("./res/cr_floor_2_Base_Color.png"),
              require("./res/cr_floor_2_Roughness.png"),
              require("./res/cr_floor_2_Metallic.png"),
            ]}
          />
          <Viro3DObject
            source={require("./res/cr_floor_2_labels.vrx")}
            opacity={0}
            type={"VRX"}
            animation={floor2Animation}
            resources={[require("./res/cr_labels.png")]}
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
          <ViroImage
            source={require("./res/cr_label_floor_1.png")}
            position={[7.2155, 0.123619, 4.1603]}
            height={1.675}
            width={4.697}
            rotation={[-90, 0, 0]}
            resizeMode="ScaleToFill"
            animation={{
              name: this._getButtonAnimation(1),
              run: this.state.runAnimation,
              loop: false,
            }}
          />
          <ViroImage
            source={require("./res/cr_label_floor_2.png")}
            position={[7.2155, 0.123619, 6.3425]}
            height={1.675}
            width={4.697}
            rotation={[-90, 0, 0]}
            resizeMode="ScaleToFill"
            animation={{
              name: this._getButtonAnimation(2),
              run: this.state.runAnimation,
              loop: false,
            }}
          />
        </ViroNode>
      </ViroNode>
    )
  }

  _onFinishInitialAnimation() {
    this.setState({
      finishedInitialAnimation: true,
    })
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

ViroAnimations.registerAnimations({
  buttonFadeUnselected: {
    properties: { opacity: 0.3 },
    duration: 500,
    delay: 0,
  },
  buttonFadeSelected: {
    properties: { opacity: 1 },
    duration: 500,
    delay: 0,
  },
  fadeOut: {
    properties: { opacity: 0 },
    duration: 250,
    delay: 0,
  },
  fadeIn: {
    properties: { opacity: 1 },
    duration: 250,
    delay: 250,
  },
})

ViroARTrackingTargets.createTargets({
  attendee_1: {
    source: require("./res/badges/attendee_1.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_2: {
    source: require("./res/badges/attendee_2.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_3: {
    source: require("./res/badges/attendee_3.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_4: {
    source: require("./res/badges/attendee_4.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_5: {
    source: require("./res/badges/attendee_5.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_6: {
    source: require("./res/badges/attendee_6.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_7: {
    source: require("./res/badges/attendee_7.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_8: {
    source: require("./res/badges/attendee_8.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  attendee_9: {
    source: require("./res/badges/attendee_8.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  speaker_1: {
    source: require("./res/badges/speaker_1.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  speaker_2: {
    source: require("./res/badges/speaker_2.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  speaker_3: {
    source: require("./res/badges/speaker_3.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  speaker_4: {
    source: require("./res/badges/speaker_4.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  speaker_5: {
    source: require("./res/badges/speaker_5.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  speaker_6: {
    source: require("./res/badges/speaker_6.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  speaker_7: {
    source: require("./res/badges/speaker_6.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  staff_1: {
    source: require("./res/badges/staff_1.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  staff_2: {
    source: require("./res/badges/staff_2.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  staff_3: {
    source: require("./res/badges/staff_3.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  staff_6: {
    source: require("./res/badges/staff_6.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
  staff_7: {
    source: require("./res/badges/staff_6.png"),
    orientation: "Up",
    physicalWidth: 0.09525, // 3.75 inches wide
  },
})

module.exports = RecognizeBadgeScene
