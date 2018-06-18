import * as React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, Linking, Alert } from "react-native"
import { Text } from "../../../shared/text"
import { SocialButton } from "../../../shared/social-button"
import { palette } from "../../../../theme/palette"
import { spacing } from "../../../../theme/spacing"

export interface SpeakerBioProps {
  speaker: any
  last?: boolean
}

const ROOT: ViewStyle = {
  width: "100%",
  marginTop: spacing.extraLarge + spacing.large,
}

const NAME: ViewStyle = {
  position: "absolute",
  bottom: spacing.large + spacing.medium,
  right: 0,
}

const SOCIAL_WRAPPER: ViewStyle = {
  flexDirection: "row",
  marginTop: spacing.large + spacing.small,
}

const SOCIAL_WRAPPER_LAST: ViewStyle = {
  marginBottom: spacing.ginormous + spacing.large,
}

export class SpeakerBio extends React.Component<SpeakerBioProps, {}> {
  render() {
    const { name, bio, links } = this.props.speaker
    const { last = true } = this.props
    const splitName = name.split(" ")
    const socialStyles = [SOCIAL_WRAPPER, last && SOCIAL_WRAPPER_LAST]
    return (
      <View style={ROOT}>
        <Text
          text={`ABOUT ${splitName[0].toUpperCase()}`}
          preset="sectionHeader"
          style={{ color: palette.shamrock }}
        />
        <Text text={bio} preset="body" style={{ fontSize: 16, marginTop: spacing.large }} />
        <View style={socialStyles}>
          {Object.keys(links).map(k => {
            return k === "websites"
              ? links[k].map(link => this.renderLink("website", link))
              : this.renderLink(k, links[k])
          })}
        </View>
      </View>
    )
  }

  renderLink = (k, link) => {
    return <SocialButton preset={k} link={link} />
  }
}
