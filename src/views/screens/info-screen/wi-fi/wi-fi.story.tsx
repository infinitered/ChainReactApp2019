import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../storybook/views"
import { WiFi } from "./wi-fi"

storiesOf("WiFi")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="WiFi" noBackground noPad>
        <WiFi />
      </UseCase>
    </Story>
  ))
