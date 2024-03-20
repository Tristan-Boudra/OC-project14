import DataTableEmployee from "../../components/dataTableEmployee";

/**
 * Renders the EmployeeList component.
 *
 * @return {JSX.Element} The rendered EmployeeList component
 */
export default function EmployeeList(): JSX.Element {
  return (
    <div className="text-center mt-5 flex-grow">
      <section className="flex-grow">
        <DataTableEmployee />
      </section>
    </div>
  );
}
