import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../../../storybook/views"
import { SocialButton } from "./social-button"

storiesOf("SocialButton")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="default" usage="Social button without preset" noBackground>
        <SocialButton />
      </UseCase>
      <UseCase text="website" usage="Social button with website preset" noBackground>
        <SocialButton preset="website" />
      </UseCase>
      <UseCase text="twitter" usage="Social button with twitter preset" noBackground>
        <SocialButton preset="twitter" />
      </UseCase>
      <UseCase text="github" usage="Social button with github preset" noBackground>
        <SocialButton preset="github" />
      </UseCase>
      <UseCase text="medium" usage="Social button with medium preset" noBackground>
        <SocialButton preset="medium" />
      </UseCase>
      <UseCase text="dribbble" usage="Social button with dribbble preset" noBackground>
        <SocialButton preset="dribbble" />
      </UseCase>
      <UseCase text="instagram" usage="Social button with instagram preset" noBackground>
        <SocialButton preset="instagram" />
      </UseCase>
      <UseCase text="facebook" usage="Social button with facebook preset" noBackground>
        <SocialButton preset="facebook" />
      </UseCase>
    </Story>
  ))
