import * as React from "react"
import { View, Image, ViewStyle, ImageStyle } from "react-native"
import { RatingProps } from "./rating.props"

const filled = require("./star.filled.png")
const empty = require("./star.unfilled.png")

const ROOT: ViewStyle = {
  marginLeft: "auto",
  flexDirection: "row",
  width: 17 * 5,
  height: 11,
}
const STAR: ImageStyle = {
  width: 11,
  height: 11,
  marginLeft: 6,
}

export class Rating extends React.Component<RatingProps, {}> {
  render() {
    const stars = ["1", "2", "3", "4", "5"]
    return <View style={ROOT}>{stars.map(i => this.renderImage(i))}</View>
  }

  renderImage = i => {
    const { rating } = this.props
    const source = i <= rating ? filled : empty
    return <Image source={source} style={STAR} key={`${i}`} />
  }
}
