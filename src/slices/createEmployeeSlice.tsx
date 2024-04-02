import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface defining the structure of an employee
export interface Employee {
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

// Interface defining the type of slice state
export interface CreateEmployeeState {
  employees: Employee[];
}

// Initial state of the slice
const initialState: CreateEmployeeState = {
  employees: [],
};

// Slice to manage the state of employees
const createEmployeeSlice = createSlice({
  name: "createEmployee",
  initialState,
  reducers: {
    setAddEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
    },
  },
});

// Exporting actions and reducer of the slice
export const { setAddEmployee } = createEmployeeSlice.actions;
export default createEmployeeSlice.reducer;
