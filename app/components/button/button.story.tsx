import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Button } from "./"

storiesOf("Button")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary button.">
        <Button text="Click It" preset="primary" onPress={() => window.alert("pressed")} />
      </UseCase>
      <UseCase text="Disabled" usage="The disabled behaviour of the primary button.">
        <Button text="Click It" preset="primary" onPress={() => window.alert("pressed")} disabled />
      </UseCase>
      <UseCase text="Styled Dark Button" usage="The dark preset.">
        <Button text="Click It" preset="dark" onPress={() => window.alert("pressed")} />
      </UseCase>
    </Story>
  ))
