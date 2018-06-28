import * as React from "react"
import { View, Image, ViewStyle, TextStyle, Linking, ImageStyle, Platform } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { Text } from "../../shared/text"
import { format } from "date-fns"
import { SpeakerImage } from "./speaker-image"
import { TalkTitle } from "./talk-title"
import { SpeakerBio } from "./speaker-bio"
import { Button } from "../../shared/button"

const ROOT: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
}

const FULL_SIZE: ViewStyle = {
  width: "100%",
  height: "100%",
}

const FULL_WIDTH_IMAGE: ImageStyle = { width: "100%" }

const TITLE: TextStyle = {
  fontSize: 20,
  color: palette.white,
  marginTop: spacing.large,
}

const SPONSOR_CONTAINER: ViewStyle = {
  flexDirection: "row",
  marginTop: spacing.small,
}

const SPONSORED_BY: TextStyle = { color: palette.offWhite }

const SPONSOR_NAME: TextStyle = { fontWeight: "500" }

const LABEL: TextStyle = {
  marginTop: spacing.extraLarge + spacing.large,
  color: palette.shamrock,
  marginBottom: spacing.large,
}

const DESCRIPTION: TextStyle = { marginTop: spacing.large + spacing.tiny + spacing.tiny }

const BULLET: ViewStyle = {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: palette.shamrock,
  marginRight: spacing.small,
  marginTop: spacing.small,
}

const PANEL_BIO: ViewStyle = { marginTop: spacing.extraLarge + spacing.large }

const AFTER_PARTY_LOGO: ImageStyle = {
  position: "absolute",
  bottom: spacing.large,
  right: 18,
}

const AFTER_PARTY_DESCRIPTION: TextStyle = { marginTop: spacing.large }

const MENU_ITEM: ViewStyle = {
  flexDirection: "row",
  marginBottom: spacing.large,
}

const MENU_ITEM_TEXT: TextStyle = { color: palette.white }

export interface TalkDetailsScreenProps extends NavigationScreenProps<{}> {}

const backImage = () => <Image source={require("../../shared/title-bar/icon.back-arrow.png")} />

export class TalkDetailsScreen extends React.Component<TalkDetailsScreenProps, {}> {
  static navigationOptions = ({ navigation }) => {
    const { talk } = navigation.state.params
    const titleMargin = Platform.OS === "ios" ? -50 : 0
    return {
      headerStyle: {
        backgroundColor: palette.portGore,
        borderBottomWidth: 0,
        paddingLeft: spacing.large + spacing.tiny,
      },
      headerBackImage: backImage,
      headerTintColor: palette.shamrock,
      title: `${format(talk.startTime, "h:mm")} - ${format(talk.endTime, "h:mm")}`,
      headerTitleStyle: {
        textAlign: "left",
        fontWeight: "500",
        width: "100%",
        marginLeft: titleMargin,
      },
    }
  }

  render() {
    return (
      <Screen preset="scroll" backgroundColor={palette.portGore} style={ROOT}>
        {this.renderContent()}
      </Screen>
    )
  }

  renderContent = () => {
    const { talkType = "" } = this.props.navigation.state.params.talk
    switch (talkType.toLowerCase()) {
      case "talk":
        return this.renderTalk()
      case "workshop":
        return this.renderWorkshop()
      case "break":
        return this.renderBreak()
      case "lunch":
      case "breakfast":
        return this.renderLunch()
      case "panel":
        return this.renderPanel()
      case "afterparty":
        return this.renderAfterParty()
      default:
        return null
    }
  }

  renderTalk = () => {
    const { talk } = this.props.navigation.state.params
    return (
      <View style={FULL_SIZE}>
        {talk.speakers && <SpeakerImage speaker={talk.speakers[0]} />}
        <TalkTitle talk={talk} />
        {talk.description && (
          <Text
            text={talk.description}
            preset="body"
            style={{ fontSize: 16, marginTop: spacing.large }}
          />
        )}
        {talk.speakers && <SpeakerBio speaker={talk.speakers[0]} />}
      </View>
    )
  }

  renderWorkshop = () => {
    const { talk } = this.props.navigation.state.params
    return (
      <View style={FULL_SIZE}>
        <SpeakerImage speaker={talk.speakers[0]} />
        <TalkTitle talk={talk} />
        <SpeakerBio speaker={talk.speakers[0]} />
      </View>
    )
  }

  renderBreak = () => {
    const { sponsor, description, title } = this.props.navigation.state.params.talk
    return (
      <View style={FULL_SIZE}>
        <Image source={require("./img.event.png")} style={FULL_WIDTH_IMAGE} />
        <Text text={title} preset="body" style={TITLE} />
        <View style={SPONSOR_CONTAINER}>
          <Text tx="talkDetailsScreen.sponsoredBy" preset="input" style={SPONSORED_BY} />
          <Text text={sponsor} preset="input" style={SPONSOR_NAME} />
        </View>
        <Text text={description} preset="body" style={DESCRIPTION} />
      </View>
    )
  }

  renderLunch = () => {
    const { sponsor, description, menuItems, title } = this.props.navigation.state.params.talk
    return (
      <View style={FULL_SIZE}>
        <Image source={require("./img.event.png")} style={FULL_WIDTH_IMAGE} />
        <Text text={title} preset="body" style={TITLE} />
        {sponsor && this.renderSponsored(sponsor)}
        <Text text={description} preset="body" style={DESCRIPTION} />
        <Text preset="sectionHeader" tx="talkDetailsScreen.menuTitle" style={LABEL} />
        {menuItems.map(item => this.renderMenuItem(item))}
      </View>
    )
  }

  renderSponsored = sponsor => {
    return (
      <View style={SPONSOR_CONTAINER}>
        <Text tx="talkDetailsScreen.sponsoredBy" preset="input" style={SPONSORED_BY} />
        <Text text={sponsor} preset="input" style={SPONSOR_NAME} />
      </View>
    )
  }

  renderPanel = () => {
    const { talk } = this.props.navigation.state.params
    return (
      <View style={FULL_SIZE}>
        {talk.image && <Image source={{ uri: talk.image }} style={FULL_WIDTH_IMAGE} />}
        <Text text={talk.title} preset="body" style={TITLE} />
        <Text text={talk.description} preset="body" style={DESCRIPTION} />
        {talk.speakers &&
          talk.speakers.length &&
          talk.speakers.map((speaker, index) => {
            const isLast = index === talk.speakers.length - 1
            return (
              <View key={index} style={PANEL_BIO}>
                <SpeakerImage speaker={speaker} />
                <SpeakerBio speaker={speaker} last={isLast} />
              </View>
            )
          })}
      </View>
    )
  }

  renderAfterParty = () => {
    const { title, description, image } = this.props.navigation.state.params.talk
    return (
      <View style={FULL_SIZE}>
        <View>
          <Image source={require("./img.event.png")} style={FULL_WIDTH_IMAGE} />
          <Image source={{ uri: image }} style={AFTER_PARTY_LOGO} />
        </View>
        <Text text={title} preset="body" style={TITLE} />
        <Text text={description} preset="body" style={AFTER_PARTY_DESCRIPTION} />
      </View>
    )
  }

  renderMenuItem = item => {
    return (
      <View style={MENU_ITEM}>
        <View style={BULLET} />
        <Text preset="subheader" text={item} style={MENU_ITEM_TEXT} />
      </View>
    )
  }
}
