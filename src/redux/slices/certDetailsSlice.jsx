import { createSlice } from "@reduxjs/toolkit";

const CertDetailsSlice = createSlice({
  name: "Experience Details",
  initialState: {
    certDetails: [
      {
        organization: "",
        title: "",
        type : "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  },

  reducers: {
    setCertDetails: (state, { payload }) => {
      state.certDetails = payload;
    },
  },
});

export const { setCertDetails } = CertDetailsSlice.actions;
export default CertDetailsSlice.reducer;
