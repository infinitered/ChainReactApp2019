import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { BulletItem } from "./bullet-item"

storiesOf("Code of BulletItem")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="BulletItem" noBackground noPad>
        <BulletItem text="This is a bullet item" />
      </UseCase>
    </Story>
  ))
