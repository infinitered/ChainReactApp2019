/**
 This is a slightly modified version of the ViroARPlaneSelector under 
 /node_modules/react-viro/components/AR/ViroARPlaneSelector.js

 The only change is in line 126 where we invoke the given onClick prop even before a plane
 has been selected (or rather, when a plane is selected too)
*/

import { requireNativeComponent, View, StyleSheet, findNodeHandle } from "react-native"
import React, { Component } from "react"
import PropTypes from "prop-types"

var createReactClass = require("create-react-class")

import { ViroMaterials, ViroARPlane, ViroQuad, ViroNode } from "react-viro"

var _maxPlanes = 15
var _planePrefix = "ViroARPlaneSelector_Plane_"

/**
 * This component wraps the logic required to enable user selection
 * of an AR plane. This currently only allows for 1 plane to be selected,
 * but could easily be modified to allow for more planes.
 */
var ViroARPlaneSelector = createReactClass({
  propTypes: {
    ...View.propTypes,
    maxPlanes: PropTypes.number,
    minHeight: PropTypes.number,
    minWidth: PropTypes.number,
    alignment: PropTypes.oneOf([
      "Horizontal",
      "HorizontalUpward",
      "HorizontalDownward",
      "Vertical",
    ]),
    visible: PropTypes.bool,
    opacity: PropTypes.number,
    ignoreEventHandling: PropTypes.bool,
    dragType: PropTypes.oneOf(["FixedDistance", "FixedToWorld", "FixedToPlane"]),
    dragPlane: PropTypes.shape({
      planePoint: PropTypes.arrayOf(PropTypes.number),
      planeNormal: PropTypes.arrayOf(PropTypes.number),
      maxDistance: PropTypes.number,
    }),

    onHover: PropTypes.func,
    onClick: PropTypes.func,
    onClickState: PropTypes.func,
    onTouch: PropTypes.func,
    onScroll: PropTypes.func,
    onSwipe: PropTypes.func,
    onDrag: PropTypes.func,
    onPinch: PropTypes.func,
    onRotate: PropTypes.func,
    onFuse: PropTypes.oneOfType([
      PropTypes.shape({
        callback: PropTypes.func.isRequired,
        timeToFuse: PropTypes.number,
      }),
      PropTypes.func,
    ]),
    onCollision: PropTypes.func,
    viroTag: PropTypes.string,
    onAnchorFound: PropTypes.func,
    onAnchorUpdated: PropTypes.func,
    onAnchorRemoved: PropTypes.func,
    onPlaneSelected: PropTypes.func,
  },

  getInitialState: function() {
    return {
      selectedSurface: -1,
      foundARPlanes: [],
    }
  },

  render: function() {
    // Uncomment this line to check for misnamed props
    //checkMisnamedProps("ViroARPlaneSelector", this.props);

    return <ViroNode>{this._getARPlanes()}</ViroNode>
  },

  _getARPlanes() {
    if (this.state.selectedSurface == -1) {
      let arPlanes = []
      let numPlanes = this.props.maxPlanes || _maxPlanes
      for (var i = 0; i < numPlanes; i++) {
        let foundARPlane = this.state.foundARPlanes[i]
        let surfaceWidth = foundARPlane ? foundARPlane.width : 0
        let surfaceHeight = foundARPlane ? foundARPlane.height : 0
        let surfacePosition = foundARPlane ? foundARPlane.center : [0, 0, 0]
        arPlanes.push(
          <ViroARPlane
            key={_planePrefix + i}
            minWidth={this.props.minWidth}
            minHeight={this.props.minHeight}
            alignment={this.props.alignment}
            onAnchorUpdated={this._onARPlaneUpdated(i)}
          >
            <ViroQuad
              materials={"ViroARPlaneSelector_Translucent"}
              onClick={this._getOnClickSurface(i)}
              position={surfacePosition}
              width={surfaceWidth}
              height={surfaceHeight}
              rotation={[-90, 0, 0]}
            />
          </ViroARPlane>,
        )
      }
      return arPlanes
    } else {
      return <ViroARPlane key={_planePrefix + this.state.selectedSurface} {...this.props} />
    }
  },

  _getOnClickSurface(index) {
    return (position, source) => {
      this.setState({ selectedSurface: index })
      this._onPlaneSelected(this.state.foundARPlanes[index])
      this.props.onClick(position, source)
    }
  },

  _onARPlaneUpdated(index) {
    return updateMap => {
      this.state.foundARPlanes[index] = updateMap
      this.setState({
        arPlaneSizes: this.state.arPlaneSizes,
      })
    }
  },

  _onPlaneSelected(updateMap) {
    this.props.onPlaneSelected && this.props.onPlaneSelected(updateMap)
  },

  /*
  This function allows the user to reset the surface and select a new plane.
  */
  reset() {
    this.setState({
      selectedSurface: -1,
    })
  },
})

ViroMaterials.createMaterials({
  ViroARPlaneSelector_Translucent: {
    lightingModel: "Constant",
    diffuseColor: "#88888888",
  },
})

module.exports = ViroARPlaneSelector
