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
  margin: spacing.small,
}

export const sponsorLogoSizePresets = {
  platinum: {
    ...BASE,
    width: "100%",
    maxHeight: 135,
    marginVertical: spacing.medium,
  } as ImageStyle,
  gold: { ...BASE, height: 75, maxWidth: "50%" },
  silver: { ...BASE, height: 50, maxWidth: "35%" },
  bronze: { ...BASE, maxHeight: 35, maxWidth: "30%" },
  additional: { ...BASE, height: 60 },
}

export const sponsors = {
  devLifts: require("./logos/Additional_DevLifts_Streches.png"),
  g2iAdditional: require("./logos/Additional_G2i.png"),
  playstation: require("./logos/Additional_Playstation_Wifi.png"),
  squarespace: require("./logos/Additional_SquarespaceBadges.png"),
  airship: require("./logos/Bronze_Airship.png"),
  builderX: require("./logos/Bronze_BuilderX.png"),
  cambia: require("./logos/Bronze_Cambia.png"),
  echobind: require("./logos/Bronze_Echobind.png"),
  facebook: require("./logos/Bronze_Facebook.png"),
  g2i: require("./logos/Bronze_G2i.png"),
  amazonWeb: require("./logos/Silver_AmazonWebService.png"),
  bugsnag: require("./logos/Silver_Bugsnag.png"),
  serverlessGuru: require("./logos/Silver_ServerlessGuru.png"),
  callstack: require("./logos/Gold_Callstack.png"),
  coinbase: require("./logos/Gold_Coinbase.png"),
  sentry: require("./logos/Gold_Sentry.png"),
  alexa: require("./logos/Platinum_Amazon_Alexa.png"),
  aws: require("./logos/Platinum_AWS.png"),
}

export type SponsorLogoSizePresetNames = keyof typeof sponsorLogoSizePresets
export type SponsorNames = keyof typeof sponsors
