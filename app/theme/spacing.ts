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
