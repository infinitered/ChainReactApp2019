import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../text"
import { SocialButton } from "../social-button"
import { palette, spacing, getScreenWidth } from "../../theme"

export interface SpeakerBioProps {
  speaker: any
  last?: boolean
}

const ROOT: ViewStyle = {
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
    const widthStyles = {
      maxWidth: getScreenWidth() - 2 * spacing.large,
    }
    const displaySocial =
      facebook ||
      twitter ||
      github ||
      medium ||
      instagram ||
      dribbble ||
      (websites && websites.length > 0)
    const socialStyles = [{ ...SOCIAL_WRAPPER, ...widthStyles }, last && SOCIAL_WRAPPER_LAST]
    const lastIndex = splitName.length - 1
    const firstName = splitName.slice(0, lastIndex).join(" ")
    return (
      <View key={key} style={{ ...ROOT, ...{ width: 0.9 * getScreenWidth() } }}>
        <Text
          text={`${bio ? "ABOUT" : "FOLLOW"} ${firstName.toUpperCase()}`}
          preset="sectionHeader"
          style={{ color: palette.shamrock }}
        />
        {bio && <Text text={bio} preset="subheader" style={BIO} />}
        {displaySocial ? (
          <View style={socialStyles}>
            {Object.keys(links).map(k => {
              return k === "websites"
                ? links.websites.map(link => this.renderLink("website", link))
                : this.renderLink(k, links[k])
            })}
          </View>
        ) : null}
      </View>
    )
  }

  renderLink = (k, link) => {
    if (!link) return null
    return <SocialButton key={k} preset={k} link={link} style={{ marginTop: spacing.small }} />
  }
}
