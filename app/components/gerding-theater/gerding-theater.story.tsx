import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { GerdingTheater } from "./gerding-theater"

storiesOf("GerdingTheater", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="GerdingTheater" noPad>
        <GerdingTheater />
      </UseCase>
    </Story>
  ))
