import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: [
    {
      navigate: "Where we are",
    },
    {
      navigate: "Our Projects",
    },
    {
      navigate: "Gallary",
    },
    {
      navigate: "Connect With Us",
    },
  ],
};

const Navigationbarslice = createSlice({
    name:'Navigationbar',
    initialState
})

export default Navigationbarslice.reducer;