import { createSlice } from "@reduxjs/toolkit";

const AccDetailsSlice = createSlice({
  name: "Accomplishment Details",
  initialState: {
    accDetails: [
      {
        company: "",
        accomplishment: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  },

  reducers: {
    setAccDetails: (state, { payload }) => {
      state.accDetails = payload;
    },
  },
});

export const {setAccDetails} = AccDetailsSlice.actions;
export default AccDetailsSlice.reducer;
