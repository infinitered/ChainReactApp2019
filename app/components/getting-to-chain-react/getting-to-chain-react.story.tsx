import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { GettingToChainReact } from "./getting-to-chain-react"

storiesOf("GettingToChainReact")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="GettingToChainReact" noBackground noPad>
        <GettingToChainReact />
      </UseCase>
    </Story>
  ))
