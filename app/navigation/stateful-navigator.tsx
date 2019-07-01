import * as React from "react"
// @ts-ignore
import { getNavigation, NavigationScreenProp, NavigationState } from "react-navigation"
import { inject, observer } from "mobx-react"
import { RootNavigator } from "./root-navigator"
import { NavigationStore } from "../models/navigation-store/navigation-store"

interface StatefulNavigatorProps {
  navigationStore?: NavigationStore
}

@inject("navigationStore")
@observer
export class StatefulNavigator extends React.Component<StatefulNavigatorProps, {}> {
  currentNavProp: NavigationScreenProp<NavigationState>

  getCurrentNavigation = () => {
    return this.currentNavProp
  }

  render() {
    // grab our state & dispatch from our navigation store
    const { state, dispatch, actionSubscribers } = this.props.navigationStore

    // create a custom navigation implementation
    this.currentNavProp = getNavigation(
      RootNavigator.router,
      state,
      dispatch,
      actionSubscribers(),
      {},
      this.getCurrentNavigation,
    )

    return <RootNavigator navigation={this.currentNavProp} />
  }
}
