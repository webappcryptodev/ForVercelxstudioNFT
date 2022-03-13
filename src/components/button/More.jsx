import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "@material-tailwind/react/Button";

const MoreButton = ({ to }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const ref = useRef(null);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);
  return (
    <div className="more relative" ref={ref}>
      <div className="icon">
        <Button
          buttonType="link"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
          onClick={handleToggle}
          className="!bg-gray-800 focus:outline-none px-5 py-3 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 !rounded-none text-white hover:text-white text-base"
        >
          <FontAwesomeIcon icon={faEllipsisH} size="2x" />
        </Button>
      </div>
      <div
        className={`transition-all duration-300 ease-linear absolute -right-0 shadow-new-3 z-50 ${toggle ? "opacity-100 scale-100": "opacity-0 scale-0"}`}
      >
        <ul className="flex flex-col space-y-4 bg-gray-800 py-3 px-4 mt-3">
          <li>
            <Link to={to} className="flex items-center text-white space-x-3 text-base">
              <i className="fa fa-flag text-base" />
              <span className='text-base'>Report</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoreButton;