import { configureStore } from "@reduxjs/toolkit";
import Navigationbarslice from "./slices/Navigationbarslice";

const store = configureStore({
  reducer: {
    navigationbar:Navigationbarslice
  },
});

export default store;
