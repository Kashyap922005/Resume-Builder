import { createSlice } from "@reduxjs/toolkit";

const EduDetailsSlice = createSlice({
  name: "Education Details",
  initialState: {
    eduDetails: [
      {
        type: "",
        board: "",
        school: "",
        hallticket: "",
        startDate: "",
        endDate: "",
        yearofPass: "",
        grade: "",
        city: "",
        stream: "",
        description: "",
      },
    ],
  },

  reducers: {
    setEduDetails: (state, { payload }) => {
      state.eduDetails = payload;
    },
  },
});

export const { setEduDetails } = EduDetailsSlice.actions;
export default EduDetailsSlice.reducer;
