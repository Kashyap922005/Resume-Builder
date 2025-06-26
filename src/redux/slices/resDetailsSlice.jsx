import { createSlice } from "@reduxjs/toolkit";

const ResDetailsSlice = createSlice({
  name: "Research Details",
  initialState: {
    resDetails: [
      {
        title: "",
        organization: "",
        type: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  },

  reducers: {
    setResDetails: (state, { payload }) => {
      state.resDetails = payload;
    },
  },
});

export const {setResDetails} = ResDetailsSlice.actions;
export default ResDetailsSlice.reducer;
