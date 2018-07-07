import * as React from "react"
import { View, Image, ViewStyle, TextStyle, Dimensions, ImageStyle, Platform } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { Text } from "../../shared/text"
import { format } from "date-fns"
import { SpeakerImage } from "./speaker-image"
import { TalkTitle } from "./talk-title"
import { SpeakerBio } from "./speaker-bio"

const ROOT: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
}

const FULL_SIZE: ViewStyle = {
  width: "100%",
  height: "100%",
}

const SCREEN_WIDTH = Dimensions.get("window").width
const IMAGE_WIDTH = SCREEN_WIDTH - 2 * spacing.large
const IMAGE_ASPECT_RATIO = 1.5
const IMAGE_HEIGHT = IMAGE_WIDTH / IMAGE_ASPECT_RATIO
const FULL_WIDTH_IMAGE: ImageStyle = {
  width: IMAGE_WIDTH,
  height: IMAGE_HEIGHT,
  resizeMode: "contain",
}

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

const PANEL_BIO: ViewStyle = { flex: 1, marginTop: spacing.extraLarge + spacing.large }

const AFTER_PARTY_DESCRIPTION: TextStyle = { marginTop: spacing.large }

const MENU_ITEM: ViewStyle = {
  flexDirection: "row",
  marginBottom: spacing.large,
  width: "100%",
}

const MENU_ITEM_TEXT: TextStyle = { color: palette.white }

const HIT_SLOP = {
  top: 30,
  left: 30,
  right: 30,
  bottom: 30,
}

export interface TalkDetailsScreenProps extends NavigationScreenProps<{}> {}

const backImage = () => (
  <View hitSlop={HIT_SLOP}>
    <Image source={require("../../shared/title-bar/icon.back-arrow.png")} />
  </View>
)

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
        <Image source={require("./img.coffee-modus.png")} style={FULL_WIDTH_IMAGE} />
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
    const {
      sponsor,
      description,
      menuItems,
      title,
      image,
    } = this.props.navigation.state.params.talk
    return (
      <View style={FULL_SIZE}>
        <Image source={{ uri: image }} style={FULL_WIDTH_IMAGE} />
        <Text text={title} preset="body" style={TITLE} />
        {sponsor && this.renderSponsored(sponsor)}
        <Text text={description} preset="body" style={DESCRIPTION} />
        <Text preset="sectionHeader" tx="talkDetailsScreen.menuTitle" style={LABEL} />
        {menuItems.map((item, index) => this.renderMenuItem(item, index))}
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
    const { talk: { image, title, description, speakers } } = this.props.navigation.state.params
    return (
      <View style={FULL_SIZE}>
        {<Image source={{ uri: image }} style={FULL_WIDTH_IMAGE} />}
        <Text text={title} preset="body" style={TITLE} />
        <Text text={description} preset="body" style={DESCRIPTION} />
        {speakers &&
          speakers.length &&
          speakers.map((speaker, index) => {
            const isLast = index === speakers.length - 1
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
    const { title, description, sponsor } = this.props.navigation.state.params.talk
    let image =
      sponsor === "Squarespace"
        ? require("./img.afterparty-squarespace.png")
        : require("./img.afterparty-g2i.png")
    return (
      <View style={FULL_SIZE}>
        <View>
          <Image source={image} style={FULL_WIDTH_IMAGE} />
        </View>
        <Text text={title} preset="body" style={TITLE} />
        <Text text={description} preset="body" style={AFTER_PARTY_DESCRIPTION} />
      </View>
    )
  }

  renderMenuItem = (item, index) => {
    return (
      <View key={index} style={MENU_ITEM}>
        <View style={BULLET} />
        <Text preset="subheader" text={item} style={MENU_ITEM_TEXT} />
      </View>
    )
  }
}
