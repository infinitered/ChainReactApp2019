import * as React from "react"
import { View, ViewStyle, TextStyle, Dimensions } from "react-native"
import { Text } from "../../../shared/text"
import { SocialButton } from "../../../shared/social-button"
import { palette } from "../../../../theme/palette"
import { spacing } from "../../../../theme/spacing"

export interface SpeakerBioProps {
  speaker: any
  last?: boolean
}

const SCREEN_WIDTH = Dimensions.get("window").width
const MAX_WIDTH = SCREEN_WIDTH - 2 * spacing.large

const ROOT: ViewStyle = {
  width: "100%",
  marginTop: spacing.extraLarge + spacing.large,
}

const BIO: TextStyle = {
  color: palette.offWhite,
  marginTop: spacing.large,
}

const SOCIAL_WRAPPER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  marginTop: spacing.large,
  maxWidth: MAX_WIDTH,
  flexWrap: "wrap",
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
      bio,
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
      const splitName = name.split(" ")
      const lastIndex = splitName.length - 1
      const firstName = splitName.slice(0, lastIndex).join(" ")
      return (
        <View key={key} style={ROOT}>
          <Text
            text={`${bio ? "ABOUT" : "FOLLOW"} ${firstName.toUpperCase()}`}
            preset="sectionHeader"
            style={{ color: palette.shamrock }}
          />
          {bio && <Text text={bio} preset="subheader" style={BIO} />}
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
    return <SocialButton key={k} preset={k} link={link} style={{ marginTop: spacing.small }} />
  }
}
