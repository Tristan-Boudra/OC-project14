import { Select } from "hrnet_plugin_boudra_tristan";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddEmployee } from "../../slices/createEmployeeSlice";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { Dialog } from "primereact/dialog";
import { states } from "../../data/states";
import { department } from "../../data/department";

/**
 * A function that handles the change event for the start date input field.
 *
 * @param {ChangeEvent<HTMLInputElement>} e - the event object containing the input element
 * @return {void}
 */
export default function FormCreateEmployee() {
  interface Option {
    name: string;
    abbreviation: string;
  }

  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState<Option | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<Option | null>(
    null,
  );
  const [selectedStateOption, setSelectedStateOption] = useState<Option | null>(
    null,
  );
  const [selectedDepartmentOption, setSelectedDepartmentOption] =
    useState<Option | null>(null);
  const [dateBirth, setDateBirth] = useState<Nullable<Date>>(null);
  const [startDate, setStartDate] = useState<Nullable<Date>>(null);
  const [visible, setVisible] = useState(false);
  const [dialogHeader, setDialogHeader] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userSaved, setUserSaved] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stateValue, setStateValue] = useState<string>("");
  const employees = useSelector((state: any) => state.createEmployee.employees);

  /**
   * A function that handles the change event for the start date input field.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - the event object containing the input element
   * @return {void}
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regex = /^[a-zA-ZÀ-ÿ\s',\d-]*$/;
    const isValid = regex.test(value);
    if (!isValid) {
      showModalError("Error", "Invalid input !");
      e.target.value = "";
    } else {
      setStateValue(value);
    }
  };

  /**
   * Handle the save action for the form, performs validation and dispatches the employee data if valid.
   *
   * @param {React.FormEvent} e - the form event triggering the save action
   * @return {void}
   */
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const firstNameInput = document.getElementById(
      "firstName",
    ) as HTMLInputElement | null;
    const lastNameInput = document.getElementById(
      "lastName",
    ) as HTMLInputElement | null;
    const streetInput = document.getElementById(
      "street",
    ) as HTMLInputElement | null;
    const cityInput = document.getElementById(
      "city",
    ) as HTMLInputElement | null;
    const zipCodeInput = document.getElementById(
      "zipCode",
    ) as HTMLInputElement | null;

    const form = formRef?.current;

    if (
      !dateBirth ||
      !startDate ||
      !selectedState ||
      !selectedDepartment ||
      !firstNameInput?.value ||
      !lastNameInput?.value ||
      !streetInput?.value ||
      !cityInput?.value ||
      !zipCodeInput?.value ||
      !form?.checkValidity()
    ) {
      showModalError("Error", "Please fill in all the required fields");
    } else {
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
      const dateOfBirth = dateBirth.toISOString();
      const startDateValue = startDate.toISOString();
      const street = streetInput.value;
      const city = cityInput.value;
      const zipCode = zipCodeInput.value;

      // Check if employee already exists
      const employeeExists = employees.some((employee: any) => {
        return (
          employee.firstName === firstName &&
          employee.lastName === lastName &&
          employee.dateOfBirth === dateOfBirth &&
          employee.startDate === startDateValue &&
          employee.street === street &&
          employee.city === city &&
          employee.state === selectedState &&
          employee.zipCode === zipCode
        );
      });

      if (employeeExists) {
        showModalError("Error", "Employee already exists !");
        firstNameInput.value = "";
        lastNameInput.value = "";
        streetInput.value = "";
        cityInput.value = "";
        zipCodeInput.value = "";
        setUserSaved(false);
      } else {
        const employeeData = {
          firstName,
          lastName,
          dateOfBirth,
          startDate: startDateValue,
          department: selectedDepartment.name,
          street,
          city,
          state: selectedState.name,
          zipCode,
        };

        dispatch(setAddEmployee(employeeData));
        setDateBirth(null);
        setStartDate(null);
        setUserSaved(true);
        setSelectedDepartmentOption(null);
        setSelectedStateOption(null);
        showModalError("Success", "Employee created successfully !");
        form.reset();
      }
    }
  };

  /**
   * Displays a modal with the given header and content.
   *
   * @param {string} header - The header of the modal.
   * @param {string} content - The content of the modal.
   * @return {void} This function does not return anything.
   */
  const showModalError = (header: string, content: string) => {
    setDialogHeader(header);
    setDialogContent(content);
    setVisible(true);
  };

  /**
   * Handles the state change when a selection is made.
   *
   * @param {any} selectedOption - The selected option.
   */
  const handleStateChange = (selectedOption: Option | null) => {
    setSelectedStateOption(selectedOption);
    if (selectedOption && selectedOption.name) {
      setSelectedState(selectedOption);
    } else {
      setSelectedState(null);
    }
  };

  /**
   * A function to handle department change.
   *
   * @param {any} selectedOption - the selected option
   * @return {void}
   */
  const handleDepartmentChange = (selectedOption: Option | null) => {
    setSelectedDepartmentOption(selectedOption);
    if (selectedOption && selectedOption.name) {
      setSelectedDepartment(selectedOption);
    } else {
      setSelectedDepartment(null);
    }
  };

  /**
   * A function to check if the selected date is at least 18 years ago.
   *
   * @param {Date} selectedDate - The selected date.
   * @return {boolean} - Whether the selected date is at least 18 years ago.
   */
  const isOver18Years = (selectedDate: Date) => {
    const today = new Date();
    const minAgeDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );
    return selectedDate <= minAgeDate;
  };

  /**
   * A function to handle the change event for the date of birth input field.
   *
   * @param {Date | undefined} value - The selected date.
   */
  const handleDateOfBirthChange = (value: any) => {
    if (!value) {
      setDateBirth(null);
      return;
    }

    const selectedDate = new Date(value);
    if (!isOver18Years(selectedDate)) {
      showModalError("Error", "You must be at least 18 years old !");
      setDateBirth(null);
    } else {
      setDateBirth(selectedDate);
    }
  };

  /**
   * Handles the change event of the start date input.
   *
   * @param {any} value - The new value of the start date.
   * @return {void} This function does not return anything.
   */
  const handleStartDateChange = (value: any) => {
    if (!value) {
      setStartDate(null);
      return;
    }

    const selectedDate = new Date(value);
    const today = new Date();
    if (selectedDate > today) {
      showModalError("Error", "Start date cannot be in the future !");
      setStartDate(null);
    } else {
      setStartDate(selectedDate);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSave}
        className="md:flex md:flex-col border p-5 rounded-lg mt-5"
      >
        <h1 className="text-primary text-2xl">Form Create Employee</h1>
        <div className="md:flex md:flex-row md:justify-around md:w-full md:mt-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-left text-primary ">First Name</label>
              <input
                type="text"
                className="border rounded-lg pl-3 hover:border-primary"
                placeholder="First Name"
                id="firstName"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-primary">Date of Birth</label>
              <div className="card flex justify-content-center">
                <Calendar
                  id="dateOfBirth"
                  value={dateBirth}
                  onChange={(e) => handleDateOfBirthChange(e.value)}
                  className="w-full border rounded-lg pl-3 hover:border-primary"
                  placeholder="Date of Birth"
                  showIcon
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-left text-primary">Street</label>
              <input
                type="text"
                className="border rounded-lg pl-3 hover:border-primary"
                placeholder="Street"
                id="street"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-primary">State</label>
              <Select
                id="selectState"
                options={states}
                defaultOptionText="Select State"
                value={
                  selectedStateOption ? selectedStateOption.abbreviation : ""
                }
                onChange={handleStateChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-primary">Department</label>
              <Select
                id="selectDepartment"
                options={department}
                defaultOptionText="Select Department"
                value={
                  selectedDepartmentOption
                    ? selectedDepartmentOption.abbreviation
                    : ""
                }
                onChange={handleDepartmentChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5 md:mt-0">
            <div className="flex flex-col">
              <label className="text-left text-primary">Last Name</label>
              <input
                type="text"
                className="border rounded-lg pl-3 hover:border-primary"
                placeholder="Last Name"
                id="lastName"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-primary">Start Date</label>
              <Calendar
                id="startDate"
                value={startDate}
                onChange={(e) => handleStartDateChange(e.value)}
                className="w-full border rounded-lg pl-3 hover:border-primary"
                placeholder="Start Date"
                showIcon
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-primary">City</label>
              <input
                type="text"
                className="border rounded-lg pl-3 hover:border-primary"
                placeholder="City"
                id="city"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left text-primary">Zip Code</label>
              <input
                type="text"
                className="border rounded-lg pl-3 hover:border-primary"
                placeholder="Zip Code"
                id="zipCode"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button className="text-white bg-primary rounded-lg px-8 py-2 w-full md:w-max">
            Save
          </button>
        </div>
      </form>
      <Dialog
        header={dialogHeader}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">{dialogContent}</p>
      </Dialog>
    </>
  );
}
