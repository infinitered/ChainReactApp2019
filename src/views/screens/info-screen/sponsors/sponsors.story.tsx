import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../storybook/views"
import { Sponsors } from "./sponsors"

storiesOf("Sponsors")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Sponsors" noBackground noPad>
        <Sponsors />
      </UseCase>
    </Story>
  ))
