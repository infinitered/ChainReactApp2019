import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { GerdingTheater } from "./gerding-theater"

storiesOf("GerdingTheater")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="GerdingTheater" noBackground noPad>
        <GerdingTheater />
      </UseCase>
    </Story>
  ))
