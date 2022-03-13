import { Search } from "../../components/Header/headerComp";
import { MdHeading } from "../../constants/text";
import data from "../../constants/discoverCreator.json";
import CreatorCard from "../../components/cards/creatorCard";
import { RecentActiveDrop } from "../../components/common/Dropdown";
import {
  PROFILE_IMAGE_URL,
  PROFILE_COVER_URL,
} from "../../store/routes/routes";

const Discover = ({ profiles, account }) => (
  <div className="pb-28">
    <div className="flex md:justify-between justify-start flex-col md:flex-row space-y-4 md:space-y-0 items-center mb-6">
      <MdHeading>Discover all Creators</MdHeading>
      <Search bgColor="bg-white border" width="sm:w-[400px] h-[50px]" />
      <RecentActiveDrop />
    </div>

    <div className="mt-8 grid grid-cols-12 gap-7">
      {profiles.map((item, i) => (
        <div
          key={i}
          className="md:col-span-6 lg:col-span-4 col-span-full bg-opacity-30 bg-gray-50 px-2 py-2"
        >
          <CreatorCard
            img={
              item?.cover
                ? `${PROFILE_COVER_URL}/${item?.cover}`
                : data[i < data.length - 1 ? i : 0]?.img
            }
            avatar={
              item.image
                ? `${PROFILE_IMAGE_URL}/${item?.image}`
                : data[i]?.avatar
            }
            sold={item?.totalSold?.length}
            colec={item?.collectionsCount}
            views={item?.followers}
            color={item?.color}
            image={item?.image}
            to={
              account && account.toLowerCase() === item?.address.toLowerCase()
                ? `/profile/${item?.address}`
                : `/creator/${item?.address}`
            }
          />
        </div>
      ))}
    </div>
  </div>
);

export default Discover;
