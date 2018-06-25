import { onSnapshot } from "mobx-state-tree"
import { RootStoreModel, RootStore } from "../models/root-store"
import { Environment } from "../models/environment"
import * as storage from "../lib/storage"
import { Reactotron } from "../services/reactotron"
import { Api } from "../services/api"
import ApolloClient from "apollo-boost"

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root"

/**
 * The uri we'll be using for graphql requests.
 */
const GRAPHQL_URI = __DEV__ ? "http://localhost:4000/graphql" : "https://infinite.red/graphql"

/**
 * Setup the root state.
 */
export async function setupRootStore() {
  let rootStore: RootStore
  let data: any

  // prepare the environment that will be associated with the RootStore.
  const env = await createEnvironment()
  try {
    // load data from storage
    data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
    // data = {}
    rootStore = RootStoreModel.create(data, env)
  } catch {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    rootStore = RootStoreModel.create({}, env)
  }

  // reactotron logging
  if (__DEV__) {
    env.reactotron.setRootStore(rootStore, data)
  }

  // track changes & save to storage
  onSnapshot(rootStore, snapshot => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  // prefetch talks
  rootStore.talkStore.getAll()

  return rootStore
}

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  const env = new Environment()

  // create each service
  env.reactotron = new Reactotron()
  env.api = new Api()
  env.graphql = new ApolloClient({ uri: GRAPHQL_URI })

  // allow each service to setup
  await env.reactotron.setup()
  await env.api.setup()

  return env
}
