import { Dimensions } from "react-native"

export const spacing = {
  tiny: 4,
  small: 10,
  medium: 14,
  large: 20,
  extraLarge: 43,
  huge: 80,
  ginormous: 100,
}

export const getScreenWidth = () => Dimensions.get("window").width
export const getScreenHeight = () => Dimensions.get("window").height

export const HIT_SLOP = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 20,
}
