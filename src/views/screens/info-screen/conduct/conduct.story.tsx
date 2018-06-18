import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../storybook/views"
import { Conduct } from "./conduct"

storiesOf("Code of Conduct")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Conduct" noBackground noPad>
        <Conduct />
      </UseCase>
    </Story>
  ))
