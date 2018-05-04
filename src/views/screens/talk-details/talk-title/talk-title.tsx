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
import { Text } from "../../../shared/text"
import { palette } from "../../../../theme/palette"
import { spacing } from "../../../../theme/spacing"

const ROOT: ViewStyle = {
  width: "100%",
  marginTop: spacing.extraLarge + spacing.large,
}

const NAME: ViewStyle = {
  position: "absolute",
  bottom: spacing.large + spacing.medium,
  right: 0,
}

export class TalkTitle extends React.Component<{ talk: any }, {}> {
  render() {
    const { title, speakers } = this.props.talk
    const splitName = speakers[0].name.split(" ")
    return (
      <View style={ROOT}>
        <Text
          text={`${splitName[0].toUpperCase()}'S TALK`}
          preset="sectionHeader"
          style={{ color: palette.shamrock }}
        />
        <Text text={title} preset="header" style={{ fontSize: 24, marginTop: spacing.large }} />
      </View>
    )
  }
}
