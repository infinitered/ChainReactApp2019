import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../storybook/views"
import { ScheduleCell } from "./schedule-cell"

const talk: any = {
  id: {},
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title: "World's Coolest Talk",
  description: "Talk description about things and stuff.",
  image: "https://pbs.twimg.com/profile_images/985388996011405312/O6rB4xNM_400x400.jpg",
  speakers: [{ name: "Ken Wheeler" }],
  talkType: "TALK",
}

const workshop: any = {
  id: {},
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title: "World's Coolest Talk",
  description: "Talk description about things and stuff.",
  image: "https://pbs.twimg.com/profile_images/985388996011405312/O6rB4xNM_400x400.jpg",
  track: "TRACK 2",
  speakers: [{ name: "Ken Wheeler" }],
  talkType: "WORKSHOP",
}

const breakTalk: any = {
  id: {},
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title: "Break",
  description: "",
  speakers: [],
  talkType: "BREAK",
}

const afterparty: any = {
  id: {},
  startTime: new Date("2018-07-13T16:00:00Z"),
  endTime: new Date("2018-07-13T17:00:00Z"),
  title: "SquareSpace Afterparty",
  description: "Join us for an afterparty sponsored by SquareSpace!",
  image: "https://pbs.twimg.com/profile_images/839854654636752896/yZ6aVelI_400x400.jpg",
  speakers: [],
  action: "http://www.twitter.com/squarespace",
  talkType: "AFTERPARTY",
}

const noop = () =>
  void storiesOf("ScheduleCell")
    .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
    .add("Presets", () => (
      <Story>
        <UseCase text="ScheduleCell" usage="odd" noBackground noPad>
          <ScheduleCell index={0} talk={talk} onPress={noop} />
        </UseCase>
        <UseCase text="ScheduleCell" usage="even" noBackground noPad>
          <ScheduleCell index={1} talk={talk} onPress={noop} />
        </UseCase>
        <UseCase text="ScheduleCell" usage="break" noBackground noPad>
          <ScheduleCell index={0} talk={breakTalk} preset="break" onPress={noop} />
        </UseCase>
        <UseCase text="ScheduleCell" usage="workshop" noBackground noPad>
          <ScheduleCell index={0} talk={workshop} onPress={noop} />
        </UseCase>
        <UseCase text="ScheduleCell" usage="afterparty" noBackground noPad>
          <ScheduleCell index={0} talk={afterparty} preset="afterparty" onPress={noop} />
        </UseCase>
      </Story>
    ))
