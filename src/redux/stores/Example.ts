import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {}

interface InitialState {}

const Slice = createSlice({
  name: "Example",
  initialState,
  reducers: {
    // method: (state, { payload }) => {
    //   state.field = payload
    // },
  }
})

export default Slice