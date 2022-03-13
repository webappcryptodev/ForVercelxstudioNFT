import React, { useState } from "react";
import Transition from "../../components/common/Transition";
import PopularCard from "../../components/cards/popularCard";
import { LoaderCard } from "../../components/loader";

import av1 from "../../assets/img/avatars/avatar_1.png";
import av2 from "../../assets/img/avatars/avatar_2.png";
// import item from "../../assets/img/items/item_14.png";
import { MdHeading } from "../../constants/text";
import { EmptyCollection } from "../../components/error/Errors";
import { Link } from "react-router-dom";

const Gallery = ({ data }) => {
  const { profile, nftsList } = data;
  const [openTab, setOpenTab] = useState(1);
  // console.log(nftsList, 'list')

  const All = () => {
    if (!nftsList) {
      return (
        <>
          <div
            data-aos-delay="200"
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7"
          >
            {[1, 2, 3].map((idx) => (
              <LoaderCard key={idx} />
            ))}
          </div>
        </>
      );
    }
    if (nftsList.length <= 0) {
      return <EmptyCollection />;
    } else {
      return (
        <div className="grid grid-cols-12 gap-5">
          {nftsList <= 0 ? (
            <EmptyCollection />
          ) : (
            <>
              {nftsList?.map((collection) => (
                <PopularCard
                  key={collection?._id}
                  src={collection?.image}
                  item={collection?.item_id}
                  username={profile?.address}
                  profileColor={profile?.color}
                  profileImage={collection?.profile?.image}
                  av1={profile?.image || av1}
                  av2={av2}
                  nft={collection?.price}
                  title={collection?.name}
                  state={{ nft: collection, profile: profile }}
                  itemDetailsLink={`/item-details/${collection?._id}`}
                  // countdown={true}
                />
              ))}
            </>
          )}
        </div>
      );
    }
  };

  const Bought = () => {
    if (!nftsList) {
      return (
        <>
          <div
            data-aos-delay="200"
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7"
          >
            {[1, 2, 3].map((idx) => (
              <LoaderCard key={idx} />
            ))}
          </div>
        </>
      );
    }
    if (
      nftsList.filter((el) => el.creator !== window?.ethereum?.selectedAddress)
        .length <= 0
    ) {
      return <EmptyCollection />;
    } else {
      return (
        <div className="grid grid-cols-12 gap-5">
          {nftsList.filter(
            (el) => el.creator !== window?.ethereum?.selectedAddress
          ) <= 0 ? (
            <EmptyCollection />
          ) : (
            <>
              {nftsList
                ?.filter(
                  (el) => el.creator !== window?.ethereum?.selectedAddress
                )
                .map((collection) => (
                  <PopularCard
                    key={collection?._id}
                    src={collection?.image}
                    token={collection?.item_id}
                    profileColor={collection?.profile?.color}
                    profileImage={collection?.profile?.image}
                    username={profile?.address}
                    av1={profile?.image || av1}
                    av2={av2}
                    nft={collection?.price}
                    title={collection?.name}
                    state={{ nft: collection, profile: profile }}
                    itemDetailsLink={`/item-details/${collection?._id}`}
                    // countdown={true}
                  />
                ))}
            </>
          )}
        </div>
      );
    }
  };

  const Created = () => {
    if (!nftsList) {
      return (
        <>
          <div
            data-aos-delay="200"
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7"
          >
            {[1, 2, 3].map((idx) => (
              <LoaderCard key={idx} />
            ))}
          </div>
        </>
      );
    }
    if (
      nftsList.filter((el) => el.creator === window?.ethereum?.selectedAddress)
        .length <= 0
    ) {
      return <EmptyCollection />;
    } else {
      return (
        <div className="grid grid-cols-12 gap-5">
          {nftsList.filter(
            (el) => el.creator === window?.ethereum?.selectedAddress
          ) <= 0 ? (
            <EmptyCollection />
          ) : (
            <>
              {nftsList
                ?.filter(
                  (el) => el.creator === window?.ethereum?.selectedAddress
                )
                .map((collection) => (
                  <PopularCard
                  key={collection?._id}
                  src={collection?.image}
                  token={collection?.item_id}
                  profileColor={collection?.profile?.color}
                  profileImage={collection?.profile?.image}
                  username={profile?.address}
                  av1={profile?.image || av1}
                  av2={av2}
                  nft={collection?.price}
                  title={collection?.name}
                  state={{ nft: collection, profile: profile }}
                  itemDetailsLink={`/item-details/${collection?._id}`}
                  // countdown={true}
                  />
                ))}
            </>
          )}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col py-8 mb-7 md:px-6 px-2 wrapper">
      <div className="flex justify-between items-center">
        <MdHeading className="text-tag-dark py-3" text="NFTs" />
        <Link
          to="/create-nft"
          state={{data}}
          className={`${
            window.ethereum?.selectedAddress === profile?.address
              ? "flex "
              : "hidden"
          } text-sm py-2 px-4 text-white bg-tag-brand font-bold items-center`}
        >
          <i className="fa fa-plus mr-2" /> Create NFT
        </Link>
      </div>
      <div
        className={`${
          window.ethereum?.selectedAddress === profile?.address
            ? "flex "
            : "hidden"
        }  space-x-3 mb-4 items-center w-min border-2 border-gray-300`}
      >
        <button
          className={`!px-6 !py-2 lg:text-sm font-bold ${
            openTab === 1
              ? "!bg-tag-brand !text-white"
              : "!bg-white !text-gray-900"
          }`}
          text="All"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
        >
          All
        </button>
        <button
          type="button"
          className={`!px-6 !py-2 lg:text-sm font-bold  ${
            openTab === 2
              ? "!bg-tag-brand !text-white"
              : "!bg-white !text-gray-900"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
        >
          Created
        </button>
        <button
          type="button"
          className={`!px-6 !py-2 lg:text-sm font-bold  ${
            openTab === 3
              ? "!bg-tag-brand !text-white"
              : "!bg-white !text-gray-900"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
        >
          Bought
        </button>
      </div>{" "}
      <Transition
        show={openTab === 1}
        appear={true}
        className="w-full"
        enter="transition ease-in-out duration-700 transform order-first"
        enterStart="opacity-0 translate-y-16"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-300 transform absolute"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 -translate-y-16"
      >
        <All />
      </Transition>
      <Transition
        show={openTab === 2}
        appear={true}
        className="w-full"
        enter="transition ease-in-out duration-700 transform order-first"
        enterStart="opacity-0 translate-y-16"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-300 transform absolute"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 -translate-y-16"
      >
        <Created />
      </Transition>
      <Transition
        show={openTab === 3}
        appear={true}
        className="w-full"
        enter="transition ease-in-out duration-700 transform order-first"
        enterStart="opacity-0 translate-y-16"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-300 transform absolute"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 -translate-y-16"
      >
        <Bought />
      </Transition>
    </div>
  );
};

export default Gallery;
