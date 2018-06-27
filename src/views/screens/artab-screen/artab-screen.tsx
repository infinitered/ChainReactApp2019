import * as React from "react"
import {
  TextStyle,
  ViewStyle,
  View,
  TouchableHighlight,
  Text,
  ActivityIndicator,
  Image,
  Linking,
} from "react-native"
import { Text as SharedText } from "../../shared/text"
import { presets } from "../../shared/text/text.presets"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { ViroARSceneNavigator } from "react-viro"
import { Button } from "../../shared/button"
import { Footer } from "../../shared/footer"
import { color } from "../../../theme/color"
import { translate } from "../../../i18n"
import { ViroUtils } from "react-viro"

export interface ARScreenProps extends NavigationScreenProps<{}> {}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}

const DESCRIPTION: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
  marginRight: spacing.large,
}

const DIVIDER: ViewStyle = {
  marginLeft: spacing.large,
  marginRight: spacing.large,
  height: 1,
  flex: 1,
  backgroundColor: color.palette.offWhite,
}

const TIPCONTAINER: ViewStyle = {
  marginLeft: spacing.large,
  marginRight: spacing.large,
  flexDirection: "row",
  alignItems: "center",
}

const BULLETPOINT: ViewStyle = {
  marginRight: spacing.small,
  height: 6,
  width: 6,
  backgroundColor: color.palette.offWhite,
}

const ATTR_CONTAINER: ViewStyle = {
  marginTop: spacing.medium,
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
}

const LOGO_IMAGE: ViewStyle = {
  resizeMode: "contain",
  width: 140,
  height: 82,
}

const OVERLAY: ViewStyle = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  opacity: 0.75,
}

const OVERLAY_TEXT: ViewStyle = {
  marginLeft: spacing.large,
  marginRight: spacing.large,
  textAlign: "center",
  color: color.palette.white,
}

export class ARTab extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    ViroUtils.isARSupportedOnDevice(
      () => {
        this.setState({ isARSupported: false })
      },
      () => {
        this.setState({ isARSupported: true })
      },
    )
  }

  enterARScreen = () => this.props.navigation.navigate("arscreen")

  getTips() {
    let toReturn = []
    let tips = translate("arTab.tips")
    for (let tipIndex in tips) {
      toReturn.push(
        <View style={TIPCONTAINER} key={"tip" + tipIndex}>
          <View style={BULLETPOINT} />
          <Text style={{ ...presets["body"], flex: 1 }}>{tips[tipIndex]}</Text>
        </View>,
      )
    }
    return toReturn
  }

  getAttribution() {
    return (
      // Linking.openURL(url).catch(err => console.error('An error occurred', err));
      <TouchableHighlight
        onPress={() =>
          Linking.openURL("http://www.viromedia.com").catch(err =>
            console.error("An error occurred", err),
          )
        }
        activeOpacity={0.6}
        underlayColor="#00000000"
      >
        <View style={ATTR_CONTAINER}>
          <SharedText preset="label" tx="arTab.poweredBy" />
          <Image source={require("./res/viro_logo.png")} style={LOGO_IMAGE} />
          <SharedText preset="label" tx="arTab.viroUrl" />
        </View>
      </TouchableHighlight>
    )
  }

  getOverlayView() {
    if (this.state.isARSupported == undefined) {
      // show loading screen
      return (
        <View style={OVERLAY}>
          <ActivityIndicator size="large" color={color.palette.white} />
        </View>
      )
    } else if (!this.state.isARSupported) {
      // show not supported screen
      return (
        <View style={OVERLAY}>
          <SharedText preset="body" tx="arTab.notSupported" style={OVERLAY_TEXT} />
        </View>
      )
    }
  }

  render() {
    return (
      <Screen preset="fixed" backgroundColor={palette.portGore}>
        <Screen preset="scrollStack" backgroundColor={palette.portGore} style={{ width: "100%" }}>
          <SharedText preset="title" tx="arTab.title" style={TITLE} />
          <SharedText preset="body" tx="arTab.description" style={DESCRIPTION} />
          <SharedText preset="body" tx="arTab.tipsTitle" style={TITLE} />
          <View style={DIVIDER} />

          {this.getTips()}

          {this.getAttribution()}
        </Screen>
        <Footer>
          <Button
            tx="arTab.enterARButton"
            onPress={this.enterARScreen}
            style={{ width: 335, height: 50, borderRadius: 0 }}
            textStyle={{ fontSize: 11, fontWeight: "500" }}
          />
        </Footer>

        {this.getOverlayView()}
      </Screen>
    )
  }
}
