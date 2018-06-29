import * as React from "react"
import { inject, observer } from "mobx-react"
import { RootNavigator } from "./root-navigator"
import { NavigationStore } from "../models/navigation-store/navigation-store"

interface StatefulNavigatorProps {
  navigationStore?: NavigationStore
}

var firstRun = true

@inject("navigationStore")
@observer
export class StatefulNavigator extends React.Component<StatefulNavigatorProps, {}> {
  render() {
    // grab our state & dispatch from our navigation store
    const { state, dispatch, addListener } = this.props.navigationStore

    // create a custom navigation implementation
    const navigation = {
      dispatch,
      state,
      addListener,
    }

    // if the saved route is the arscreen, re-route the user to the artab
    // only on firstRun
    const route = this.props.navigationStore.findCurrentRoute()
    if (firstRun && route["routeName"] == "arscreen") {
      console.log("Resuming in arscreen, so switching to the ar tab.")
      navigation.state.index = 1 // MainNavigator
      navigation.state.routes[1].index = 0 // Tabs
      navigation.state.routes[1].routes[0].index = 3 // AR Tab
    }
    firstRun = false

    return <RootNavigator navigation={navigation} />
  }
}
