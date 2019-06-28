import * as React from "react"
import { TextStyle } from "react-native"
import { Text } from "../../components/text"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../components/screen"
import { palette, spacing } from "../../theme"
import { GerdingTheater } from "../../components/gerding-theater"
import { GettingToChainReact } from "../../components/getting-to-chain-react"
import { NearbyAttractions } from "../../components/nearby-attractions"
import { BlogLink } from "../../components/blog-link/blog-link"

export interface VenueScreenProps extends NavigationScreenProps<{}> {}
export interface VenueScreenState {
  renderFullContent: boolean
}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}

export class VenueScreen extends React.Component<VenueScreenProps, VenueScreenState> {
  state = {
    renderFullContent: false,
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ renderFullContent: true })
    })
  }

  render() {
    return (
      <Screen preset="scroll" backgroundColor={palette.portGore}>
        <Text preset="title" tx="venueScreen.title" style={TITLE} />
        <GerdingTheater />
        <GettingToChainReact />
        <BlogLink />
        {this.state.renderFullContent ? <NearbyAttractions /> : null}
      </Screen>
    )
  }
}
