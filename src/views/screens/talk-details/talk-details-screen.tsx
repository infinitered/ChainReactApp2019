import * as React from "react"
import { ViewStyle } from "react-native"
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
      title: `${format(talk.startTime, "h:mm A")} - ${format(talk.endTime, "h:mm A")}`,
      titleStyle: { textAlign: "left", fontWeight: "300" },
    }
  }

  render() {
    const { talk } = this.props.navigation.state.params
    return (
      <Screen preset="scroll" backgroundColor={palette.portGore} style={ROOT}>
        <SpeakerImage speaker={talk.speakers[0]} />
        <TalkTitle talk={talk} />
        <SpeakerBio speaker={talk.speakers[0]} />
      </Screen>
    )
  }
}
