import { configureStore } from "@reduxjs/toolkit";
import BasicDetailsSlice from "./slices/basicDetailsSlice";
import EduDetailsSlice from "./slices/eduDetailsSlice";
import ExpDetailsSlice from "./slices/expDetailsSlice";
import ProDetailsSlice from "./slices/proDetailsSlice";
import CertDetailsSlice from "./slices/certDetailsSlice";
import ResDetailsSlice from "./slices/resDetailsSlice";
import AccDetailsSlice from "./slices/accDetailsSlice";
import SkiDetailsSlice from "./slices/skillDetailsSlice";
import LangDetailsSlice from "./slices/langDetailsSlice";

const store = configureStore({
  reducer: {
    basicDetails: BasicDetailsSlice,
    eduDetails : EduDetailsSlice,
    expDetails : ExpDetailsSlice,
    proDetails : ProDetailsSlice,
    certDetails : CertDetailsSlice,
    resDetails : ResDetailsSlice,
    accDetails : AccDetailsSlice,
    skiDetails : SkiDetailsSlice,
    langDetails : LangDetailsSlice
  },
});

export default store;