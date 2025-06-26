import { createSlice } from "@reduxjs/toolkit";

const SkiDetailsSlice = createSlice({
  name: "Skill Details",
  initialState: {
    skiDetails: [
      {
        skill: "",
      },
    ],
  },

  reducers: {
    setSkiDetails : (state, {payload}) => {
        state.skiDetails = payload;
    },
  },
});

export const {setSkiDetails} = SkiDetailsSlice.actions;
export default SkiDetailsSlice.reducer;
