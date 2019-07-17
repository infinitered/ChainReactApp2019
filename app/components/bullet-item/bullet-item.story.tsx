import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { BulletItem } from "./bullet-item"

storiesOf("Code of BulletItem", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="BulletItem" noPad>
        <BulletItem text="This is a bullet item" />
      </UseCase>
    </Story>
  ))
