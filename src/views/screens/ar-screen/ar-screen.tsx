import * as React from "react"
import {
  ViewStyle,
  View,
  TouchableHighlight,
  Image,
  Animated,
  Easing,
  Platform,
  ImageStyle,
} from "react-native"
import { Text } from "../../shared/text"
import { NavigationScreenProps, AnimatedValue } from "react-navigation"
import { ViroARSceneNavigator } from "react-viro"
import ARInitializationUI from "./arscenes/ARInitializationUI.js"

export interface ARScreenProps extends NavigationScreenProps<{}> {}

export interface ARScreenState {
  hideARInitializedView: boolean
  arInitialized: boolean
  hasBadgeBeenFound: boolean
  badgeOpacity: AnimatedValue
  instructionsOpacity: AnimatedValue
  usePlanes: boolean
}

const exitButton: ViewStyle = {
  position: "absolute",
  height: 60,
  width: 60,
  paddingTop: 15,
  paddingLeft: 15,
}

const arInitUIContainer: ViewStyle = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%", // Dimensions.get('window').width,
  height: "100%", // Dimensions.get('window').height,
}

const arInitializationUIStyle: ViewStyle = {
  left: 0,
  right: 0,
  width: "100%",
  height: 140,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}

const usePlaneInstructions: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: 140,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#292930B3",
}

const overlayImage: ImageStyle = {
  flex: 1,
  position: "absolute",
  left: 0,
  top: 0,
  resizeMode: "cover",
  width: "100%", // Dimensions.get('window').width,
  height: "100%", // Dimensions.get('window').height,
}

export class ARScreen extends React.Component<ARScreenProps, ARScreenState> {
  constructor(props) {
    super(props)

    this.state = {
      hideARInitializedView: false,
      arInitialized: false,
      hasBadgeBeenFound: false,
      badgeOpacity: new Animated.Value(1),
      instructionsOpacity: new Animated.Value(1),
      usePlanes: Platform.OS == "android", // usePlanes if we're on Android
    }

    this.onARInitialized = this.onARInitialized.bind(this)
    this.getARInitializationUI = this.getARInitializationUI.bind(this)
    this.onBadgeFound = this.onBadgeFound.bind(this)
    this.getBadgeFrame = this.getBadgeFrame.bind(this)
  }

  onARInitialized(initialized: boolean) {
    this.setState({
      arInitialized: initialized,
    })

    // after 2 seconds, remove the invisible view (it's eating the touch targets)
    setTimeout(() => {
      this.setState({
        hideARInitializedView: true,
      })
    }, 2000)
  }

  onBadgeFound() {
    Animated.timing(this.state.badgeOpacity, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => {
      // set the state once the animation finishes
      this.setState({
        hasBadgeBeenFound: true,
      })
    })

    Animated.timing(this.state.instructionsOpacity, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
    }).start()
  }

  getBadgeFrame() {
    if (!this.state.hasBadgeBeenFound && Platform.OS != "android") {
      return (
        <Animated.Image
          style={{ ...overlayImage, opacity: this.state.badgeOpacity }}
          source={require("./res/badge_frame.png")}
        />
      )
    } else {
      return null
    }
  }

  getARInitializationUI() {
    if (this.state.hideARInitializedView) {
      return null
    } else {
      return (
        <View style={arInitUIContainer}>
          <ARInitializationUI
            style={arInitializationUIStyle}
            arSceneInitialized={this.state.arInitialized}
          />
        </View>
      )
    }
  }

  getUsePlanesInstructions() {
    if (this.state.usePlanes && !this.state.hasBadgeBeenFound) {
      return (
        <Animated.View style={{ ...usePlaneInstructions, opacity: this.state.instructionsOpacity }}>
          <Text preset="body" tx="arScreen.usePlaneInstructions" style={{ fontSize: 20 }} />
        </Animated.View>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ViroARSceneNavigator
          apiKey={"94B48744-8E99-4F49-BD71-845EAE94F5B4"}
          viroAppProps={{ usePlanes: this.state.usePlanes }}
          initialScene={{
            scene: require("./arscenes/RecognizeBadgeScene"),
            passProps: {
              onARInitialized: this.onARInitialized,
              onBadgeFound: this.onBadgeFound,
            },
          }}
        />

        {this.getBadgeFrame()}
        {this.getUsePlanesInstructions()}

        {this.getARInitializationUI()}

        <TouchableHighlight
          style={exitButton}
          onPress={() => this.props.navigation.goBack()}
          activeOpacity={0.6}
          underlayColor={"#00000000"}
        >
          <Image source={require("./res/btn_close.png")} />
        </TouchableHighlight>
      </View>
    )
  }
}
