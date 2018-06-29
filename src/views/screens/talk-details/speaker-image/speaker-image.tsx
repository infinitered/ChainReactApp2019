import * as React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle } from "react-native"
import { Text } from "../../../shared/text"
import { palette } from "../../../../theme/palette"
import { spacing } from "../../../../theme/spacing"

export interface SpeakerImageProps {
  speaker: any
}

const ROOT: ViewStyle = {
  width: "100%",
}

const SPEAKER_IMAGE: ImageStyle = {
  width: 303,
  height: 383,
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
