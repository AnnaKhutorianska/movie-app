import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import { AnyAction, configureStore } from '@reduxjs/toolkit'

import combinedReducer from './combinedReducer'

const reducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }

    return nextState
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer,
})

const configureAppStore = () => store

export const wrapper = createWrapper(configureAppStore)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
