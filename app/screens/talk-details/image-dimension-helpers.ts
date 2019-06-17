import { spacing } from "../../theme"
const IMAGE_ASPECT_RATIO = 1.5

export const calculateImageDimensions = screenWidth => {
  const imageWidth = 0.92 * (screenWidth - 2 * spacing.large) // 92% of the available container, screen width minus twice the screen padding.
  const imageHeight = imageWidth / IMAGE_ASPECT_RATIO
  return {
    height: imageHeight,
    width: imageWidth,
  }
}
