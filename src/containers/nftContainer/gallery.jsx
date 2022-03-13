import React from "react";
import PopularCard from "../../components/cards/popularCard";

import av1 from "../../assets/img/avatars/avatar_1.png";
import av2 from "../../assets/img/avatars/avatar_2.png";
// import item from "../../assets/img/items/item_14.png";
import { MdHeading } from "../../constants/text";
import { EmptyCollection } from "../../components/error/Errors";

const Gallery = ({ data }) => {
  const { AllRecentNfts } = data;
  return (
    <div className='flex flex-col py-8 mb-7 md:px-6 px-2'>
      <MdHeading className='text-tag-brand py-3' text='NFTs' />
      <div className='grid grid-cols-12 gap-5'>
        {AllRecentNfts <= 0 ? (
          <EmptyCollection />
        ) : (
          <>
            {AllRecentNfts?.filter(el => el?.listed === true)?.map((collection) => (
              <PopularCard
                key={collection?._id}
                src={collection?.image}
                item={collection?.item_id}
                username={collection?.profile?.address}
                profileColor={collection?.profile?.color}
                profileImage={collection?.profile?.image}
                av1={collection?.profile?.image || av1}
                av2={av2}
                nft={collection?.price}
                title={collection?.name}
                state={{ nft: collection, profile: collection?.profile }}
                itemDetailsLink={`/item-details/${collection?._id}`}
                // countdown={true}
              />
            )).reverse()}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
