import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addReducer = createSlice({
  name: "cv",
  initialState,
  reducers: {
    addCv: (state, action) => {
      state.push(action.payload);
      return state;
    }
  },
});

export const {
  addCv
} = addReducer.actions;
export const reducer = addReducer.reducer;
