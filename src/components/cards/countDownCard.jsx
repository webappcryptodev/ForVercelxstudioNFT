import { Link } from "react-router-dom";
import Progress from "@material-tailwind/react/Progress";
import item7 from "../../assets/img/items/item_5.png";
import avatar3 from "../../assets/img/avatars/avatar_3.png";
import avatar4 from "../../assets/img/avatars/avatar_4.png";
import CountDownTimer from "../countDown/countDown";

const CountDownCard = ({ title, to, username, nft }) => {
  return (
    <div className="lg:col-span-4 col-span-full group" data-aos="fade-up">
      <div className="bg-tag-dark overflow-hidden p-4 trans mb-8">
        <div className="flex flex-col space-y-4 relative">
          <div className="relative z-0">
            <div className="overflow-hidden">
              <img
                src={item7}
                loading="lazy" alt=""
                className="object-fit h-[300px] scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-3 border border-gray-700 z-10"
              />
            </div>
            <CountDownTimer />

            <div className="">
              <Progress color="deepOrange" value="60" percentage={false} />
            </div>
            {/* <div className="flex">
              <div className="z-40 bottom-3.5 left-3.5 right-3.5 !bg-white !bg-opacity-80 flex items-center rounded-none">
              <div
                className="h-1/2  ml-1 text-white bg-tag-brand"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div> */}
          </div>
          <h6 className="font-semibold">
            <Link className="lg:text-lg" to="/">
              {title}
            </Link>
          </h6>
          <hr />
          <div className="flex justify-between items-center">
            <Link to="/profile" className="flex items-center space-x-4">
              <div className="flex -space-x-4">
                <img
                  src={avatar4}
                  loading="lazy" alt="Avatar"
                  className="h-8 w-8 object-fit rounded-full border"
                />
                <img
                  src={avatar3}
                  loading="lazy" alt="Avatar"
                  className="h-8 w-8 object-fit rounded-full border"
                />
              </div>
              <p className="text-sm font-semibold">@{username}</p>
            </Link>
            <Link to="/#" className="space-x-3">
              <p className="!text-tag-red text-sm font-semibold font-sora">
                {nft}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountDownCard;
