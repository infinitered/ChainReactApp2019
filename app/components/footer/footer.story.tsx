import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Footer } from "./footer"
import { Text } from "../text"

storiesOf("Footer")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="default" usage="Footer" noBackground noPad>
        <Footer />
      </UseCase>
      <UseCase text="default" usage="Footer with content" noBackground noPad>
        <Footer>
          <Text preset="body" text="Footer Content" />
        </Footer>
      </UseCase>
    </Story>
  ))
