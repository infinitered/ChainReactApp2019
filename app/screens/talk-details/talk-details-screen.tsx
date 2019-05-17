import * as React from "react"
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  ViewStyle,
  TextStyle,
  Dimensions,
  ImageStyle,
  Platform,
  AsyncStorage,
} from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { graphql, compose } from "react-apollo"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { format } from "date-fns"
import uuid from "uuid/v4"
import { Screen } from "../../components/screen"
import { palette, spacing } from "../../theme"
import { Text } from "../../components/text"
import { SpeakerImage } from "../../components/speaker-image"
import { TalkTitle } from "../../components//talk-title"
import { SpeakerBio } from "../../components//speaker-bio"
import { Talk } from "../../models/talk"
import { listCommentsForTalk } from "../../graphql/queries"
import { createComment as CreateComment } from "../../graphql/mutations"
import { onCreateComment as OnCreateComment } from "../../graphql/subscriptions"
import config from "../../aws-exports"
Amplify.configure(config)

const CLIENTID = uuid()

const ROOT: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
}

const FULL_SIZE: ViewStyle = {
  width: "100%",
  height: "100%",
}

const SCREEN_WIDTH = Dimensions.get("window").width
const IMAGE_WIDTH = SCREEN_WIDTH - 2 * spacing.large
const IMAGE_ASPECT_RATIO = 1.5
const IMAGE_HEIGHT = IMAGE_WIDTH / IMAGE_ASPECT_RATIO
const FULL_WIDTH_IMAGE: ImageStyle = {
  width: IMAGE_WIDTH,
  height: IMAGE_HEIGHT,
  resizeMode: "contain",
}

const TITLE: TextStyle = {
  fontSize: 20,
  color: palette.white,
  marginTop: spacing.large,
}

const SPONSOR_CONTAINER: ViewStyle = {
  flexDirection: "row",
  marginTop: spacing.small,
}

const SPONSORED_BY: TextStyle = { color: palette.offWhite }

const SPONSOR_NAME: TextStyle = { fontWeight: "500" }

const LABEL: TextStyle = {
  marginTop: spacing.extraLarge + spacing.large,
  color: palette.shamrock,
  marginBottom: spacing.large,
}

const DESCRIPTION: TextStyle = { marginTop: spacing.large + spacing.tiny + spacing.tiny }

const BULLET: ViewStyle = {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: palette.shamrock,
  marginRight: spacing.small,
  marginTop: spacing.small,
}

const PANEL_BIO: ViewStyle = { flex: 1, marginTop: spacing.extraLarge + spacing.large }

const AFTER_PARTY_DESCRIPTION: TextStyle = { marginTop: spacing.large }

const MENU_ITEM: ViewStyle = {
  flexDirection: "row",
  marginBottom: spacing.large,
  width: "100%",
}

const MENU_ITEM_TEXT: TextStyle = { color: palette.white }

const TAB_HOLDER: ViewStyle = { flex: 1 }
const TAB_STYLE: ViewStyle = { paddingVertical: 7, alignItems: "center", justifyContent: "center" }
const TAB_CONTAINER = { flexDirection: "row" }
const WHITE_TEXT = { color: "white" }
const FLEX_ONE = { flex: 1 }
const FLEX_ROW = { flexDirection: "row" }
const COMMENT_CONTAINER = { paddingVertical: 15, marginBottom: 50 }
const COMMENT_STYLE = { paddingHorizontal: 20, marginBottom: 20 }
const CREATED_BY = { color: "white", fontWeight: "600" }
const CREATED_AT = { color: "rgba(255, 255, 255, .5)", fontSize: 11, marginLeft: 8, marginTop: 3 }
const INPUT_CONTAINER = { bottom: 0, position: "absolute", left: 0, width: SCREEN_WIDTH }
const MESSAGE_INPUT = { backgroundColor: "white", height: 50, paddingHorizontal: 8 }

const HIT_SLOP = {
  top: 30,
  left: 30,
  right: 30,
  bottom: 30,
}

const MAIN_CONTAINER = { flex: 1, backgroundColor: palette.portGore }

export interface NavigationStateParams {
  talk: Talk
}

export interface TalkDetailsScreenProps extends NavigationScreenProps<NavigationStateParams> {}

const backImage = () => (
  <View hitSlop={HIT_SLOP}>
    <Image source={require("../../components/title-bar/icon.back-arrow.png")} />
  </View>
)

class BaseTalkDetailsScreen extends React.Component<TalkDetailsScreenProps, {}> {
  static navigationOptions = ({ navigation }) => {
    const { talk } = navigation.state.params
    const titleMargin = Platform.OS === "ios" ? -50 : 0
    return {
      headerStyle: {
        backgroundColor: palette.portGore,
        borderBottomWidth: 0,
        paddingLeft: spacing.large + spacing.tiny,
      },
      headerBackImage: backImage,
      headerTintColor: palette.shamrock,
      title: `${format(talk.startTime, "h:mm")} - ${format(talk.endTime, "h:mm")}`,
      headerTitleStyle: {
        textAlign: "left",
        fontWeight: "500",
        width: "100%",
        marginLeft: titleMargin,
      },
    }
  }

