import * as React from "react"
import { View, ViewStyle, ScrollView, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { graphql } from "react-apollo"
import { Text } from "../../components/text"
import { Screen } from "../../components/screen"
import { color, spacing } from "../../theme"
import { TalkStore } from "../../models/talk-store"
import { isWednesday, isThursday, isFriday } from "date-fns"
import { ScheduleNav } from "../../components/schedule-nav"
import { ScheduleCell } from "../../components//schedule-cell"
import { inject, observer } from "mobx-react"
import { ScheduleCellPresetNames } from "../../components//schedule-cell/schedule-cell.presets"
import { Talk } from "../../models/talk"
import { listTalks as ListTalks } from "../../graphql/queries"

const ROOT: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-start",
}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  paddingHorizontal: spacing.large,
}
const SUBTITLE: TextStyle = {
  color: color.palette.white,
  fontWeight: "600",
  paddingHorizontal: spacing.large,
  marginTop: spacing.small,
}
const DATE: TextStyle = {
  fontStyle: "italic",
  fontWeight: "400",
  paddingHorizontal: spacing.large,
  marginBottom: spacing.small + spacing.large,
}

interface ScheduleScreenProps extends NavigationScreenProps<{}> {
  talkStore: TalkStore
}

// @inject("talkStore")
// @observer
class ScheduleScreenConsumer extends React.Component<
  ScheduleScreenProps,
  { selected: "wednesday" | "thursday" | "friday" }
> {
  state = {
    selected: getSelectedDay(),
  }
  static navigationOptions = {
    header: null,
    // Header Style is necessary to prevent ugly white header when navigating back to this screen from a child screen
    headerStyle: {
      backgroundColor: color.palette.portGore,
      borderBottomWidth: 0,
      paddingLeft: spacing.large + spacing.tiny,
    },
  }

  // componentWillMount() {
  //   const { talkStore } = this.props
  //   talkStore && talkStore.getAll()
  // }

  render() {
    console.log("props:", this.props)
    const { selected } = this.state
    return (
      <Screen preset="fixed" backgroundColor={color.palette.portGore} style={ROOT}>
        <ScrollView style={{ flex: 1, width: "100%" }} key={`${selected}-scrollview`}>
          <Text preset="title" tx="scheduleScreen.title" style={TITLE} />
          {selected === "wednesday" ? this.renderWorkshops() : this.renderContent()}
        </ScrollView>
        <ScheduleNav selected={this.state.selected} onSelected={this.onSelected} />
      </Screen>
    )
  }

  renderTalk = (talk, index: number) => {
    console.log("renderTalk called...")
    const talkType = talk.talkType.toLowerCase()
    const cellPreset: ScheduleCellPresetNames =
      talkType === "break" || talkType === "afterparty" ? talkType : "default"
    console.log("this is a talk item::::::: ", talk)
    return (
      <ScheduleCell
        index={index}
        talk={talk}
        preset={cellPreset}
        onPress={(talk: Talk) => {
          this.props.navigation.navigate("talkDetails", { talk })
        }}
        key={index}
      />
    )
  }

  renderContent = () => {
    const { talks } = this.props
    console.log("talks:", talks)
    const { selected } = this.state
    const selectedTalks = talks.filter(talk => {
      return selected === "thursday" ? isThursday(talk.startTime) : isFriday(talk.startTime)
    })
    return (
      <View>
        <Text
          tx={`scheduleScreen.${selected === "thursday" ? "day1" : "day2"}`}
          style={SUBTITLE}
          preset="subheader"
        />
        <Text
          tx={`scheduleScreen.${selected === "thursday" ? "day1" : "day2"}Date`}
          style={DATE}
          preset="label"
        />
        {selectedTalks && selectedTalks.map(this.renderTalk)}
      </View>
    )
  }

  renderWorkshops = () => {
    const { talks } = this.props

    const workshops = talks.filter(talk => {
      return isWednesday(talk.startTime)
    })
    console.log("workshops:", workshops)
    return (
      <View>
        <Text tx="scheduleScreen.workshops" style={SUBTITLE} preset="subheader" />
        <Text tx="scheduleScreen.workshopsDate" style={DATE} preset="label" />
        <ScheduleCell
          index={0}
          talk={{ ...workshops[0], track: "BEGINNER" }}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
        />
        <ScheduleCell
          index={1}
          talk={{ ...workshops[1], track: "ADVANCED" }}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
        />
        <ScheduleCell
          index={1}
          talk={workshops[2]}
          onPress={talk => {
            this.props.navigation.navigate("talkDetails", { talk })
          }}
          noTime
        />
      </View>
    )
  }

  onSelected = selected => {
    this.setState({ selected })
  }
}

const ScheduleScreen = graphql(ListTalks, {
  options: {
    fetchPolicy: "network-only",
  },
  props: props => {
    let talks = []
    if (props.data.listTalks) {
      talks = props.data.listTalks.items.map(t => {
        if (t.speakers && t.speakers.items) {
          t.speakers = t.speakers.items
        }
        return t
      })
    }
    return {
      talks,
    }
  },
})(ScheduleScreenConsumer)

export { ScheduleScreen }

const getSelectedDay = (): "wednesday" | "thursday" | "friday" => {
  const date = new Date()
  if (isThursday(date)) return "thursday"
  if (isFriday(date)) return "friday"
  return "wednesday"
}
