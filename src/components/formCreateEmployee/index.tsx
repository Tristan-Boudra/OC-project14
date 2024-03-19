import { Select } from "hrnet_plugin_boudra_tristan";
import { ChangeEvent, useState } from "react";
import Modal from "../modal";

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

  // Déclaration des états locaux pour stocker les dates de naissance et de début
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [startDate, setStartDate] = useState<string>("");
  const [dateOfBirthError, setDateOfBirthError] = useState<string>("");
  const [startDateError, setStartDateError] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * A function to validate if a given date string corresponds to a person who is 18 years or older.
   *
   * @param {string} dateString - the date string to be validated
   * @return {boolean} true if the person is 18 years or older, false otherwise
   */
  const validateAge = (dateString: string): boolean => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  };

  /**
   * A function that handles the change of the date of birth input field.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - the event triggered by the input change
   * @return {void} 
   */
  const handleDateOfBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dob = e.target.value;
    setDateOfBirth(dob);
    if (!validateAge(dob)) {
      setDateOfBirthError("You must be at least 18 years old.");
    } else {
      setDateOfBirthError("");
    }
  };

  /**
   * A function that handles the change event for the start date input field.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - the event object containing the input element
   * @return {void} 
   */
  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const start = e.target.value;
    setStartDate(start);
    if (!validateAge(start)) {
      setStartDateError("You must be at least 18 years old to start.");
    } else {
      setStartDateError("");
    }
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
                <input type="date" className="border rounded-lg pl-3" placeholder="Date of Birth" id="dateOfBirth" onChange={handleDateOfBirthChange} />
                {dateOfBirthError && <span className="text-red-500">{dateOfBirthError}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-left">Street</label>
                <input type="text" className="border rounded-lg pl-3" placeholder="Street" id="street" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">State</label>
                <Select options={states} defaultOptionText="Select State" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">Department</label>
                <Select options={states} defaultOptionText="Select State" />
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5 md:mt-0">
              <div className="flex flex-col">
                <label className="text-left">Last Name</label>
                <input type="text" className="border rounded-lg pl-3" placeholder="Last Name" id="lastName" />
              </div>
              <div className="flex flex-col">
                <label className="text-left">Start Date</label>
                <input type="date" className="border rounded-lg pl-3" placeholder="Start Date" id="startDate" onChange={handleStartDateChange} />
                {startDateError && <span className="text-red-500">{startDateError}</span>}
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