  scroller = React.createRef()
  commentSubscription = {}

  state = {
    currentView: "details",
    inputValue: "",
    name: "",
  }

  async componentDidMount() {
    const { id } = this.props.navigation.state.params.talk
    this.props.subscribeToNewComments()
    try {
      const name = await AsyncStorage.getItem("name")
      this.setState({ name })
    } catch (err) {
      console.log("error fetching user name...: ", err)
    }
    this.commentSubscription = API.graphql(
      graphqlOperation(OnCreateComment, { talkId: id }),
    ).subscribe({
      next: eventData => {
        if (this.state.currentView === "details") return
        const { clientId } = eventData.value.data.onCreateComment
        if (clientId === CLIENTID) return
        this.scroller.current.scrollToEnd()
      },
    })
  }

  componentWillUnmount() {
    this.commentSubscription.unsubscribe()
  }

  createComment = () => {
    const { id } = this.props.navigation.state.params.talk
    const comment = {
      text: this.state.inputValue,
      clientId: CLIENTID,
      createdBy: this.state.name,
      talkId: id,
      id: uuid(),
      createdAt: Date.now(),
    }
    this.setState({ inputValue: "" })
    this.props.createComment(comment)
    setTimeout(() => {
      this.scroller.current.scrollToEnd()
    }, 50)
  }

  toggleView = currentView => {
    this.setState({ currentView })
    if (currentView === "discussion") {
      this.scroller = React.createRef()
      setTimeout(() => {
        this.scroller.current.scrollToEnd({ animated: false })
      })
    }
  }

