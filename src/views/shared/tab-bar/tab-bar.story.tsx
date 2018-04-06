import * as React from "react"
import { Animated } from "react-native"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { TabBar } from "./tab-bar"

const navigation = {
  state: {
    routes: [{ routeName: "schedule" }, { routeName: "venue" }, { routeName: "info" }],
  },
}

const props = {
  activeTintColor: "white",
  inactiveTintColor: "white",
  position: new Animated.Value(0),
  navigation,
}

storiesOf("TabBar")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Behaviour", () => (
    <Story>
      <UseCase text="The TabBar" usage="The main tab bar in the app." noPad>
        <TabBar {...props} />
      </UseCase>
    </Story>
  ))
