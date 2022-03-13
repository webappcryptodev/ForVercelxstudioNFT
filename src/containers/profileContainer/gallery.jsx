// import { useState } from "react";
import { CollectionNftCard } from "../../components/cards/nftcards";
import { RecentActiveDrop } from "../../components/common/Dropdown";

import Transition from "../../components/common/Transition";
import { COLLECTION_IMAGE_URL } from "../../store/routes/routes";
import { EmptyCollection } from "../../components/error/Errors";
import { LoaderCard } from "../../components/loader";

const ProfileGallery = ({ collections, account, notify }) => {

  const Collection = () => {
    if (!collections) {
      return (
        <>
          <div
            data-aos-delay='200'
            className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7'
          >
            {[1, 2, 3].map((idx) => (
              <LoaderCard key={idx} />
            ))}
          </div>
        </>
      );
    }
    if (collections.length <= 0) {
      return <EmptyCollection />;
    } else {
      return (
        <div
          // data-aos="fade-left"
          data-aos-delay='200'
          className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7'
        >
          {collections.map((collection) => (
            <CollectionNftCard
              key={collection?._id}
              image={
                collection?.image && !collection?.image?.includes("http")
                  ? `${COLLECTION_IMAGE_URL}/${collection?.image}`
                  : collection.image
              }
              title={collection?.name}
              color={collection?.color}
              profileColor={collection?.profile?.color}
              owner={collection?.profile_address}
              profileImage={collection?.profile?.image}
              number={collection?.nftsList?.length}
              items={collection?.nftsList || []}
              profileLink={`/creator/${collection?.profile?.address}`}
              state={collection}
              collectionLink={`/collection-details/${collection?._id}`}
              likes={collection?.favorites}
              notify={notify}
            />
          ))}
        </div>
      );
    }
  };
  return (
    <section className={` sm:py-20 py-8 `}>
      <main
        // data-aos="fade-down"
        // data-aos-delay="200"
        className='grid grid-cols-1 gap-8'
      >
        <div className='flex space-y-3 gap-4 flex-col justify-center sm:space-y-0 sm:flex-row sm:justify-between items-center'>
          <div className='flex space-x-3  items-center'>
    
          </div>
          <RecentActiveDrop />
        </div>
        <div>
       
          {/* Collections  */}
          <Transition
            show={true}
            appear={true}
            className='w-full'
            enter='transition ease-in-out duration-700 transform order-first'
            enterStart='opacity-0 translate-y-16'
            enterEnd='opacity-100 translate-y-0'
            leave='transition ease-in-out duration-300 transform absolute'
            leaveStart='opacity-100 translate-y-0'
            leaveEnd='opacity-0 -translate-y-16'
          >
            <Collection />
          </Transition>
        </div>
      </main>
    </section>
  );
};

export default ProfileGallery;
