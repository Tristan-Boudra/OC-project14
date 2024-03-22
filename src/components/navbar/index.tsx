import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Renders the Navbar component.
 *
 * @return {JSX.Element} The rendered Navbar component
 */
export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:flex md:flex-row md:justify-between md:w-full px-5 py-2 border rounded-t-none rounded-br-lg rounded-bl-lg shadow-md">
      <div className="flex items-center justify-between">
        <h1>
          <Link className="hover:text-primary" to="/">
            HRNet
          </Link>
        </h1>
        <div className="md:hidden">
          {!menuOpen ? (
            <FontAwesomeIcon
              icon={faBars}
              className="text-gray-600 text-xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className="text-gray-600 text-xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center my-8">
            <li className="hover:text-primary mb-3">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/employee-list" onClick={toggleMenu}>
                Employee List
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <nav className="hidden md:flex md:flex-row md:gap-5">
        <ul className="flex flex-row gap-5">
          <li className="hover:text-primary">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="/employee-list">Employee List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
