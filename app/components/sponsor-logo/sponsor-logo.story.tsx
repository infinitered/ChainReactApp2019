import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { SponsorLogo } from "./sponsor-logo"

storiesOf("SponsorLogo", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="Platinum Sponsor" noBackground>
        <SponsorLogo size="platinum" sponsor="alexa" />
      </UseCase>
      <UseCase text="Gold Sponsor" noBackground>
        <SponsorLogo size="gold" sponsor="callstack" />
      </UseCase>
      <UseCase text="Silver Sponsor" noBackground>
        <SponsorLogo size="silver" sponsor="bugsnag" />
      </UseCase>
      <UseCase text="Bronze Sponsor" noBackground>
        <SponsorLogo size="bronze" sponsor="cambia" />
      </UseCase>
      <UseCase text="Additional Sponsor" noBackground>
        <SponsorLogo size="additional" sponsor="g2iAdditional" />
      </UseCase>
    </Story>
  ))
