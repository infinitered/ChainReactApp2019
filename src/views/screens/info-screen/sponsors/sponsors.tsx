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
            <SponsorLogo size="gold" sponsor="gold" />
            <SponsorLogo size="gold" sponsor="gold" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="gold" sponsor="gold" />
            <SponsorLogo size="gold" sponsor="gold" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.silver" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="silver" sponsor="gold" />
            <SponsorLogo size="silver" sponsor="gold" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="silver" sponsor="gold" />
            <SponsorLogo size="silver" sponsor="gold" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.bronze" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="gold" />
            <SponsorLogo size="bronze" sponsor="gold" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="bronze" sponsor="gold" />
            <SponsorLogo size="bronze" sponsor="gold" />
          </View>
        </View>
        <View style={SECTION}>
          <Text preset="sectionHeader" tx="infoScreen.sponsors.additional" />
          <View style={LINE_BREAK} />
          <View style={LOGO_ROW}>
            <SponsorLogo size="additional" sponsor="gold" />
            <SponsorLogo size="additional" sponsor="gold" />
          </View>
          <View style={LOGO_ROW}>
            <SponsorLogo size="additional" sponsor="gold" />
            <SponsorLogo size="additional" sponsor="gold" />
          </View>
        </View>
      </View>
    )
  }
}
