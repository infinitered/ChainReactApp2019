import * as React from "react"
import { TextStyle, ViewStyle, View, TouchableHighlight, StyleSheet, Text } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Screen } from "../../shared/screen"
import { palette } from "../../../theme/palette"
import { spacing } from "../../../theme/spacing"
import { ViroARSceneNavigator } from "react-viro"
import { Button } from "../../shared/button"
import { Footer } from "../../shared/footer"

export interface ARScreenProps extends NavigationScreenProps<{}> {}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}

const button: ViewStyle = {
  height: 80,
  width: 150,
  paddingTop: 20,
  paddingBottom: 20,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: "#68a0cf",
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#fff",
  alignSelf: "center",
}

const screen: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const buttonText: TextStyle = {
  color: "#fff",
  textAlign: "center",
  fontSize: 20,
}

const exitButtonContainer: ViewStyle = {
  position: "absolute",
  bottom: 20,
  alignItems: "center",
  alignSelf: "center",
}

export class ARTab extends React.Component {
  enterARScreen = () => this.props.navigation.navigate("arscreen")

  render() {
    return (
      <View style={screen} backgroundColor={palette.portGore}>
        <TouchableHighlight style={button} onPress={this.enterARScreen} underlayColor={"#68a0ff"}>
          <Text style={buttonText}>Enter AR!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export class ARScreen extends React.Component<ARScreenProps, {}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ViroARSceneNavigator
          apiKey={"API_KEY_HERE"}
          initialScene={{ scene: require("./arscenes/RecognizeBadgeScene") }}
        />

        <View style={exitButtonContainer}>
          <TouchableHighlight
            style={button}
            onPress={() => this.props.navigation.goBack()}
            underlayColor={"#00000000"}
          >
            <Text style={buttonText}>Exit</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
