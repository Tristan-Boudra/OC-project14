import { Link } from "react-router-dom";

/**
 * Renders a navigation bar with links to the Home and Employee List pages.
 *
 * @return {JSX.Element} The JSX element representing the navigation bar.
 */
export default function EmployeeList(): JSX.Element {
  return (
    <div className="flex flex-row justify-between w-full">
    <h1>HRNet</h1>
    <nav>
      <ul className="flex flex-row gap-5">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/employee-list">Employee List</Link></li>
      </ul>
    </nav>
    </div>
  )
}