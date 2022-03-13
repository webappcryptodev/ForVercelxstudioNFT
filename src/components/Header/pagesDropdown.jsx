// import { Link } from "react-router-dom";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import { BsLink } from "../../constants/Link";

const PagesDropdown = () => (
  <Dropdown
    color="amber"
    placement="bottom-start"
    buttonText="More"
    buttonType="link"
    size="regular"
    rounded={false}
    block={false}
    ripple="light"
    className="!text-black !font-medium text-sm hover:bg-white active:bg-white focus:bg-white xl:text-base bg-white !px-2 py-0"
  >
    <DropdownItem color="amber">
      <BsLink to="/activity">Activity</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/edit-profile">Edit Profile</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/item-details">Item Details</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/live-auctions">Live Auctions</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/upcoming-projects">Upcoming Projects</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/ranking">Ranking</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/no-result">No Result</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/upload-types">Upload Types</BsLink>
    </DropdownItem>
    <DropdownItem color="amber">
      <BsLink to="/connect-wallet">Connect Wallet</BsLink>
    </DropdownItem>
  </Dropdown>
);

export default PagesDropdown;
