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

const ROOT: ViewStyle = {
  width: "100%",
}

const NAME: ViewStyle = {
  position: "absolute",
  bottom: spacing.large + spacing.medium,
  right: 0,
}

export class SpeakerImage extends React.Component<{ speaker: any }, {}> {
  render() {
    const { name, employer } = this.props.speaker
    const splitName = name.split(" ")
    return (
      <View style={ROOT}>
        <Image source={require("./img.speaker.lg.png")} style={{ maxHeight: 383 }} />
        <View style={NAME}>
          <Text
            text={splitName[0].toUpperCase()}
            preset="body"
            style={{ color: palette.white, textAlign: "right", lineHeight: 22 }}
          />
          <Text
            text={splitName[1].toUpperCase()}
            preset="body"
            style={{ color: palette.white, textAlign: "right", lineHeight: 22 }}
          />
          <Text
            text={employer}
            preset="input"
            style={{ color: palette.offWhite, textAlign: "right", marginTop: spacing.small }}
          />
        </View>
      </View>
    )
  }
}
