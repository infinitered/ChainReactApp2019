import * as React from "react"
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextStyle,
  Linking,
  TouchableOpacity,
} from "react-native"
import { SpeakerImagePresets } from "./schedule-cell.presets"
import { Text } from "../../../shared/text"
import { Button } from "../../../shared/button"
import { palette } from "../../../../theme/palette"
import { spacing } from "../../../../theme/spacing"
import { format } from "date-fns"

export interface SpeakerImageProps {
  speaker: any
}

const ROOT: ViewStyle = {
  width: "100%",
}

const SPEAKER_IMAGE: ImageStyle = { maxHeight: 383 }

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
    const { name, employer } = this.props.speaker
    const splitName = name.split(" ")
    const key = `${splitName.join("-")}-image`
    return (
      <View key={key} style={ROOT}>
        <Image source={require("./img.speaker.lg.png")} style={SPEAKER_IMAGE} />
        <View style={NAME}>
          <Text text={splitName[0].toUpperCase()} preset="body" style={SPEAKER_NAME} />
          <Text text={splitName[1].toUpperCase()} preset="body" style={SPEAKER_NAME} />
          <Text text={employer} preset="input" style={EMPLOYER} />
        </View>
      </View>
    )
  }
}
