import { Link } from "react-router-dom";
import truncate from "truncate";
import Avatar from "../../../components/Avatar";
const HotUser = ({ color, image, index, username, to, nft }) => (
  <div className="flex space-x-4 items-center">
    <div className="img-box relative">
      <Link to={to}>
      <Avatar
        size="h-20 w-20"
        frst1="Cy"
        lst1="Ng"
        textSize="sm"
        color={color}
        image={image}
      />
      </Link>
      {index ? (
        <p className=" absolute top-1/2 -translate-y-1/2 ">
          <span className="text-xs font-semibold bg-tag-dark py-1 px-2 rounded-full absolute top-1/2 -translate-y-1/2 -left-3 inline-block">
            {index}
          </span>
        </p>
      ) : (
        <></>
      )}
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="text-base font-semibold tracking-wide">
        <Link to={to}>{truncate(`@${username}`, 15)}</Link>
      </h4>
      {/* <p className="!text-tag-brand text-sm font-semibold">{nft} NFTG</p> */}
    </div>
  </div>
);

export default HotUser;
