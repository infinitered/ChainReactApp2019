import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { ScheduleNav } from "./schedule-nav"

const onSelected = (selected: string) =>
  void storiesOf("ScheduleNav", module)
    .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
    .add("Presets", () => (
      <Story>
        <UseCase text="ScheduleNav" usage="wednesday" noPad>
          <ScheduleNav selected="wednesday" onSelected={onSelected} />
        </UseCase>
        <UseCase text="ScheduleNav" usage="thursday" noPad>
          <ScheduleNav selected="thursday" onSelected={onSelected} />
        </UseCase>
        <UseCase text="ScheduleNav" usage="friday" noPad>
          <ScheduleNav selected="friday" onSelected={onSelected} />
        </UseCase>
      </Story>
    ))
