import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { Rating } from "./rating"

storiesOf("Rating", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Props", () => (
    <Story>
      <UseCase text="default">
        <Rating />
      </UseCase>
      <UseCase text="1 star">
        <Rating rating={1} />
      </UseCase>
      <UseCase text="2 star">
        <Rating rating={2} />
      </UseCase>
      <UseCase text="3 star">
        <Rating rating={3} />
      </UseCase>
      <UseCase text="4 star">
        <Rating rating={4} />
      </UseCase>
      <UseCase text="5 star">
        <Rating rating={5} />
      </UseCase>
    </Story>
  ))
