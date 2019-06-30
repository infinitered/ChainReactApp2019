import { storiesOf } from "@storybook/react-native"
import * as React from "react"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { BackButton } from "./back-button"

storiesOf("BackButton", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Blog Link" noBackground noPad>
        <BackButton backTitle="SCHEDULE" />
      </UseCase>
    </Story>
  ))
