import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";

/**
 * Renders a DataTable component for displaying employee data.
 * @returns {JSX.Element} The DataTableEmployee component.
 */
export default function DataTableEmployee() {
  const employees = useSelector((state: any) => state.createEmployee.employees);

  /**
  Formats a date string into the format MM-DD-YYYY.
  @param {string} dateString - The date string to be formatted.
  @returns {string} The formatted date string.
 */
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <div className="mt-10 px-4 md:px-0">
      <div className="overflow-x-auto">
        <DataTable
          value={employees}
          paginator
          stripedRows
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "70rem" }}
          className="w-full"
        >
          <Column
            field="firstName"
            sortable
            header="First Name"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
          ></Column>
          <Column
            field="lastName"
            sortable
            header="Last Name"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
          ></Column>
          <Column
            field="dateOfBirth"
            sortable
            header="Date of Birth"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
            body={(rowData: any) => formatDate(rowData.dateOfBirth)}
          ></Column>
          <Column
            field="startDate"
            sortable
            header="Start Date"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
            body={(rowData: any) => formatDate(rowData.startDate)}
          ></Column>
          <Column
            field="department"
            sortable
            header="Department"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
          ></Column>
          <Column
            field="street"
            sortable
            header="Street"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
          ></Column>
          <Column
            field="city"
            sortable
            header="City"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
          ></Column>
          <Column
            field="state"
            sortable
            header="State"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
          ></Column>
          <Column
            field="zipCode"
            sortable
            header="Zip Code"
            style={{ width: "11%" }}
            bodyStyle={{ textAlign: "left" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
