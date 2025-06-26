import { createSlice } from "@reduxjs/toolkit";

const LangDetailsSlice = createSlice({
  name: "Language Details",
  initialState: {
    langDetails: [
      {
        language: "",
      },
    ],
  },

  reducers: {
    setLangDetails : (state, {payload}) => {
        state.langDetails = payload;
    },
  },
});

export const {setLangDetails} = LangDetailsSlice.actions;
export default LangDetailsSlice.reducer;
