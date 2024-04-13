import { createSlice } from "@reduxjs/toolkit";
type ClientInterFace = {
  openModalPost: boolean;
};
const initialState: ClientInterFace = {
  openModalPost: false,
};
const slice = createSlice({
  name: "client",
  initialState,
  reducers: {
    actionModalPost: (state) => {
      state.openModalPost = !state.openModalPost;
    },
  },
});
export const {
    actionModalPost
} = slice.actions
export default slice.reducer
