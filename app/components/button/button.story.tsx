import * as React from "react"
import { Alert } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { Button } from "./"

storiesOf("Button", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary button.">
        <Button text="Click It" preset="primary" onPress={() => Alert.alert("pressed")} />
      </UseCase>
      <UseCase text="Disabled" usage="The disabled behaviour of the primary button.">
        <Button text="Click It" preset="primary" onPress={() => Alert.alert("pressed")} disabled />
      </UseCase>
      <UseCase text="Styled Dark Button" usage="The dark preset.">
        <Button text="Click It" preset="dark" onPress={() => Alert.alert("pressed")} />
      </UseCase>
      <UseCase text="Clickable Text" usage="For in-line links">
        <Button text="Click It" preset="link" onPress={() => Alert.alert("pressed")} />
      </UseCase>
    </Story>
  ))
