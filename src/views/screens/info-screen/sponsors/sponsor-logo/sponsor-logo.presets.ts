import { ImageStyle } from "react-native"
/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
const BASE: ImageStyle = {
  flex: 1,
  resizeMode: "center",
}
export const SponsorLogoSizePresets = {
  platinum: { ...BASE, width: 258, height: 36, alignSelf: "center" } as ImageStyle,
  gold: { ...BASE },
  silver: { ...BASE },
  bronze: { ...BASE },
  additional: { ...BASE },
}

export const SponsorLogoPresets = {
  squarespace: require("./logo.sponsor.squarespace.png"),
  gold: require("./logo.sponsor.gold.png"),
}
