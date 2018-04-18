import * as React from "react"
import { View, ViewStyle, Image, ImageStyle, TextStyle, Linking } from "react-native"
import { ScheduleCellPresets } from "./schedule-cell.presets"
import { ScheduleCellProps } from "./schedule-cell.props"
import { Text } from "../../../shared/text"
import { Button } from "../../../shared/button"
import { palette } from "../../../../theme/palette"
import { format } from "date-fns"
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export class ScheduleCell extends React.Component<ScheduleCellProps, {}> {
  render() {
    const { preset, index, talk } = this.props
    const style: any = ScheduleCellPresets[preset] || ScheduleCellPresets.default
    const isOdd = index % 2 === 0 // index starts at 0
    return (
      <View style={[style.root as ViewStyle, isOdd && { backgroundColor: palette.portGoreLight }]}>
        <View style={style.timeWrapper as ViewStyle}>
          {talk.track && <Text preset="label" text={talk.track} style={style.track} />}
          <Text
            preset="label"
            text={`${format(talk.startTime, "h:mm A")} - ${format(talk.endTime, "h:mm A")}`}
            style={style.time as TextStyle}
          />
        </View>
        <View style={style.contentWrapper as ViewStyle}>
          <View style={style.imageWrapper as ViewStyle}>
            {talk.image && <Image source={{ uri: talk.image }} style={style.image as ImageStyle} />}
          </View>
          <View style={style.content as ViewStyle}>
            <Text preset="subheader" text={talk.title} style={style.title as TextStyle} />
            {talk.speakers &&
              talk.speakers[0] &&
              talk.speakers[0].name && (
                <Text
                  preset="subheader"
                  text={talk.speakers[0].name}
                  style={style.speaker as TextStyle}
                />
              )}
            {preset === "afterparty" && (
              <Text preset="subheader" text={talk.description} style={style.speaker as TextStyle} />
            )}
            {preset === "afterparty" &&
              talk.action && (
                <Button
                  text="RSVP Now"
                  preset="primary"
                  onPress={() => Linking.openURL(talk.action)}
                  style={style.button}
                  textStyle={style.buttonText}
                />
              )}
          </View>
        </View>
      </View>
    )
  }
}
