import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../../../../storybook/views"
import { Rating } from "./rating"

storiesOf("Rating")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Props", () => (
    <Story>
      <UseCase text="default" noBackground>
        <Rating />
      </UseCase>
      <UseCase text="1 star" noBackground>
        <Rating rating={1} />
      </UseCase>
      <UseCase text="2 star" noBackground>
        <Rating rating={2} />
      </UseCase>
      <UseCase text="3 star" noBackground>
        <Rating rating={3} />
      </UseCase>
      <UseCase text="4 star" noBackground>
        <Rating rating={4} />
      </UseCase>
      <UseCase text="5 star" noBackground>
        <Rating rating={5} />
      </UseCase>
    </Story>
  ))
