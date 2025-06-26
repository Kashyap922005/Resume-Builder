import { createSlice } from "@reduxjs/toolkit";

const BasicDetailsSlice = createSlice({
  name: "Basic Details",
  initialState: {
    basicDetails: {
      firstName: "",
      middleName: "",
      lastName: "",
      location: "",
      email: "",
      phone: 0,
      profile: "",
      linkedin: "",
      github: "",
      proffesionalSummary: "",
    },
  },

  reducers: {
    addBasicDetails: (state, { payload }) => {
      state.basicDetails = payload;
    },
  },
});

export const { addBasicDetails } = BasicDetailsSlice.actions;
export default BasicDetailsSlice.reducer;