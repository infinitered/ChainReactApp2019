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
    const {
      name,
      facebook,
      twitter,
      github,
      medium,
      instagram,
      dribbble,
      websites,
    } = this.props.speaker
    const { last = true } = this.props
    const splitName = name.split(" ")
    const key = `${splitName.join("-")}-bio`
    const links = {
      facebook,
      twitter,
      github,
      medium,
      instagram,
      dribbble,
      websites: websites || [],
    }
    const socialStyles = [SOCIAL_WRAPPER, last && SOCIAL_WRAPPER_LAST]

    if (
      facebook ||
      twitter ||
      github ||
      medium ||
      instagram ||
      dribbble ||
      (websites && websites.length > 0)
    ) {
      return (
        <View key={key} style={ROOT}>
          <Text
            text={`FOLLOW ${splitName[0].toUpperCase()}`}
            preset="sectionHeader"
            style={{ color: palette.shamrock }}
          />
          <View style={socialStyles}>
            {Object.keys(links).map(k => {
              return k === "websites"
                ? links.websites.map(link => this.renderLink("website", link))
                : this.renderLink(k, links[k])
            })}
          </View>
        </View>
      )
    } else {
      return null
    }
  }

  renderLink = (k, link) => {
    if (!link) return null
    return <SocialButton key={k} preset={k} link={link} />
  }
}
