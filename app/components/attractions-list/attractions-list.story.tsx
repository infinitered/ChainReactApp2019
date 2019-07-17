import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { AttractionsList } from "./attractions-list"

storiesOf("AttractionsList", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Props", () => (
    <Story>
      <UseCase text="default">
        <AttractionsList />
      </UseCase>
    </Story>
  ))
