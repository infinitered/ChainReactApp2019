import { ImageStyle } from "react-native"
import { spacing } from "../../theme"
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
  maxHeight: 51,
  margin: spacing.small,
}

export const sponsorLogoSizePresets = {
  platinum: { ...BASE, width: 335, height: 134, margin: 0 } as ImageStyle,
  gold: { ...BASE, width: 135, maxHeight: 60 },
  silver: { ...BASE },
  bronze: { ...BASE },
  additional: { ...BASE, maxHeight: 60 },
}

export const sponsors = {
  g2iAdditional: require("./logos/Additional_G2i.png"),
  modusAdditional: require("./logos/Additional_Modus.png"),
  playstationAdditional: require("./logos/Additional_Playstation.png"),
  squarespaceAdditional: require("./logos/Additional_Squarespace.png"),
  blueJeans: require("./logos/Bronze_BlueJeans.png"),
  echobind: require("./logos/Bronze_Echobind.png"),
  g2i: require("./logos/Bronze_G2i.png"),
  microsoft: require("./logos/Bronze_Microsoft.png"),
  modus: require("./logos/Bronze_Modus.png"),
  paypal: require("./logos/Bronze_Paypal.png"),
  wix: require("./logos/Bronze_Wix.png"),
  agora: require("./logos/Gold_Agora.png"),
  amazon: require("./logos/Gold_AmazonAWS.png"),
  formidable: require("./logos/Gold_Formidable.png"),
  taxslayer: require("./logos/Gold_Taxslayer.png"),
  viro: require("./logos/Gold_Viro.png"),
  bugsnag: require("./logos/Silver_Bugsnag.png"),
  builderX: require("./logos/Silver_BuilderX.png"),
  callstack: require("./logos/Silver_Callstack.png"),
  cambia: require("./logos/Silver_Cambia.png"),
  rnTraining: require("./logos/Silver_RN-Training.png"),
  sentry: require("./logos/Silver_Sentry.png"),
  squarespace: require("./logos/Platinum_Squarespacce.png"),
}

export type SponsorLogoSizePresetNames = keyof typeof sponsorLogoSizePresets
export type SponsorNames = keyof typeof sponsors
