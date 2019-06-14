import * as React from "react"
import { Linking, Platform } from "react-native"
import { ContentLink } from "../content-link"

export function Photobomb() {
  const onPressLink = () => {
    const url = Platform.select({
      ios: "https://itunes.apple.com/us/app/chain-react-photobomb/id1253527606?mt=8",
      android: "https://play.google.com/store/apps/details?id=com.echobind.chainreactphotobomb",
    })
    Linking.openURL(url)
  }

  return (
    <ContentLink
      headerTx="infoScreen.photobomb.title"
      bodyTx="infoScreen.photobomb.description"
      buttonTx="infoScreen.photobomb.button"
      onPressLink={onPressLink}
    />
  )
}
