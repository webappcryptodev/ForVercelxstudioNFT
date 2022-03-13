import { Link } from "react-router-dom";
import truncate from "truncate";
import { SecButton } from "../../components/button/Button";
import { BsText, Heading } from "../../constants/text";
import creators from "../../constants/hotUsers.json";
import { PROFILE_IMAGE_URL } from "../../store/routes/routes";
import Avatar from "../../components/Avatar";

// Single creator component
export const SingleCreator = ({
  avatar,
  color,
  image,
  index,
  creator,
  to,
  sales,
  fig,
}) => (
  <div className="border shadow hover:shadow-new py-8 px-3">
    <div className="flex flex-col space-y-4 justify-center items-center">
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
        <p className=" absolute top-1/2 -translate-y-1/2 ">
          <span className="text-xs font-semibold bg-tag-dark text-white py-1 px-2 rounded-full absolute top-1/2 -translate-y-1/2 -left-3 inline-block">
            {index}
          </span>
        </p>
      </div>

      <div className="flex flex-col space-y-2">
        <BsText>
          <Link to={to}>{truncate(`@${creator}`, 15)}</Link>
        </BsText>
        <p className="text-sm font-semibold text-center">
          {sales} sales
        </p>
      </div>
    </div>
  </div>
);

// Intro section
const PopularIntro = ({ profiles, account }) => {
  console.log("aaadd", profiles);
  return (
    <div className="sm:py-28 py-12">
      <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 sm:justify-between items-center">
        <div className="flex flex-col max-w-xl text-center sm:text-left space-y-4">
          <Heading>
            Popular <span className="text-tag-brand lg:text-5xl">Creators</span>{" "}
          </Heading>
          <p className="font-semibold leading-relaxed pt-3">
            I make art with the simple goal of giving you something pleasing to
            look at for a few seconds.
          </p>
        </div>
        <SecButton to="/create-collections">Be one of our creators</SecButton>
      </div>
      <div className="mt-10 grid grid-cols-12 gap-7">
        {profiles.map((crt, i) => (
          <div
            className="sm:col-span-6 lg:col-span-3 col-span-full"
            key={crt?._id}
          >
            <SingleCreator
              avatar={
                crt?.image
                  ? `${PROFILE_IMAGE_URL}/${crt?.image}`
                  : require(`../../assets/img/avatars/${creators[i]?.avatar}`)
              }
              to={
                account && account.toLowerCase() === crt?.address.toLowerCase()
                  ? `/profile/${crt?.address}`
                  : `/creator/${crt?.address}`
              }
              creator={crt?.username || crt?.address}
              index={i}
              sales={crt?.totalSold?.length}
              color={crt?.color}
              image={crt?.image}
              fig={
                crt?.totalSold.length > 0
                  ? {
                      ...crt?.totalSold?.reduce((acc, curr) => ({
                        price: acc?.price + curr.price,
                      })),
                    }?.price
                  : 0
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularIntro;
