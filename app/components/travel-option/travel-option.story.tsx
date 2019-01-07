import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { TravelOption } from "./travel-option"

storiesOf("TravelOption")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="TravelOption" usage="rideShare" noBackground noPad>
        <TravelOption preset="rideShare" />
      </UseCase>
      <UseCase text="TravelOption" usage="massTransit" noBackground noPad>
        <TravelOption preset="massTransit" />
      </UseCase>
    </Story>
  ))
