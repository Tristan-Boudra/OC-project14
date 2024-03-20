import { createSlice } from "@reduxjs/toolkit";

/**
 * Interface defining the shape of employee data.
 */
interface EmployeeData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

/**
 * Initial state for the createEmployee slice.
 */
const initialState = {
  employees: [] as EmployeeData[],
};

/**
 * Slice for managing the createEmployee state.
 */
const createEmployeeSlice = createSlice({
  name: "createEmployee",
  initialState,
  reducers: {
    /**
     * Action to add an employee to the state.
     * @param {object} state - The current state.
     * @param {object} action - The action object containing the payload.
     */
    setAddEmployee(state, action) {
      state.employees.push(action.payload as EmployeeData);
    },
  },
});

/**
 * Exporting actions and reducer from the createEmployee slice.
 */
export const { setAddEmployee } = createEmployeeSlice.actions;
export default createEmployeeSlice.reducer;
