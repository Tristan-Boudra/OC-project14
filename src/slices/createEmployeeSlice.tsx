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

// Adding default employees
const defaultEmployees: Employee[] = [
  {
    firstName: "Victor",
    lastName: "Dupont",
    dateOfBirth: "1990-01-01",
    startDate: "2020-01-01",
    department: "Operations",
    street: "123 avenue champs elysée",
    city: "Paris",
    state: "Idaho",
    zipCode: "12345",
  },
  {
    firstName: "Jeanne",
    lastName: "Doe",
    dateOfBirth: "1995-02-02",
    startDate: "2021-01-01",
    department: "Supply Chain Management",
    street: "456 Elm St",
    city: "Othertown",
    state: "Arkansas",
    zipCode: "54321",
  },
  {
    firstName: "Tony",
    lastName: "Stark",
    dateOfBirth: "1985-03-03",
    startDate: "2019-01-01",
    department: "Customer Service",
    street: "789 Oak St",
    city: "Los Angeles",
    state: "California",
    zipCode: "67890",
  },
];

// Adding default employees to the initial state
initialState.employees.push(...defaultEmployees);

// Exporting actions and reducer of the slice
export const { setAddEmployee } = createEmployeeSlice.actions;
export default createEmployeeSlice.reducer;
