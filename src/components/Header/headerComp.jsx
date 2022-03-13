import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const NavItem = ({ to, item, className }) => (
  <>
    <NavLink
      end
      to={to}
      className={({ isActive }) =>
        `${className} text-sm xl:text-base font-medium flex items-center px-2  text-gray-200 hover:text-tag-brand transition duration-300 ease-out
        ${isActive ? " text-tag-brand" : ""}`
      }
    >
      {item}
    </NavLink>
  </>
);

export const Search = ({width, bgColor}) => (
  <div className=" relative trans">
    <input
      type="search"
      placeholder="Search"
      className={`pl-3 pr-12 text-sm text-gray-200 xl:text-base ${width} h-12 ${bgColor} rounded`}
    />
    <button className="absolute right-2 top-1.5 bg-gray-50 text-gray-700 px-2 pt-2 rounded">
      <FontAwesomeIcon icon={faSearch} size='3x' />
    </button>
  </div>
);