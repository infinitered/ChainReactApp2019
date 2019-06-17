import * as React from "react"
import { Linking, Platform } from "react-native"
import { ContentLink } from "../content-link"

export function SurveyLink() {
  const onPressLink = () => {
    Linking.openURL("https://www.surveymonkey.com/r/ChainReact2019")
  }

  return (
    <ContentLink
      headerTx="infoScreen.survey.title"
      bodyTx="infoScreen.survey.description"
      buttonTx="infoScreen.survey.button"
      onPressLink={onPressLink}
    />
  )
}
