import * as React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle } from "react-native"
import { Text } from "../text"
import { palette, spacing, getScreenWidth } from "../../theme"

// Image size math
const IMAGE_ASPECT_RATIO = 0.77 // This is the original aspect ratio of all the speaker images as they come from the server, which are 292 x 380.

export interface SpeakerImageProps {
  speaker: any
}

const ROOT: ViewStyle = {
  flex: 1,
  maxHeight: 400,
}

const SPEAKER_IMAGE: ImageStyle = {
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
    // Image size math
    const imageWidth = 0.92 * (getScreenWidth() - 2 * spacing.large) // 95% of the available container, screen width minus twice the screen padding.
    const imageHeight = imageWidth / IMAGE_ASPECT_RATIO
    const speakerImageWidthStyles = {
      height: imageHeight,
      width: imageWidth,
    }

    return (
      <View key={key} style={ROOT}>
        {image && (
          <Image source={{ uri: image }} style={{ ...SPEAKER_IMAGE, ...speakerImageWidthStyles }} />
        )}
        <View style={NAME}>
          <Text text={firstPart.toUpperCase()} preset="body" style={SPEAKER_NAME} />
          <Text text={secondPart.toUpperCase()} preset="body" style={SPEAKER_NAME} />
          <Text text={employer} preset="input" style={EMPLOYER} />
        </View>
      </View>
    )
  }
}
