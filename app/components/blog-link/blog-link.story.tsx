import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { BlogLink } from "./blog-link"

storiesOf("Code of Blog Link")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Blog Link" noBackground noPad>
        <BlogLink />
      </UseCase>
    </Story>
  ))
