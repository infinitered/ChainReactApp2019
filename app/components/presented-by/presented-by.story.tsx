import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { PresentedBy } from "./presented-by"

storiesOf("PresentedBy", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="default" usage="Presented By Section" noPad>
        <PresentedBy />
      </UseCase>
    </Story>
  ))
