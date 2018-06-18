import * as React from "react"
import { View, ViewStyle, ScrollView } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Text } from "../../shared/text"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { TalkStore } from "../../../models/talk-store"
import { isThursday, isFriday } from "date-fns"
import { ScheduleNav } from "./schedule-nav"
import { ScheduleCell } from "./schedule-cell"
import { inject, observer } from "mobx-react"

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

const COFFEE = {
  type: "break",
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title: "Coffee Break",
  sponsor: "QuickLeft Studio",
  description:
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Nullam id dolor id nibsdflkj.",
}

const LUNCH = {
  type: "lunch",
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title: "Lunch Break",
  sponsor: "QuickLeft Studio",
  description:
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Nullam id dolor id nibsdflkj.",
  menuItems: ["Black Forest Ham", "Vegan Option", "Pita Chips", "Premium Coffee", "Soft Drinks"],
}

const AFTER_PARTY = {
  type: "afterParty",
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title: "SquareSpace After Party",
  description:
    "Join us after the first day for an afterparty hosted by our good friends at Squarespace. Lorem Ipsum dolor sit amet lorem.",
  location: "11134 Washington St #302\nPortland, OR 97006",
  rsvpWebsite: "https://bing.com",
}

export interface ScheduleScreenProps extends NavigationScreenProps<{}> {
  talkStore: TalkStore
}

@inject("talkStore")
@observer
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

  componentWillMount() {
    const { talkStore } = this.props
    talkStore && talkStore.getAll()
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
    const { talkStore: { talks } } = this.props
    return (
      <View>
        {talks &&
          talks.map((talk, i) => (
            <ScheduleCell
              index={i}
              talk={talk}
              onPress={talk => {
                this.props.navigation.navigate("talkDetails", { talk })
              }}
            />
          ))}
        <ScheduleCell
          index={1}
          talk={WORKSHOP}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
        />
        <ScheduleCell
          index={2}
          talk={COFFEE}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
        />
        <ScheduleCell
          index={3}
          talk={LUNCH}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
        />
        <ScheduleCell
          index={4}
          talk={AFTER_PARTY}
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
