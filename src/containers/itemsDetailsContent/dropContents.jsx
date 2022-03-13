import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
// import { BsLink } from "../../constants/Link";
import icon1 from "../../assets/img/icons/ipfs.svg";
import icon2 from "../../assets/img/icons/ether.png";
import { NFT_META_URL } from "../../store/routes/routes";
import {nftaddress, ethnftaddress} from "../../store/web3/testnet/config"

export const ProofDrop = ({metadata, token, chain}) => (
  <Dropdown
    color="blueGray"
    placement="bottom-start"
    buttonText="View proof of authenticity"
    buttonType="filled"
    size="sm"
    rounded={false}
    block={false}
    ripple="light"
    className="!bg-tag-dark !rounded-none hover:bg-tag-darkOpac !px-3 py-2 !text-medium"
  >
    <DropdownItem color="blueGray">
      <a className='text-base font-semibold' rel='noreferrer' target='_blank' href={`${NFT_META_URL}/${metadata}`}>
        <span className="flex items-center space-x-2">
          <img src={icon1} loading="lazy" alt="" className="h-6 w-6" />
          <span>View on IPFS</span>
          <span className=" text-tag-brand">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </span>
      </a>
    </DropdownItem>{
      chain === 80001 ? <DropdownItem color="blueGray">
      <a className='text-base font-semibold' rel='noreferrer' target='_blank' href={`https://mumbai.polygonscan.com/token/${nftaddress}?a=${token}`}>
        <span className="flex items-center space-x-2">
          <img src={icon2} loading="lazy" alt="" className="h-6 w-6" />
          <span>View on Polygonscan</span>
          <span className=" text-tag-brand">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </span>
      </a>
    </DropdownItem>:

    <DropdownItem color="blueGray">
      <a className='text-base font-semibold' rel='noreferrer' target='_blank' href={`https://ropsten.etherscan.io/token/${ethnftaddress}?a=${token}`}>
        <span className="flex items-center space-x-2">
          <img src={icon2} loading="lazy" alt="" className="h-6 w-6" />
          <span>View on Etherscan</span>
          <span className=" text-tag-brand">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </span>
      </a>
    </DropdownItem>
    }
  </Dropdown>
);
