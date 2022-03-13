import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionNftCard } from "../../components/cards/nftcards";
import { COLLECTION_IMAGE_URL } from "../../store/routes/routes";

import {
  // allCollectionsFn,
  selectAllCollections,
} from "./../../store/components/collections/collections";
import { EmptyCollection } from "../../components/error/Errors";

const CollectionGallery = ({ AllCollections }) => {
  useEffect(() => {
    // loadAllCollections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      // data-aos="fade-up"
      className={`items-start py-10 mb-10`}
    >
      {AllCollections?.length <= 0 ? (
        <EmptyCollection />
      ) : (
        <div
          // data-aos="fade-left"
          data-aos-delay='200'
          className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7'
        >
          {AllCollections?.filter((el) => el?.nftsList.length > 0).map(
            (collection) => (
              <CollectionNftCard
                key={collection?._id}
                image={
                  collection?.image && !collection?.image?.includes("http")
                    ? `${COLLECTION_IMAGE_URL}/${collection?.image}`
                    : collection.image
                }
                color={collection?.color}
                profileColor={collection?.profile?.color}
                profileImage={collection?.profile?.image}
                title={collection?.name}
                owner={collection?.profile?.address}
                itemsNo={collection?.nftsCount}
                items={collection?.nftsList || []}
                profileLink={`/creator/${collection?.profile?.address}`}
                state={collection}
                collectionLink={`/collection-details/${collection?._id}`}
                likes={collection?.favorites}
              />
            )
          )}
        </div>
      )}
    </section>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  // loadAllCollections: () => dispatch(allCollectionsFn()),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  AllCollections: selectAllCollections,
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionGallery);
