import * as React from "react"
import {
  ViewStyle,
  View,
  TouchableHighlight,
  Image,
  Animated,
  Easing,
  Dimensions,
} from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { ViroARSceneNavigator } from "react-viro"
import ARInitializationUI from "./arscenes/ARInitializationUI.js"

export interface ARScreenProps extends NavigationScreenProps<{}> {}

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

const overlayImage: ViewStyle = {
  flex: 1,
  position: "absolute",
  left: 0,
  top: 0,
  resizeMode: "cover",
  width: "100%", // Dimensions.get('window').width,
  height: "100%", // Dimensions.get('window').height,
}

export class ARScreen extends React.Component<ARScreenProps, {}> {
  constructor(props) {
    super(props)

    this.state = {
      arInitialized: false,
      hasBadgeBeenFound: false,
      badgeOpacity: new Animated.Value(1),
    }

    this.onARInitialized = this.onARInitialized.bind(this)
    this.onBadgeFound = this.onBadgeFound.bind(this)
    this.getBadgeFrame = this.getBadgeFrame.bind(this)
  }

  onARInitialized(initialized: boolean) {
    this.setState({
      arInitialized: initialized,
    })
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
  }

  getBadgeFrame() {
    if (!this.state.hasBadgeBeenFound) {
      return (
        <Animated.Image
          style={{ ...overlayImage, opacity: this.state.badgeOpacity }}
          source={require("./res/badge_frame.png")}
        />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ViroARSceneNavigator
          apiKey={"94B48744-8E99-4F49-BD71-845EAE94F5B4"}
          initialScene={{
            scene: require("./arscenes/RecognizeBadgeScene"),
            passProps: {
              onARInitialized: this.onARInitialized,
              onBadgeFound: this.onBadgeFound,
            },
          }}
        />

        {this.getBadgeFrame()}

        <View style={arInitUIContainer}>
          <ARInitializationUI
            style={arInitializationUIStyle}
            arSceneInitialized={this.state.arInitialized}
          />
        </View>

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
