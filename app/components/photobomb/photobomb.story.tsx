import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Photobomb } from "./photobomb"

storiesOf("Code of Photobomb")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Photobomb" noBackground noPad>
        <Photobomb />
      </UseCase>
    </Story>
  ))
