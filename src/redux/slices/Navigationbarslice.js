import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: [
    {
      navigate: "Where we are",
    },
    {
      navigate: "Where we are",
    },
    {
      navigate: "Where we are",
    },
    {
      navigate: "Where we are",
    },
  ],
};

const Navigationbarslice = createSlice({
    name:'Navigationbar',
    initialState
})

export default Navigationbarslice.reducer;