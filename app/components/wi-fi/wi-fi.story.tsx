import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { WiFi } from "./wi-fi"

storiesOf("WiFi", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="WiFi" noPad>
        <WiFi />
      </UseCase>
    </Story>
  ))
