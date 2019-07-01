import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "../text"
import { Button } from "../button"

const ROOT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

export function CodeOfConductLink(props: { style?: ViewStyle; onPress: () => void }) {
  return (
    <View style={{ ...ROOT, ...props.style }}>
      <Text tx="codeOfConductLink.pleaseRemember" />
      <Button preset="link" tx="codeOfConductLink.codeOfConduct" onPress={props.onPress} />
    </View>
  )
}
