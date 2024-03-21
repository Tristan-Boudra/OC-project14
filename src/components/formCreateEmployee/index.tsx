import { Select } from "hrnet_plugin_boudra_tristan";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddEmployee } from "../../slices/createEmployeeSlice";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { Dialog } from "primereact/dialog";

export default function FormCreateEmployee() {
  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  const department = [
    {
      name: "Engineering",
      abbreviation: "Engineering",
    },
    {
      name: "Finance",
      abbreviation: "Finance",
    },
  ];

  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [dateBirth, setDateBirth] = useState<Nullable<Date>>(null);
  const [startDate, setStartDate] = useState<Nullable<Date>>(null);
  const [visible, setVisible] = useState(false);
  const [dialogHeader, setDialogHeader] = useState("");
  const [dialogContent, setDialogContent] = useState("");
  const [userSaved, setUserSaved] = useState(false);

  /**
   * A function that handles the change event for the start date input field.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - the event object containing the input element
   * @return {void}
   */
  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (userSaved) {
      setDialogHeader("Error");
      setDialogContent("User is already saved.");
      setVisible(true);
      return;
    }

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

    if (
      !dateBirth ||
      !startDate ||
      !selectedState ||
      !selectedDepartment ||
      !firstNameInput?.value ||
      !lastNameInput?.value ||
      !streetInput?.value ||
      !cityInput?.value ||
      !zipCodeInput?.value
    ) {
      setDialogHeader("Error");
      setDialogContent("Please fill in all the required fields");
      setVisible(true);
    } else {
      const firstName = firstNameInput?.value;
      const lastName = lastNameInput?.value;
      const dateOfBirth = dateBirth?.toISOString();
      const startDateValue = startDate?.toISOString();
      const street = streetInput?.value;
      const city = cityInput?.value;
      const zipCode = zipCodeInput?.value;

      const employeeData = {
        firstName,
        lastName,
        dateOfBirth,
        startDate: startDateValue,
        department: selectedDepartment,
        street,
        city,
        state: selectedState,
        zipCode,
      };

      dispatch(setAddEmployee(employeeData));
      setUserSaved(true);
      setDialogHeader("Confirmation");
      setDialogContent("Employee created successfully !");
      setVisible(true);
    }
  };

  /**
   * Handles the state change when a selection is made.
   *
   * @param {any} selectedOption - The selected option.
   */
  const handleStateChange = (selectedOption: any) => {
    setSelectedState(selectedOption.name);
  };

  /**
   * A function to handle department change.
   *
   * @param {any} selectedOption - the selected option
   * @return {void}
   */
  const handleDepartmentChange = (selectedOption: any) => {
    setSelectedDepartment(selectedOption.name);
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
      setDialogHeader("Error");
      setDialogContent("You must be at least 18 years old !");
      setVisible(true);
      setDateBirth(null);
    } else {
      setDateBirth(selectedDate);
    }
  };

  const handleStartDateChange = (value: any) => {
    if (!value) {
      setStartDate(null);
      return;
    }

    const selectedDate = new Date(value);
    const today = new Date();
    if (selectedDate > today) {
      setDialogHeader("Error");
      setDialogContent("Start date cannot be in the future !");
      setVisible(true);
      setStartDate(null);
    } else {
      setStartDate(selectedDate);
    }
  };

  return (
    <>
      <form className="md:flex md:flex-col border p-5 rounded-lg mt-5">
        <h1>Form Create Employee</h1>
        <div className="md:flex md:flex-row md:justify-around md:w-full md:mt-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-left">First Name</label>
              <input
                type="text"
                className="border rounded-lg pl-3"
                placeholder="First Name"
                id="firstName"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left">Date of Birth</label>
              <div className="card flex justify-content-center">
                <Calendar
                  value={dateBirth}
                  onChange={(e) => handleDateOfBirthChange(e.value)}
                  className="w-full border rounded-lg pl-3"
                  placeholder="Date of Birth"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-left">Street</label>
              <input
                type="text"
                className="border rounded-lg pl-3"
                placeholder="Street"
                id="street"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left">State</label>
              <Select
                options={states}
                defaultOptionText="Select State"
                onChange={handleStateChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left">Department</label>
              <Select
                options={department}
                defaultOptionText="Select Department"
                onChange={handleDepartmentChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5 md:mt-0">
            <div className="flex flex-col">
              <label className="text-left">Last Name</label>
              <input
                type="text"
                className="border rounded-lg pl-3"
                placeholder="Last Name"
                id="lastName"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left">Start Date</label>
              <Calendar
                value={startDate}
                onChange={(e) => handleStartDateChange(e.value)}
                className="w-full border rounded-lg pl-3"
                placeholder="Start Date"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left">City</label>
              <input
                type="text"
                className="border rounded-lg pl-3"
                placeholder="City"
                id="city"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-left">Zip Code</label>
              <input
                type="text"
                className="border rounded-lg pl-3"
                placeholder="Zip Code"
                id="zipCode"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="text-white bg-primary rounded-lg px-8 py-2 w-full md:w-max"
            onClick={handleSave}
          >
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
