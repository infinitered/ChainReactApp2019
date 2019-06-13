import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { ContentLink } from "./content-link"

storiesOf("Code of ContentLink")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="ContentLink" noBackground noPad>
        <ContentLink
          onPressLink={() => null}
          bodyTx="infoScreen.photobomb.title"
          headerTx="infoScreen.photobomb.description"
          buttonTx="infoScreen.photobomb.button"
        />
      </UseCase>
    </Story>
  ))
