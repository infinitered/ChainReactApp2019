import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { TravelOption } from "./travel-option"

storiesOf("TravelOption", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="TravelOption" usage="rideShare" noPad>
        <TravelOption preset="rideShare" />
      </UseCase>
      <UseCase text="TravelOption" usage="massTransit" noPad>
        <TravelOption preset="massTransit" />
      </UseCase>
    </Story>
  ))
