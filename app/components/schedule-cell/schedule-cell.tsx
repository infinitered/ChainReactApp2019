import * as React from "react"
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextStyle,
  TouchableWithoutFeedback,
  Animated,
} from "react-native"
import { ScheduleCellPresets } from "./schedule-cell.presets"
import { ScheduleCellProps } from "./schedule-cell.props"
import { Text } from "../text"
import { palette } from "../../theme"
import { formatToTimeZone } from "date-fns-timezone"
import { TIMEZONE } from "../../utils/info"

export class ScheduleCell extends React.Component<ScheduleCellProps, {}> {
  state = { animatedSize: new Animated.Value(1) }

  handlePressIn = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start()
  }

  handlePressOut = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start()
  }

  render() {
    const { preset, index, talk, onPress, noTime } = this.props
    const style: any = ScheduleCellPresets[preset] || ScheduleCellPresets.default
    const isOdd = index % 2 === 0 // index starts at 0
    const speakerName = talk.speakers.map(s => s.name).join(", ")
    if (!talk) return null
    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        onPress={() => onPress(this.props.talk)}
      >
        <Animated.View
          style={[
            style.root as ViewStyle,
            { transform: [{ scale: this.state.animatedSize }] },
            isOdd && { backgroundColor: palette.portGoreLighter },
          ]}
        >
          {noTime ? this.renderTopBorder() : this.renderTime()}
          <View style={style.contentWrapper as ViewStyle}>
            <View style={style.imageWrapper as ViewStyle}>{this.renderImage()}</View>
            <View style={style.content as ViewStyle}>
              <Text preset="subheader" text={talk.title} style={style.title as TextStyle} />
              {talk.speakers && talk.speakers.length > 0 && talk.speakers[0].name && (
                <Text preset="subheader" text={speakerName} style={style.speaker as TextStyle} />
              )}
              {preset === "afterparty" && (
                <Text
                  preset="subheader"
                  text={talk.description}
                  style={style.speaker as TextStyle}
                />
              )}
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  renderTopBorder = () => {
    return <View style={{ width: "100%", backgroundColor: palette.mantiniqueLight, height: 1 }} />
  }

  renderTime = () => {
    const { preset, talk } = this.props
    const style: any = ScheduleCellPresets[preset] || ScheduleCellPresets.default
    const label = `${formatToTimeZone(talk.startTime, "h:mm A", {
      timeZone: TIMEZONE,
    })} - ${formatToTimeZone(talk.endTime, "h:mm A", { timeZone: TIMEZONE })}`
    return (
      <View style={style.timeWrapper as ViewStyle}>
        {talk.track && talk.track !== "NONE" && (
          <Text preset="label" text={talk.track} style={style.track} />
        )}
        <Text preset="label" text={label} style={style.time as TextStyle} />
      </View>
    )
  }

  renderImage = () => {
    const {
      preset,
      talk: { sponsor, talkType, speakers },
      talk,
    } = this.props
    const style: any = ScheduleCellPresets[preset] || ScheduleCellPresets.default
    let image = null
    const talkTypeLower = talkType ? talkType.toLowerCase() : ""

    if (talkTypeLower === "panel") {
      image = require("./images/panelist.png")
    } else if (talkTypeLower === "afterparty") {
      if (sponsor === "G2i") image = require("./images/afterparty-G2i.png")
      if (sponsor === "Bumped") image = require("./images/sponsor-bumped.png")
    } else if (talkTypeLower === "break") {
      image = require("./images/coffee-small.png")
    } else if (["talk", "workshop", "welcome", "goodbye"].includes(talkTypeLower)) {
      image = speakers && speakers[0] && speakers[0].image ? { uri: speakers[0].image } : null
    } else if (talkTypeLower === "lunch") {
      image = require("./images/lunch.png")
    } else if (talkTypeLower === "breakfast") {
      image = require("./images/registration.png")
    } else {
      if (talk.image) image = { uri: talk.image }
    }
    if (image) {
      return <Image source={image} style={style.image as ImageStyle} />
    } else {
      return null
    }
  }
}
