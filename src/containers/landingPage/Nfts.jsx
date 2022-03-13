import { useEffect } from "react";
import { BsText, MdHeading } from "../../constants/text";
import av1 from "../../assets/img/avatars/avatar_1.png";
import av2 from "../../assets/img/avatars/avatar_2.png";
// import item from "../../assets/img/items/item_14.png";
import PopularCard from "../../components/cards/popularCard";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { allNftsFn, selectAllNfts } from "./../../store/components/tokens/nft";

import { EmptyCollection } from "../../components/error/Errors";
import { LoaderCard } from "../../components/loader";

const Nfts = ({ AllNfts = [], loadAllNfts }) => {
  // console.log(AllNfts)
  useEffect(() => {
    loadAllNfts();
  }, [loadAllNfts]);
  // console.log(AllNfts, 'nft');
  const Nft = () => {
    if (!AllNfts) {
      return <>
      <div className="grid grid-cols-12 gap-x-5 gap-y-6">
      {[1,2,3].map((idx) => (
        <LoaderCard
          key={idx}
        />
      ))}
    </div></>;
    } 
     else if (AllNfts.length <= 0) {
        return  <EmptyCollection />
    ;
    }
   else {
      return (
        <div className="grid grid-cols-12 gap-5">
        {AllNfts.filter((nft) => nft.listed === true).slice(0,8).map((nft) => (
          <PopularCard
            key={nft?._id}
            item={nft?.item_id}
            src={nft?.image}
            username={nft?.profile?.address}
            profileColor={nft?.profile?.color}
            profileImage={nft?.profile?.image}
            av1={nft?.profile?.image || av1}
            av2={av2}
            nft={nft?.price}
            title={nft?.name}
            state={{ nft, profile: nft?.profile }}
            itemDetailsLink={`item-details/${nft?._id}`}
            // countdown={true}
          />
        ))}
      </div>
      );
    }
  };
  return (
    <section
      className="pb-28 mt-20"
      // data-aos="fade-up"
      // data-aos-easing="linear"
      // data-aos-duration="1500"
    >
      <div className="flex flex-col space-y-3 mb-7 ">
        <MdHeading className="text-tag-dark" text="NFTs" />
        <BsText
          className="text-tag-text"
          text="Become now a part in the most innovative and revolutinary NFT marketplace. Buy, Sell, and Mint NFTs for free."
        />
      </div>
     <Nft/>
    </section>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  loadAllNfts: () => dispatch(allNftsFn()),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  AllNfts: selectAllNfts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Nfts);
