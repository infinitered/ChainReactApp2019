import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { BlogLink } from "./blog-link"

storiesOf("Code of Blog Link", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Blog Link" noPad>
        <BlogLink />
      </UseCase>
    </Story>
  ))
