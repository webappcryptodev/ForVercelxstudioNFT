import { Link } from "react-router-dom"

export const BsLink = ({ to, children }) => (
  <Link to={to} className="text-base font-semibold">{children}</Link>
);

export const SmLink = ({ to, children }) => (
  <Link to={to} className="text-[15px] font-roboto">
    {children}
  </Link>
);