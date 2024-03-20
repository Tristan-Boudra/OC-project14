/**
 * A function that returns JSX element displaying an error message.
 *
 * @return {JSX.Element} The JSX element displaying an error message.
 */
export default function Error(): JSX.Element {
  return (
    <div className="flex justify-center items-center text-center mt-5 flex-grow">
      <section className="flex-grow">
        <h1>Error</h1>
      </section>
    </div>
  );
}
