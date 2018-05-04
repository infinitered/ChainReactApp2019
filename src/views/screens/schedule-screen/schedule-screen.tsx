import * as React from "react"
import { View, ViewStyle, ScrollView } from "react-native"
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { isThursday, isFriday } from "date-fns"
import { ScheduleNav } from "./schedule-nav"
import { ScheduleCell } from "./schedule-cell"

const ROOT: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-start",
}

const TALK = {
  type: "talk",
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title:
    "Realtime Event Processing, Streaming and Subscription for React Native Using Cloud Services",
  speakers: [
    {
      name: "Jason Harrelso",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt laoreet dui, ac vulputate tortor porttitor non. Mauris iaculis turpis vitae augue vestibulum commodo. Praesent sit amet augue massa. Nam maximus mauris sed eros facilisis, quis efficitur purus scelerisque. In in hendrerit nunc. es, nascetur ridiculus mus.",
      employer: "Microsoft",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      links: {
        facebook: "https://bing.com",
        twitter: "https://google.com",
        websites: ["https://microsoft.com"],
      },
    },
  ],
  description: "",
}

const WORKSHOP = {
  type: "workshop",
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title:
    "Realtime Event Processing, Streaming and Subscription for React Native Using Cloud Services",
  speakers: [
    {
      name: "Jason Harrelso",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt laoreet dui, ac vulputate tortor porttitor non. Mauris iaculis turpis vitae augue vestibulum commodo. Praesent sit amet augue massa. Nam maximus mauris sed eros facilisis, quis efficitur purus scelerisque. In in hendrerit nunc. es, nascetur ridiculus mus.",
      employer: "Microsoft",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      links: {
        facebook: "https://bing.com",
        twitter: "https://google.com",
        websites: ["https://microsoft.com"],
      },
    },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt laoreet dui, ac vulputate tortor porttitor non. Mauris iaculis turpis vitae augue vestibulum commodo. Praesent sit amet augue massa. Nam maximus mauris sed eros facilisis, quis efficitur purus scelerisque. In in hendrerit nunc. es, nascetur ridiculus mus.",
  location: "1134 NE Washington St #302\nPortland, OR 97006",
}

export interface ScheduleScreenProps extends NavigationScreenProps<{}> {}

export class ScheduleScreen extends React.Component<
  ScheduleScreenProps,
  { selected: "wednesday" | "thursday" | "friday" }
> {
  state = {
    selected: getSelectedDay(),
  }
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Screen preset="fixed" backgroundColor={palette.portGore} style={ROOT}>
        <Text preset="title" tx="scheduleScreen.title" />
        <ScrollView style={{ flex: 1, width: "100%" }}>{this.renderContent()}</ScrollView>
        <ScheduleNav selected={this.state.selected} onSelected={this.onSelected} />
      </Screen>
    )
  }

  renderContent = () => {
    return (
      <View>
        <ScheduleCell
          index={0}
          talk={TALK}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
        />
        <ScheduleCell
          index={1}
          talk={WORKSHOP}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
        />
      </View>
    )
  }

  onSelected = selected => {
    this.setState({ selected })
  }
}

const getSelectedDay = (): "wednesday" | "thursday" | "friday" => {
  const date = new Date()
  if (isThursday(date)) return "thursday"
  if (isFriday(date)) return "friday"
  return "wednesday"
}
