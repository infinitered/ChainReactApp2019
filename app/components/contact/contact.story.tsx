import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Contact } from "./contact"

storiesOf("Code of Conduct - Contact", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Conduct" noBackground noPad>
        <Contact email="fake@email.com" twitter="fake" phoneNumber="5555555555" />
      </UseCase>
    </Story>
  ))
