import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Attraction } from "./attraction"

storiesOf("Attraction")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Props", () => (
    <Story>
      <UseCase text="Simple attraction" noBackground>
        <Attraction
          attraction={{
            type: "Feature",
            properties: {
              place_address: "923 SW Oak St, Portland, Oregon 97205, United States",
              place_name: "Courier Coffee",
              place_link: "https://goo.gl/maps/gbsekFfSM492",
              place_description:
                "Using house-roasted, single-origin beans, this snug place offers espresso drinks & pour-overs.",
              rating: 5,
            },
            geometry: {
              coordinates: [-122.680727, 45.5227],
              type: "Point",
            },
            id: "address.14953474269115020",
          }}
        />
      </UseCase>
    </Story>
  ))
