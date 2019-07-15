import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { SocialButton } from "./social-button"

storiesOf("SocialButton", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Presets", () => (
    <Story>
      <UseCase text="default" usage="Social button without preset">
        <SocialButton link={"https://infinite.red"} />
      </UseCase>
      <UseCase text="website" usage="Social button with website preset">
        <SocialButton preset="website" link={"https://infinite.red"} />
      </UseCase>
      <UseCase text="twitter" usage="Social button with twitter preset">
        <SocialButton preset="twitter" link={"https://twitter.com/infinite_red"} />
      </UseCase>
      <UseCase text="github" usage="Social button with github preset">
        <SocialButton preset="github" link={"https://github.com/infinitered"} />
      </UseCase>
      <UseCase text="medium" usage="Social button with medium preset">
        <SocialButton preset="medium" link={"https://shift.infinite.red"} />
      </UseCase>
      <UseCase text="dribbble" usage="Social button with dribbble preset">
        <SocialButton preset="dribbble" link={"https://dribbble.com/infinitered"} />
      </UseCase>
      <UseCase text="instagram" usage="Social button with instagram preset">
        <SocialButton preset="instagram" link={"https://instagram.com/infinitered_designers"} />
      </UseCase>
      <UseCase text="facebook" usage="Social button with facebook preset">
        <SocialButton preset="facebook" link={"https://facebook.com/infiniteredinc"} />
      </UseCase>
    </Story>
  ))
