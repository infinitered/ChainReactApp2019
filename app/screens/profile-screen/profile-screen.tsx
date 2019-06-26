import React from "react"
import { View, ViewStyle } from "react-native"
import { Screen } from "../../components/screen"
import { Text } from "../../components/text"
import { palette, spacing } from "../../theme"
import { TextStyle } from "react-native"
import name from "./profile-info"
import { Button } from "../../components/button"
import { TextField } from "../../components/text-field/text-field"
import { observer, inject } from "mobx-react"
import { NavigationScreenProps } from "react-navigation"
import { TalkStore } from "../../models/talk-store"
import { CodeOfConductLink } from "../../components/code-of-conduct-link"
import { loadString, saveString } from "../../utils/storage"

const ROOT: ViewStyle = {
  padding: spacing.medium,
}

const TITLE: TextStyle = {
  marginTop: spacing.extraLarge,
  marginBottom: spacing.large,
}

const DESCRIPTION_CONTAINER: ViewStyle = {
  marginTop: spacing.large,
  marginBottom: spacing.extraLarge,
}
const DESCRIPTION_ITEM: ViewStyle = {
  marginVertical: spacing.small,
}

const BUTTON: ViewStyle = {
  paddingHorizontal: spacing.medium,
}

const MARGIN_BUTTON: ViewStyle = {
  ...BUTTON,
  marginLeft: spacing.small,
}

const ROW: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const USERNAME: ViewStyle = {
  flex: 1,
  marginRight: spacing.small,
}

const BUTTONS_ROW: ViewStyle = {
  ...ROW,
  marginTop: spacing.medium,
}

const INPUT_ROW: ViewStyle = {
  ...ROW,
  justifyContent: "space-between",
}

interface ProfileScreenProps extends NavigationScreenProps<{}> {
  talkStore: TalkStore
}
interface ProfileScreenState {
  username?: string
  editInput: boolean
}

@observer
@inject("talkStore")
export class ProfileScreen extends React.Component<ProfileScreenProps, ProfileScreenState> {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    headerStyle: { backgroundColor: palette.portGore, borderBottomWidth: 0 },
  }
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
    return (
      <Screen preset="scrollStack" backgroundColor={palette.portGore} style={ROOT}>
        <View>
          <Text preset="title" tx="profileScreen.title" style={TITLE} />
          <View style={DESCRIPTION_CONTAINER}>
            <Text preset="subheader" tx="profileScreen.description" style={DESCRIPTION_ITEM} />
            <CodeOfConductLink onPress={this.linkToCodeOfConduct} style={DESCRIPTION_ITEM} />
          </View>
          {this.renderContent()}
        </View>
      </Screen>
    )
  }

  linkToCodeOfConduct = () => {
    this.props.navigation.navigate({
      routeName: "profileCodeOfConduct",
      params: { backTitle: "PROFILE" },
    })
  }

  renderDisabled = () => (
    <View>
      <Text tx="profileScreen.disabled.warning" />
    </View>
  )

  renderContent = () => {
    const { username, editInput } = this.state

    if (this.props.talkStore.discussionsEnabled) {
      if (editInput) {
        return (
          <View>
            <Text tx="profileScreen.usernameField.label" preset="label" />
            <TextField
              placeholderTx="profileScreen.usernameField.placeholder"
              value={username}
              onChangeText={v => this.setState({ username: v })}
            />
            <View style={BUTTONS_ROW}>
              <Button preset="dark" tx="common.cancel" onPress={this.onCancel} style={BUTTON} />
              <Button preset="dark" tx="common.save" onPress={this.onSave} style={MARGIN_BUTTON} />
            </View>
          </View>
        )
      } else {
        return (
          <View>
            <View style={INPUT_ROW}>
              <View style={USERNAME}>
                <Text tx="profileScreen.usernameField.label" preset="label" />
                <Text preset="body" text={username} numberOfLines={1} />
              </View>
              <Button preset="dark" onPress={this.updateName} tx="common.edit" style={BUTTON} />
            </View>
          </View>
        )
      }
    } else {
      return this.renderDisabled()
    }
  }

  onSave = async () => {
    try {
      await saveString("name", this.state.username)
      console.log("username updated...")
      this.setState({ editInput: false })
    } catch (err) {
      console.log("err...: ", err)
    }
  }

  onCancel = () => {
    this.setState({ editInput: false })
  }

  async componentDidMount() {
    try {
      const username = await loadString("name")
      console.log("username: ", username)
      if (!username) {
        await saveString("name", name)
        this.setState({ username: name })
      } else {
        this.setState({ username })
      }
    } catch (err) {
      console.log("error: ", err)
    }
  }
}
