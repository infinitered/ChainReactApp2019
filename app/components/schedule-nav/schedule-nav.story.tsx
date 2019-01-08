import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { ScheduleNav } from "./schedule-nav"

const onSelected = (selected: string) =>
  void storiesOf("ScheduleNav")
    .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
    .add("Presets", () => (
      <Story>
        <UseCase text="ScheduleNav" usage="wednesday" noBackground noPad>
          <ScheduleNav selected="wednesday" onSelected={onSelected} />
        </UseCase>
        <UseCase text="ScheduleNav" usage="thursday" noBackground noPad>
          <ScheduleNav selected="thursday" onSelected={onSelected} />
        </UseCase>
        <UseCase text="ScheduleNav" usage="friday" noBackground noPad>
          <ScheduleNav selected="friday" onSelected={onSelected} />
        </UseCase>
      </Story>
    ))
