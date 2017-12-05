declare module 'redux-persist' {
  import {Reducer} from "redux";

  export type PersistState = {
    version: number,
    rehydrated: boolean
  }

  export type PersistedState = {
      _persist: PersistState,
  } | void

  export type Transform = {
    in: (Object: object, string: string) => Object,
    out: (Object: object, string: string) => Object,
    config?: PersistConfig
  }

  export type PersistConfig = {
    version?: number,
    storage: Object,
    key: string,
    keyPrefix?: string, // @TODO remove in v6
    blacklist?: Array<string>,
    whitelist?: Array<string>,
    transforms?: Array<Transform>,
    throttle?: number,
    migrate?: (PersistedState: PersistedState, number: number) => Promise<PersistedState>,
    stateReconciler?: false | Function,
    getStoredState?: (PersistConfig: any) => Promise<PersistedState>, // used for migrations
    debug?: boolean,
    serialize?: boolean,
  }

  export type PersistorOptions = {
    enhancer?: Function,
  }

  export type Persistor = {
    purge: () => Promise<any>,
    flush: () => Promise<any>,
    dispatch: (PersistorAction: PersistorOptions) => PersistorAction,
    getState: () => PersistorState,
    subscribe: (PersistorSubscribeCallback: Function) => () => any,
  }

  export type RehydrateErrorType = any

  export type RehydrateAction = {
      type: 'redux-persist/REHYDRATE',
      key: string,
      payload?: Object,
      err?: RehydrateErrorType,
  }

  type PersistorState = {
    registry: Array<string>,
    bootstrapped: boolean,
  }

  type RegisterAction = {
    type: 'redux-persist/REGISTER',
    key: string,
  }

  type PersistorAction = RehydrateAction | RegisterAction

  type Reducers = {
      [key: string]: Function,
  }

  type BoostrappedCb = () => any

  export function persistCombineReducers<S>(
    config: PersistConfig,
    reducers: Reducers
  ): Reducer<S>;

  export function persistStore(
      store: Object,
      persistorOptions?: PersistorOptions,
      cb?: BoostrappedCb
  ): Persistor;
}
declare module 'redux-persist/es/integration/react';
declare module 'redux-persist/es/storage';
