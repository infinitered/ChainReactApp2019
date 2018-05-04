import * as React from "react"
import { View, ScrollView, ViewStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
// import { TitleBar } from "../../shared/title-bar"
import { format } from "date-fns"
import { SpeakerImage } from "./speaker-image"
import { TalkTitle } from "./talk-title"
import { SpeakerBio } from "./speaker-bio"

const ROOT: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
}

export interface TalkDetailsScreenProps extends NavigationScreenProps<{}> {}

export class TalkDetailsScreen extends React.Component<TalkDetailsScreenProps, {}> {
  static navigationOptions = ({ navigation }) => {
    const { talk } = navigation.state.params
    return {
      // header: <TitleBar />,
      headerStyle: { backgroundColor: palette.portGore, borderBottomWidth: 0 },
      headerBackImage: require("../../shared/title-bar/icon.back-arrow.png"),
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
    return <View />
  }

  renderLunch = () => {
    return <View />
  }
}
