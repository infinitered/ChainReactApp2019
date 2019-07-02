import * as React from "react"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "../text"
import { palette, spacing } from "../../theme"
import { SponsorLogo } from "../sponsor-logo"

const ROOT: ViewStyle = {
  marginTop: spacing.huge,
  paddingHorizontal: spacing.large,
}

const HEADER: TextStyle = {
  color: palette.white,
}
const BODY: TextStyle = {
  marginVertical: spacing.medium,
}
const SECTION: ViewStyle = {
  marginTop: spacing.huge,
}
const LINE_BREAK: ViewStyle = {
  height: 1,
  backgroundColor: palette.martinique,
  marginTop: spacing.large,
  marginBottom: spacing.small,
  width: "100%",
}
const LOGO_ROW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}
const AWS_STYLE: ImageStyle = {
  width: "60%",
  height: 65, // Restrict the height so it better matches the size of the Alexa logo
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
          <SponsorLogo size="platinum" sponsor="alexa" />
          <SponsorLogo size="platinum" sponsor="aws" style={AWS_STYLE} />
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.gold" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="gold" sponsor="callstack" />
            <SponsorLogo size="gold" sponsor="coinbase" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="gold" sponsor="sentry" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.silver" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="silver" sponsor="amazonWeb" />
            <SponsorLogo size="silver" sponsor="bugsnag" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="silver" sponsor="serverlessGuru" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.bronze" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="airship" />
            <SponsorLogo size="bronze" sponsor="builderX" />
            <SponsorLogo size="bronze" sponsor="cambia" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="echobind" />
            <SponsorLogo size="bronze" sponsor="facebook" />
            <SponsorLogo size="bronze" sponsor="g2i" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.additional" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="additional" sponsor="g2iAdditional" subtitle="AFTER PARTY" />
            <SponsorLogo size="additional" sponsor="devLifts" subtitle="STRETCHES" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="additional" sponsor="playstation" subtitle="WIFI" />
            <SponsorLogo size="additional" sponsor="squarespace" subtitle="BADGES" />
          </View>
        </View>
      </View>
    )
  }
}
