import React from "react"
import { View, Text as NativeText, TextInput, AsyncStorage, TouchableOpacity } from "react-native"

import { Screen } from "../../components/screen"
import { Text } from "../../components/text"
import { palette, spacing, color, typography } from "../../theme"
import { TextStyle } from "react-native"
import name from "./profile-info"

const PROFILENAME: TextStyle = {
  fontFamily: typography.primary,
  color: "white",
  paddingLeft: 20,
  fontSize: 26,
}

const EditButton: TextStyle = {
  fontFamily: typography.primary,
  color: "white",
  paddingLeft: 20,
  fontSize: 16,
}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginLeft: spacing.large,
}

const INPUTSTYLE = {
  fontFamily: typography.primary,
  color: "white",
  marginLeft: 20,
  marginTop: 5,
  padding: 7,
  width: 300,
  height: 50,
  borderWidth: 1,
  borderColor: "white",
}

const SAVEBUTTON: TextStyle = {
  fontFamily: typography.primary,
  color: "white",
  marginTop: 10,
  fontSize: 16,
  marginLeft: 20,
}

const WITHPADDING = {
  paddingVertical: 5,
}

export class ProfileScreen extends React.Component {
  state = {
    username: null,
    editInput: false,
  }
  updateName = () => {
    this.setState(() => ({
      editInput: true,
    }))
  }
  render() {
    const { username } = this.state
    return (
      <Screen preset="scroll" backgroundColor={palette.portGore}>
        <Text preset="title" tx="profilescreen.title" style={TITLE} />
        {!this.state.editInput && (
          <View>
            <NativeText style={PROFILENAME}>{username}</NativeText>
            <TouchableOpacity onPress={this.updateName} style={WITHPADDING}>
              <NativeText style={EditButton}>Edit Username</NativeText>
            </TouchableOpacity>
          </View>
        )}
        {this.state.editInput && (
          <View>
            <TextInput
              style={INPUTSTYLE}
              placeholder="Username"
              value={username}
              onChangeText={v => this.setState({ username: v })}
            />
            <TouchableOpacity onPress={this.onSave} style={WITHPADDING}>
              <NativeText style={SAVEBUTTON}>Save</NativeText>
            </TouchableOpacity>
          </View>
        )}
      </Screen>
    )
  }
  onSave = async () => {
    try {
      await AsyncStorage.setItem("name", this.state.username)
      console.log("username updated...")
      this.setState({ editInput: false })
    } catch (err) {
      console.log("err...: ", err)
    }
  }
  async componentDidMount() {
    try {
      const username = await AsyncStorage.getItem("name")
      console.log("username: ", username)
      if (!username) {
        await AsyncStorage.setItem("name", name)
        this.setState({ username: name })
      } else {
        this.setState({ username })
      }
    } catch (err) {
      console.log("error: ", err)
    }
  }
}