  render() {
    const { talkType = "" } = this.props.navigation.state.params.talk
    let { comments } = this.props
    comments = comments
      .sort(function(a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
      .reverse()
    return (
      <View style={MAIN_CONTAINER}>
        {(talkType === "TALK" || talkType === "WORKSHOP") && (
          <View style={TAB_CONTAINER}>
            <View style={{ ...TAB_HOLDER, ...chosen(this.state.currentView, "details") }}>
              <TouchableOpacity style={TAB_STYLE} onPress={() => this.toggleView("details")}>
                <Text style={WHITE_TEXT}>Details</Text>
              </TouchableOpacity>
            </View>
            <View style={{ ...TAB_HOLDER, ...chosen(this.state.currentView, "discussion") }}>
              <TouchableOpacity style={TAB_STYLE} onPress={() => this.toggleView("discussion")}>
                <Text style={WHITE_TEXT}>Discussion</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {this.state.currentView === "discussion" && (
          <View style={FLEX_ONE}>
            <ScrollView ref={this.scroller}>
              <View style={COMMENT_CONTAINER}>
                {comments.map((c, i) => (
                  <View style={COMMENT_STYLE} key={i}>
                    <View style={FLEX_ROW}>
                      <Text style={CREATED_BY}>{c.createdBy}</Text>
                      <Text style={CREATED_AT}>{format(c.createdAt, "hh:mma MM DD")}</Text>
                    </View>
                    <Text style={WHITE_TEXT}>{c.text}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={INPUT_CONTAINER}>
              <TextInput
                onChangeText={v => this.setState({ inputValue: v })}
                style={MESSAGE_INPUT}
                placeholder="Type a message..."
                onSubmitEditing={this.createComment}
                value={this.state.inputValue}
              />
            </View>
          </View>
        )}
        {this.state.currentView !== "discussion" && (
          <Screen preset="scroll" backgroundColor={palette.portGore} style={ROOT}>
            {this.renderContent()}
          </Screen>
        )}
      </View>
    )
  }

  renderContent = () => {
    const { talkType = "" } = this.props.navigation.state.params.talk
    switch (talkType.toLowerCase()) {
      case "talk":
        return this.renderTalk()
      case "workshop":
        return this.renderWorkshop()
      case "break":
        return this.renderBreak()
      case "lunch":
      case "breakfast":
        return this.renderLunch()
      case "panel":
        return this.renderPanel()
      case "afterparty":
        return this.renderAfterParty()
      default:
        return null
    }
  }

  renderTalk = () => {
    const { talk } = this.props.navigation.state.params
    return (
      <View style={FULL_SIZE}>
        {talk.speakers && <SpeakerImage speaker={talk.speakers[0]} />}
        <TalkTitle talk={talk} />
        {talk.description && (
          <Text
            text={talk.description}
            preset="body"
            style={{ fontSize: 16, marginTop: spacing.large }}
          />
        )}
        {talk.speakers && <SpeakerBio speaker={talk.speakers[0]} />}
      </View>
    )
  }

  renderWorkshop = () => {
    const { talk } = this.props.navigation.state.params
    return (
      <View style={FULL_SIZE}>
        <SpeakerImage speaker={talk.speakers[0]} />
        <TalkTitle talk={talk} />
        <SpeakerBio speaker={talk.speakers[0]} />
      </View>
    )
  }

  renderBreak = () => {
    const { sponsor, description, title } = this.props.navigation.state.params.talk
    return (
      <View style={FULL_SIZE}>
        <Image source={require("./images/img.coffee-modus.png")} style={FULL_WIDTH_IMAGE} />
        <Text text={title} preset="body" style={TITLE} />
        <View style={SPONSOR_CONTAINER}>
          <Text tx="talkDetailsScreen.sponsoredBy" preset="input" style={SPONSORED_BY} />
          <Text text={sponsor} preset="input" style={SPONSOR_NAME} />
        </View>
        <Text text={description} preset="body" style={DESCRIPTION} />
      </View>
    )
  }

  renderLunch = () => {
    const {
      sponsor,
      description,
      menuItems,
      title,
      image,
    } = this.props.navigation.state.params.talk
    return (
      <View style={FULL_SIZE}>
        <Image source={{ uri: image }} style={FULL_WIDTH_IMAGE} />
        <Text text={title} preset="body" style={TITLE} />
        {sponsor && this.renderSponsored(sponsor)}
        <Text text={description} preset="body" style={DESCRIPTION} />
        <Text preset="sectionHeader" tx="talkDetailsScreen.menuTitle" style={LABEL} />
        {menuItems.map((item, index) => this.renderMenuItem(item, index))}
      </View>
    )
  }

  renderSponsored = sponsor => {
    return (
      <View style={SPONSOR_CONTAINER}>
        <Text tx="talkDetailsScreen.sponsoredBy" preset="input" style={SPONSORED_BY} />
        <Text text={sponsor} preset="input" style={SPONSOR_NAME} />
      </View>
    )
  }

  renderPanel = () => {
    const {
      talk: { image, title, description, speakers },
    } = this.props.navigation.state.params
    return (
      <View style={FULL_SIZE}>
        {<Image source={{ uri: image }} style={FULL_WIDTH_IMAGE} />}
        <Text text={title} preset="body" style={TITLE} />
        <Text text={description} preset="body" style={DESCRIPTION} />
        {speakers &&
          speakers.length &&
          speakers.map((speaker, index) => {
            const isLast = index === speakers.length - 1
            return (
              <View key={index} style={PANEL_BIO}>
                <SpeakerImage speaker={speaker} />
                <SpeakerBio speaker={speaker} last={isLast} />
              </View>
            )
          })}
      </View>
    )
  }

  renderAfterParty = () => {
    const { title, description, sponsor } = this.props.navigation.state.params.talk
    let image =
      sponsor === "Squarespace"
        ? require("./images/img.afterparty-squarespace.png")
        : require("./images/img.afterparty-g2i.png")
    return (
      <View style={FULL_SIZE}>
        <View>
          <Image source={image} style={FULL_WIDTH_IMAGE} />
        </View>
        <Text text={title} preset="body" style={TITLE} />
        <Text text={description} preset="body" style={AFTER_PARTY_DESCRIPTION} />
      </View>
    )
  }

  renderMenuItem = (item, index) => {
    return (
      <View key={index} style={MENU_ITEM}>
        <View style={BULLET} />
        <Text preset="subheader" text={item} style={MENU_ITEM_TEXT} />
      </View>
    )
  }
}

export const TalkDetailsScreen = compose(
  graphql(CreateComment, {
    props: props => {
      return {
        createComment: comment => {
          props.mutate({
            variables: comment,
            optimisticResponse: {
              createComment: { ...comment, __typename: "Comment" },
            },
          })
        },
      }
    },
    options: props => {
      const { id } = props.navigation.state.params.talk
      return {
        update: (dataProxy, { data: { createComment } }) => {
          const query = listCommentsForTalk
          const data = dataProxy.readQuery({ query, variables: { talkId: id } })
          data.listCommentsForTalk.items = data.listCommentsForTalk.items.filter(
            i => i.id !== createComment.id,
          )
          data.listCommentsForTalk.items.push(createComment)
          dataProxy.writeQuery({ query, data, variables: { talkId: id } })
        },
      }
    },
  }),
  graphql(listCommentsForTalk, {
    options: props => {
      const { talk } = props.navigation.state.params
      return {
        variables: {
          talkId: talk.id,
        },
        fetchPolicy: "cache-and-network",
      }
    },
    props: props => {
      console.log("props from talkdetailsscreen: ", props)
      const { id } = props.ownProps.navigation.state.params.talk
      return {
        comments: props.data.listCommentsForTalk ? props.data.listCommentsForTalk.items : [],
        data: props.data,
        subscribeToNewComments: params => {
          props.data.subscribeToMore({
            document: OnCreateComment,
            variables: { talkId: id },
            updateQuery: (
              prev,
              {
                subscriptionData: {
                  data: { onCreateComment },
                },
              },
            ) => {
              if (onCreateComment.clientId === CLIENTID) return
              let messageArray = [...prev.listCommentsForTalk.items, onCreateComment]

              return {
                ...prev,
                listCommentsForTalk: {
                  ...prev.listCommentsForTalk,
                  items: messageArray,
                },
              }
            },
          })
        },
      }
    },
  }),
)(BaseTalkDetailsScreen)

function chosen(type, comp) {
  if (type === comp) {
    return {
      borderBottomWidth: 2,
      borderBottomColor: "white",
    }
  }
}
