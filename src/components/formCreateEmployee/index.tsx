import { Select } from "hrnet_plugin_boudra_tristan";
import { useState } from "react";
import Modal from "../modal";
import { useDispatch } from "react-redux";
import { setAddEmployee } from "../../slices/createEmployeeSlice";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function FormCreateEmployee() {
  const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDepartment, setDepartmentState] = useState<string>("");
  const [dateBirth, setDateBirth] = useState<Nullable<Date>>(null);
  const [startDate, setStartDate] = useState<Nullable<Date>>(null);

  /**
   * A function that handles the change event for the start date input field.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - the event object containing the input element
   * @return {void} 
   */
  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const dateOfBirth = dateBirth ? dateBirth.toISOString() : "";
    const startDateValue = startDate ? startDate.toISOString() : "";
    const street = (document.getElementById("street") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLInputElement).value;
    const zipCode = (document.getElementById("zipCode") as HTMLInputElement).value;
  
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
    setModalOpen(true);
  };

    /**
   * Closes the modal by setting modalOpen to false.
   */
  const closeModal = () => {
    setModalOpen(false);
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
    setDepartmentState(selectedOption.name);
  };

  return (
    <>
        <form className="md:flex md:flex-col border p-5 rounded-lg mt-5">
          <h1>Form Create Employee</h1>
          <div className="md:flex md:flex-row md:justify-around md:w-full md:mt-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="text-left">First Name</label>
                <input type="text" className="border rounded-lg pl-3" placeholder="First Name" id="firstName" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">Date of Birth</label>
                <div className="card flex justify-content-center">
                    <Calendar value={dateBirth} onChange={(e) => setDateBirth(e.value)} className="w-full border rounded-lg pl-3" placeholder="Date of Birth" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-left">Street</label>
                <input type="text" className="border rounded-lg pl-3" placeholder="Street" id="street" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">State</label>
                <Select options={states} defaultOptionText="Select State" onChange={handleStateChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-left">Department</label>
                <Select options={states} defaultOptionText="Select Department" onChange={handleDepartmentChange} />
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5 md:mt-0">
              <div className="flex flex-col">
                <label className="text-left">Last Name</label>
                <input type="text" className="border rounded-lg pl-3" placeholder="Last Name" id="lastName" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">Start Date</label>
                <Calendar value={startDate} onChange={(e) => setStartDate(e.value)} className="w-full border rounded-lg pl-3" placeholder="Start Date" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">City</label>
                <input type="text" className="border rounded-lg pl-3" placeholder="City" id="city" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">Zip Code</label>
                <input type="text" className="border rounded-lg pl-3" placeholder="Zip Code" id="zipCode" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button className="text-white bg-primary rounded-lg px-8 py-2 w-full md:w-max" onClick={handleSave}>Save</button>
          </div>
        </form>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <p className="text-center">Employee created successfully !</p>
        </Modal>
    </>
  )
}