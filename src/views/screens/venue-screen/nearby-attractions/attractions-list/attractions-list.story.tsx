import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../../storybook/views"
import { AttractionsList } from "./attractions-list"

storiesOf("AttractionsList")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Props", () => (
    <Story>
      <UseCase text="default" noBackground>
        <AttractionsList />
      </UseCase>
    </Story>
  ))
