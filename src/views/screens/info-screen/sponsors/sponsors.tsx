import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../../../shared/text"
import { spacing } from "../../../../theme/spacing"
import { palette } from "../../../../theme/palette"
import { SponsorLogo } from "./sponsor-logo"

const ROOT: ViewStyle = {
  marginTop: spacing.huge,
  paddingHorizontal: spacing.large,
}

const HEADER: TextStyle = {
  color: palette.white,
}
const BODY: TextStyle = {
  marginTop: spacing.medium,
}
const SECTION: ViewStyle = {
  marginTop: spacing.ginormous,
}
const LINE_BREAK: ViewStyle = {
  flex: 1,
  height: 1,
  backgroundColor: palette.martinique,
  marginTop: spacing.large,
  marginBottom: spacing.extraLarge,
}
const LOGO_ROW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

export class Sponsors extends React.Component {
  render() {
    return (
      <View style={ROOT}>
        <Text preset="header" tx="infoScreen.sponsors.title" style={HEADER} />
        <Text preset="body" tx="infoScreen.sponsors.description" style={BODY} />
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.platinum" />
          <View style={LINE_BREAK} />
          <SponsorLogo size="platinum" sponsor="squarespace" />
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.gold" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="gold" sponsor="agora" />
            <SponsorLogo size="gold" sponsor="amazon" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="gold" sponsor="formidable" />
            <SponsorLogo size="gold" sponsor="taxslayer" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="gold" sponsor="viro" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.silver" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="silver" sponsor="bugsnag" />
            <SponsorLogo size="silver" sponsor="builderX" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="silver" sponsor="callstack" />
            <SponsorLogo size="silver" sponsor="cambia" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="rnTraining" />
            <SponsorLogo size="bronze" sponsor="sentry" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.bronze" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="blueJeans" />
            <SponsorLogo size="bronze" sponsor="echobind" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="g2i" />
            <SponsorLogo size="bronze" sponsor="microsoft" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="modus" />
            <SponsorLogo size="bronze" sponsor="paypal" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="paypal" />
            <SponsorLogo size="bronze" sponsor="wix" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.additional" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="additional" sponsor="g2iAdditional" />
            <SponsorLogo size="additional" sponsor="modusAdditional" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="additional" sponsor="playstationAdditional" />
            <SponsorLogo size="additional" sponsor="squarespaceAdditional" />
          </View>
        </View>
      </View>
    )
  }
}
