import { create } from "domain"
import { createAppSlice } from "../../createAppSlice"
import { createReducer } from "@reduxjs/toolkit"
import { CounterSliceState } from "./types"
import { count } from "console"
import { PayloadAction } from "@reduxjs/toolkit";

const counterInitialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "Counter",
  initialState: counterInitialState,
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer((state: CounterSliceState, actions: PayloadAction<number>) =>{
        state.count = state.count * actions.payload
    }),
    dived: create.reducer((state: CounterSliceState, actions: PayloadAction<number>) =>{
        state.count = state.count / actions.payload
    })

  }),
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
})

export const CounterSliceActions = counterSlice.actions
export const CounterSliceSelectors = counterSlice.selectors
