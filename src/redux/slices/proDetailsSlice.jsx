import { createSlice } from "@reduxjs/toolkit";

const ProDetailsSlice = createSlice({
  name: "Project Details",
  initialState: {
    proDetails: [
      {
        company: "",
        project: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ],
  },

  reducers: {
    setProDetails: (state, { payload }) => {
      state.proDetails = payload;
    },
  },
});

export const { setProDetails } = ProDetailsSlice.actions;
export default ProDetailsSlice.reducer;
