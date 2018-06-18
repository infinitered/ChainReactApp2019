import { ImageStyle } from "react-native"
import { spacing } from "../../../../../theme"
/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
const BASE: ImageStyle = {
  flex: 1,
  resizeMode: "contain",
  alignSelf: "center",
  width: 100,
  height: 40,
  margin: spacing.small,
}

export const sponsorLogoSizePresets = {
  platinum: { ...BASE, width: 335, height: 134, margin: 0 } as ImageStyle,
  gold: { ...BASE, width: 135, height: 60 },
  silver: { ...BASE },
  bronze: { ...BASE },
  additional: { ...BASE, height: 60 },
}

export const sponsors = {
  g2iAdditional: require("./Additional_G2i.png"),
  modusAdditional: require("./Additional_Modus.png"),
  playstationAdditional: require("./Additional_Playstation.png"),
  squarespaceAdditional: require("./Additional_Squarespace.png"),
  blueJeans: require("./Bronze_BlueJeans.png"),
  echobind: require("./Bronze_Echobind.png"),
  g2i: require("./Bronze_G2i.png"),
  microsoft: require("./Bronze_Microsoft.png"),
  modus: require("./Bronze_Modus.png"),
  paypal: require("./Bronze_Paypal.png"),
  wix: require("./Bronze_Wix.png"),
  agora: require("./Gold_Agora.png"),
  amazon: require("./Gold_AmazonAWS.png"),
  formidable: require("./Gold_Formidable.png"),
  taxslayer: require("./Gold_Taxslayer.png"),
  viro: require("./Gold_Viro.png"),
  bugsnag: require("./Silver_Bugsnag.png"),
  builderX: require("./Silver_BuilderX.png"),
  callstack: require("./Silver_Callstack.png"),
  cambia: require("./Silver_Cambia.png"),
  rnTraining: require("./Silver_RN-Training.png"),
  sentry: require("./Silver_Sentry.png"),
  squarespace: require("./Platinum_Squarespacce.png"),
}

export type SponsorLogoSizePresetNames = keyof typeof sponsorLogoSizePresets
export type SponsorNames = keyof typeof sponsors
