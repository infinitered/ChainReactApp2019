import * as React from "react"
import { View, ViewStyle, ScrollView, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
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
    // Header Style is necessary to prevent ugly white header when navigating back to this screen from a child screen
    headerStyle: {
      backgroundColor: color.palette.portGore,
      borderBottomWidth: 0,
    },
  }

  componentWillMount() {
    const { talkStore } = this.props
    talkStore && talkStore.getAll()
  }

  render() {
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
    const { talks } = this.props.talkStore
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
    const { talks } = this.props.talkStore

    const workshops = talks.filter(talk => {
      return isWednesday(talk.startTime)
    })
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

const getSelectedDay = (): "wednesday" | "thursday" | "friday" => {
  const date = new Date()
  if (isThursday(date)) return "thursday"
  if (isFriday(date)) return "friday"
  return "wednesday"
}
