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
}

const NAME: ViewStyle = {
  position: "absolute",
  bottom: spacing.large + spacing.medium,
  right: 0,
}

const LABEL: TextStyle = {
  marginTop: spacing.extraLarge + spacing.large,
  color: palette.shamrock,
  marginBottom: spacing.large,
}

const TITLE: TextStyle = {
  fontSize: 24,
}

export class TalkTitle extends React.Component<{ talk: any }, {}> {
  render() {
    const { type } = this.props.talk
    switch (type) {
      case "talk":
        return this.renderTalk()
      case "workshop":
        return this.renderWorkshop()
    }
  }

  renderTalk = () => {
    const { title, speakers } = this.props.talk
    const splitName = speakers[0].name.split(" ")
    return (
      <View style={ROOT}>
        <Text text={`${splitName[0].toUpperCase()}'S TALK`} preset="sectionHeader" style={LABEL} />
        <Text text={title} preset="header" style={TITLE} />
      </View>
    )
  }

  renderWorkshop = () => {
    const { title, speakers, location, description } = this.props.talk
    return (
      <View style={ROOT}>
        <Text text="WORKSHOP" preset="sectionHeader" style={LABEL} />
        <Text text={title} preset="header" style={TITLE} />
        <Text text="LOCATION" preset="sectionHeader" style={LABEL} />
        <Text
          text={location}
          preset="subheader"
          style={{ color: palette.white, fontWeight: "500" }}
        />
        <Text text="ABOUT WORKSHOP" preset="sectionHeader" style={LABEL} />
        <Text text={description} preset="body" style={{}} />
      </View>
    )
  }
}
