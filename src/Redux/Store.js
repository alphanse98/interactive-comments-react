import { configureStore } from "@reduxjs/toolkit";
import { slices } from "./Sclice";

export const store = configureStore({
  reducer : slices,
});
