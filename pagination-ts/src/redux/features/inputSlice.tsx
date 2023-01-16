import { createSlice } from "@reduxjs/toolkit";

interface InputValue {
  value: string;
}

const initialState: InputValue = {
  value: "",
};

export const inputSlice = createSlice({
  name: "inputValuex",
  initialState,
  reducers: {
    inputValueChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { inputValueChange } = inputSlice.actions;
export default inputSlice.reducer;

