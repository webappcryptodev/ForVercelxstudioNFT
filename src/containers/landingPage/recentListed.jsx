import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdHeading } from "../../constants/text";
import av1 from "../../assets/img/avatars/avatar_1.png";
import av2 from "../../assets/img/avatars/avatar_2.png";
// import item from "../../assets/img/items/item_11.png";
import PopularCard from "../../components/cards/popularCard";
import { PrimaryButton } from "../../components/button/Button";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { EmptyCollection } from "../../components/error/Errors";
import { LoaderCard } from "../../components/loader";
import {
  allRecentNftsFn,
  selectAllRecentNfts,
} from "./../../store/components/tokens/nft";
// const PopularCardd = React.lazy(() => import('../../components/cards/popularCard'));
const RecentlyListed = ({ AllRecentNfts, loadAllRecentNfts }) => {
  useEffect(() => {
    loadAllRecentNfts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RecentList = () => {
    if (!AllRecentNfts) {
      return <>
      <div className="grid grid-cols-12 gap-x-5 gap-y-6">
      {[1,2,3,4,].map((idx) => (
        <LoaderCard
          key={idx}
        />
      ))}
    </div></>;
    } 
    if (AllRecentNfts.length <= 0) {
      return  <EmptyCollection />;
    }
   else {
      return (
        <div className="grid grid-cols-12 gap-x-5 gap-y-6">
        {AllRecentNfts.filter((nft) => nft.listed === true).slice(0,8).map((nft) => (
          <PopularCard
            key={nft?._id}
            item={nft?.item_id}
            src={nft?.image}
            profileColor={nft?.profile?.color}
            profileImage={nft?.profile?.image}
            username={nft?.profile?.address || nft?.profile?.address}
            av1={nft?.profile?.image || av1}
            av2={av2}
            nft={nft?.price}
            title={nft?.name}
            state={{ nft: nft, profile: nft?.profile }}
            itemDetailsLink={`item-details/${nft?._id}`}
          />
        )).reverse()}
      </div>
      );
    }
  };

  return (
    <section
      className="pb-28"
      // data-aos="fade-up"
      // data-aos-easing="linear"
      // data-aos-duration="1500"
    >
      <div className="flex flex-col space-y-3 mb-7">
        <MdHeading>
          Recently{" "}
          <span className="text-tag-brand lg:text-4xl text-2xl">Listed</span>
        </MdHeading>
      </div>
      <RecentList/>
      {AllRecentNfts.filter((nft) => nft.listed === true).length <= 0
      ? '' :
   
      <div className="max-w-xs mx-auto mt-12 px-4 items-centerv">
        <PrimaryButton className="transition ease-out delay-300 !py-3 w-full rounded border border-tag-brand hover:!text-white !text-tag-brand !bg-white hover:!bg-tag-brand ">
          <Link to="/nft-page" state={{AllRecentNfts}} className="text-lg">
            View All
          </Link>
        </PrimaryButton>
      </div>   }
    </section>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  loadAllRecentNfts: () => dispatch(allRecentNftsFn()),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  AllRecentNfts: selectAllRecentNfts,
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyListed);
