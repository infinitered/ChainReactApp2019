import * as React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, Dimensions } from "react-native"
import { Text } from "../../../shared/text"
import { palette } from "../../../../theme/palette"
import { spacing } from "../../../../theme/spacing"

// Image size math
const SCREEN_WIDTH = Dimensions.get("window").width
const IMAGE_WIDTH = 0.92 * (SCREEN_WIDTH - 2 * spacing.large) // 95% of the available container, screen width minus twice the screen padding.
const IMAGE_ASPECT_RATIO = 0.77 // This is the original aspect ratio of all the speaker images as they come from the server, which are 292 x 380.
const IMAGE_HEIGHT = IMAGE_WIDTH / IMAGE_ASPECT_RATIO

export interface SpeakerImageProps {
  speaker: any
}

const ROOT: ViewStyle = {
  flex: 1,
}

const SPEAKER_IMAGE: ImageStyle = {
  width: IMAGE_WIDTH,
  height: IMAGE_HEIGHT,
  marginRight: 32,
}

const NAME: ViewStyle = {
  position: "absolute",
  bottom: spacing.large + spacing.medium,
  right: 0,
}

const SPEAKER_NAME: TextStyle = {
  color: palette.white,
  textAlign: "right",
  lineHeight: 22,
}

const EMPLOYER: TextStyle = {
  color: palette.offWhite,
  textAlign: "right",
  marginTop: spacing.small,
}

export class SpeakerImage extends React.Component<SpeakerImageProps, {}> {
  render() {
    const { name, employer, image } = this.props.speaker
    const splitName = name.split(" ")
    const lastIndex = splitName.length - 1
    const firstPart = splitName.slice(0, lastIndex).join(" ")
    const secondPart = splitName[lastIndex]
    const key = `${splitName.join("-")}-image`

    return (
      <View key={key} style={ROOT}>
        {image && <Image source={{ uri: image }} style={SPEAKER_IMAGE} />}
        <View style={NAME}>
          <Text text={firstPart.toUpperCase()} preset="body" style={SPEAKER_NAME} />
          <Text text={secondPart.toUpperCase()} preset="body" style={SPEAKER_NAME} />
          <Text text={employer} preset="input" style={EMPLOYER} />
        </View>
      </View>
    )
  }
}
