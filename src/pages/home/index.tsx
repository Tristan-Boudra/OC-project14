import FormCreateEmployee from "../../components/formCreateEmployee";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="text-center mt-5">
        <h1>Page Home</h1>
        <section>
            <FormCreateEmployee />
        </section>
    </div>
  );
}