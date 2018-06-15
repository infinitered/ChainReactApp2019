/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import PropTypes from "prop-types"
import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Animation from "lottie-react-native"
import SuccessAnimation from "./SuccessAnimation"

class ARInitializationUI extends React.Component {
  constructor(props) {
    super(props)

    this.setAnimation = this.setAnimation.bind(this)
  }

  componentDidMount() {
    this.animation.play()
  }

  setAnimation(animation) {
    this.animation = animation
  }

  render() {
    if (!this.props.arSceneInitialized) {
      return (
        <View pointerEvents={"none"} style={this.props.style}>
          <View style={{ width: 172.075, height: 100 }}>
            <Animation
              ref={this.setAnimation}
              style={{
                width: 172.075,
                height: 100,
                alignSelf: "center",
              }}
              loop={true}
              source={require("./res/animations/data.json")}
            />
          </View>
          <Image source={require("./res/icon_initializing_text_1.png")} />
        </View>
      )
    } else {
      return (
        <View pointerEvents={"none"} style={{ ...this.props.style, height: 120 }}>
          <SuccessAnimation
            onPress={() => {}}
            stateImageArray={[require("./res/icon_initializing_device_2.png")]}
            style={localStyles.arSceneInitializeSuccess}
          />
          <SuccessAnimation
            onPress={() => {}}
            stateImageArray={[require("./res/icon_initializing_text_2.png")]}
          />
        </View>
      )
    }
  }
}

ARInitializationUI.propTypes = {
  arSceneInitialized: PropTypes.bool,
  style: PropTypes.any,
}

var localStyles = StyleSheet.create({
  arSceneInitializeSuccess: {
    height: 61,
    width: 35,
    alignSelf: "center",
  },
})

export default ARInitializationUI
