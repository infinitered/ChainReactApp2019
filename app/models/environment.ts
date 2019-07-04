import { Reactotron } from "../services/reactotron"
import { Api } from "../services/api"
import DefaultClient from "apollo-boost"

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  /**
   * Reactotron is only available in dev.
   */
  reactotron: Reactotron

  /**
   * Our api.
   */
  api: Api

  /**
   * Our graphql client.
   */
  graphql: DefaultClient<any>
}
