import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { Photobomb } from "./photobomb"

storiesOf("Code of Photobomb", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Photobomb" noPad>
        <Photobomb />
      </UseCase>
    </Story>
  ))
