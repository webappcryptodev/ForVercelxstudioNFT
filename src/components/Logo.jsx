import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Logo = ({className}) => (
  <Link
    to="/"
    aria-label="Logo"
    className={`${className}`}
  >
    <img src={logo} loading="lazy" alt="logo" className={`img-flui w-full h-10`} />
    {/* <BsText text="LOGO" className={`text-black font-bold ${className}`} /> */}
  </Link>
);


export default Logo;