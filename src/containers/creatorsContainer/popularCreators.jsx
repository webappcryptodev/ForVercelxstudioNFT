import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdHeading } from "../../constants/text";
import HotUser from "../landingPage/hotSection/hotUser";

const PopularCreators = ({ profiles, account }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".creators_anim1", {
      x: 500,
      duration: 3,
      scrollTrigger: {
        trigger: ".dribbble_svg",
        scrub: true,
      },
    });

    gsap.to(".creators_anim2", {
      x: -500,
      duration: 3,
      scrollTrigger: {
        trigger: ".dribbble_svg",
        scrub: true,
      },
    });
    gsap.to(".creators_anim3", {
      x: 500,
      duration: 3,
      scrollTrigger: {
        trigger: ".dribbble_svg",
        scrub: true,
      },
    });
  });
  return (
    <div className="pb-28">
      <div className="text-center mb-6">
        <MdHeading>Popular Creators</MdHeading>
      </div>
      <div className="flex flex-col space-y-4 w-full overflow-x-auto md:overflow-x-clip">
        <div className="flex justify-center creators_anim1 space-x-4">
          {profiles.slice(0, 15).map((item, i) => (
            <div key={i}>
              <div className="shadow-new p-4 mx-auto w-[250px]">
                <HotUser
                  image={item?.image}
                  color={item?.color}
                  username={item?.username || item?.address}
                  to={
                    account &&
                    account.toLowerCase() === item?.address.toLowerCase()
                      ? `/profile/${item?.address}`
                      : `/creator/${item?.address}`
                  }
                  nft={item?.followers}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCreators;
