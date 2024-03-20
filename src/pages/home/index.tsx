import FormCreateEmployee from "../../components/formCreateEmployee";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  return (
    <div className="text-center mt-5 flex-grow">
      <section className="flex-grow">
        <FormCreateEmployee />
      </section>
    </div>
  );
}
