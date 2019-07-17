import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { GettingToChainReact } from "./getting-to-chain-react"

storiesOf("GettingToChainReact", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="GettingToChainReact" noPad>
        <GettingToChainReact />
      </UseCase>
    </Story>
  ))
