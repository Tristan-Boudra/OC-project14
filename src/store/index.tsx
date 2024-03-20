import { configureStore } from "@reduxjs/toolkit";
import createEmployeeReducer from "../slices/createEmployeeSlice";

/**
 * Configures the Redux store with the createEmployee reducer.
 */
export default configureStore({
  reducer: {
    createEmployee: createEmployeeReducer,
  },
});