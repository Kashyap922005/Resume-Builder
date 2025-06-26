import { createSlice } from "@reduxjs/toolkit";

const ExpDetailsSlice = createSlice({
  name: "Experience Details",
  initialState: {
    expDetails: [
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ],
  },

  reducers: {
    setExpDetails: (state, { payload }) => {
      state.expDetails = payload;
    },
  },
});

export const { setExpDetails } = ExpDetailsSlice.actions;
export default ExpDetailsSlice.reducer;
