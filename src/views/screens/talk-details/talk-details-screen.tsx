import * as React from "react"
import { View, Image, ViewStyle, TextStyle, Linking } from "react-native"
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

const LABEL: TextStyle = {
  marginTop: spacing.extraLarge + spacing.large,
  color: palette.shamrock,
  marginBottom: spacing.large,
}

const BULLET: ViewStyle = {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: palette.shamrock,
  marginRight: spacing.small,
  marginTop: spacing.small,
}

export interface TalkDetailsScreenProps extends NavigationScreenProps<{}> {}

const backImage = () => <Image source={require("../../shared/title-bar/icon.back-arrow.png")} />

export class TalkDetailsScreen extends React.Component<TalkDetailsScreenProps, {}> {
  static navigationOptions = ({ navigation }) => {
    const { talk } = navigation.state.params
    return {
      // header: <TitleBar />,
      headerStyle: { backgroundColor: palette.portGore, borderBottomWidth: 0 },
      //headerBackImage: require("../../shared/title-bar/icon.back-arrow.png"),
      headerBackImage: backImage,
      headerTintColor: palette.shamrock,
      title: `${format(talk.startTime, "h:mm")} - ${format(talk.endTime, "h:mm")}`,
      headerTitleStyle: { textAlign: "left", fontWeight: "500", width: "100%", marginLeft: -50 },
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
    const { type } = this.props.navigation.state.params.talk
    switch (type) {
      case "talk":
        return this.renderTalk()
      case "workshop":
        return this.renderWorkshop()
      case "break":
        return this.renderBreak()
      case "lunch":
        return this.renderLunch()
      case "afterParty":
        return this.renderAfterParty()
    }
  }

  renderTalk = () => {
    const { talk } = this.props.navigation.state.params
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <SpeakerImage speaker={talk.speakers[0]} />
        <TalkTitle talk={talk} />
        <SpeakerBio speaker={talk.speakers[0]} />
      </View>
    )
  }

  renderWorkshop = () => {
    const { talk } = this.props.navigation.state.params
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <SpeakerImage speaker={talk.speakers[0]} />
        <TalkTitle talk={talk} />
        <SpeakerBio speaker={talk.speakers[0]} />
      </View>
    )
  }

  renderBreak = () => {
    const { sponsor, description, title } = this.props.navigation.state.params.talk
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Image source={require("./img.event.png")} style={{ width: "100%" }} />
        <Text
          text={title}
          preset="body"
          style={{ fontSize: 20, color: palette.white, marginTop: spacing.large }}
        />
        <View style={{ flexDirection: "row", marginTop: spacing.small }}>
          <Text
            tx="talkDetailsScreen.sponsoredBy"
            preset="input"
            style={{ color: palette.offWhite }}
          />
          <Text text={sponsor} preset="input" style={{ fontWeight: "500" }} />
        </View>
        <Text
          text={description}
          preset="body"
          style={{ marginTop: spacing.large + spacing.tiny + spacing.tiny }}
        />
      </View>
    )
  }

  renderLunch = () => {
    const { sponsor, description, menuItems, title } = this.props.navigation.state.params.talk
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Image source={require("./img.event.png")} style={{ width: "100%" }} />
        <Text
          text={title}
          preset="body"
          style={{ fontSize: 20, color: palette.white, marginTop: spacing.large }}
        />
        <View style={{ flexDirection: "row", marginTop: spacing.small }}>
          <Text
            tx="talkDetailsScreen.sponsoredBy"
            preset="input"
            style={{ color: palette.offWhite }}
          />
          <Text text={sponsor} preset="input" style={{ fontWeight: "500" }} />
        </View>
        <Text
          text={description}
          preset="body"
          style={{ marginTop: spacing.large + spacing.tiny + spacing.tiny }}
        />
        <Text preset="sectionHeader" tx="talkDetailsScreen.menuTitle" style={LABEL} />
        {menuItems.map(item => this.renderMenuItem(item))}
      </View>
    )
  }

  renderAfterParty = () => {
    const { title, description, location, rsvpWebsite } = this.props.navigation.state.params.talk
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <View>
          <Image source={require("./img.event.png")} style={{ width: "100%" }} />
          <Image
            source={require("./img.partylogo.png")}
            style={{ position: "absolute", bottom: spacing.large, right: 18 }}
          />
        </View>
        <Text
          text={title}
          preset="body"
          style={{ fontSize: 20, color: palette.white, marginTop: spacing.large }}
        />
        <Text text={description} preset="body" style={{ marginTop: spacing.large }} />
        <Text
          text={location}
          preset="body"
          style={{ marginTop: spacing.extraLarge, fontWeight: "500", color: palette.white }}
        />
        <Button
          preset="primary"
          onPress={() => Linking.openURL(rsvpWebsite)}
          tx="talkDetailsScreen.rsvp"
          style={{
            borderRadius: 0,
            marginTop: spacing.extraLarge + spacing.large,
            paddingVertical: 18,
          }}
          textStyle={{ fontSize: 14, fontWeight: "500" }}
        />
      </View>
    )
  }

  renderMenuItem = item => {
    return (
      <View style={{ flexDirection: "row", marginBottom: spacing.large }}>
        <View style={BULLET} />
        <Text preset="subheader" text={item} style={{ color: palette.white }} />
      </View>
    )
  }
}
