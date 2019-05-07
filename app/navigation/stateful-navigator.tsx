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
    const navigation: any = {
      dispatch,
      state,
      addListener,
    }

    const route = this.props.navigationStore.findCurrentRoute()

    firstRun = false

    return <RootNavigator navigation={navigation} />
  }
}
