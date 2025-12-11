import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./feauters/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
