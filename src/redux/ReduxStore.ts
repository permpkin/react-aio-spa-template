import { TypedUseSelectorHook, useSelector } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import createWebStorage from "redux-persist/es/storage/createWebStorage"
import thunk from 'redux-thunk'

const WebStorage = createWebStorage('local')

// import reducers
import ExampleStore from "./stores/Example";

export const ReduxStore = configureStore({
  reducer: {

    // global driver state
    Groups: persistReducer({
      key: "Example",
      version: 1,
      storage: WebStorage
    }, ExampleStore.reducer),
    
  },
  middleware: [
    thunk
  ]
})

export const ReduxPersistor = persistStore(ReduxStore)
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof ReduxStore.getState>
export type AppDispatch = typeof ReduxStore.dispatch