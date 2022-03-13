import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdHeading } from "../../constants/text";
import { PrimaryButton } from "../../components/button/Button";
import { CollectionNftCard } from "../../components/cards/nftcards";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { COLLECTION_IMAGE_URL } from "../../store/routes/routes";

import {
  // allCollectionsFn,
  selectAllCollections,
} from "./../../store/components/collections/collections";
import { EmptyCollection } from "../../components/error/Errors";

const CollectionList = ({ AllCollections }) => {
  useEffect(() => {
    // loadAllCollections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AllCollections]);
  console.log(AllCollections, 'all collection')
  return (
    <section
      className='pb-28'
      // data-aos="fade-up"
      // data-aos-easing="linear"
      // data-aos-duration="1500"
    >
      <div className='flex flex-col space-y-3 mb-7'>
        <MdHeading>Collection </MdHeading>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7'>
        {AllCollections?.filter((el) => el?.nftsList?.length > 0)
          .slice(0, 6)
          .map((collection) => (
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
              owner={collection?.profile?.address}
              profileImage={collection?.profile?.image}
              itemsNo={collection?.nftsCount}
              items={collection?.nftsList || []}
              profileLink={`/creator/${collection?.profile?.address}`}
              state={collection}
              collectionLink={`/collection-details/${collection?._id}`}
              likes={collection?.favorites}
            />
          ))}
      </div>
      <div className='max-w-xs mx-auto mt-12 px-4 items-center'>
        {AllCollections?.filter((el) => el?.nftsList?.length > 0).length <= 0 ? 
     <EmptyCollection/> :
      
    
      <PrimaryButton className="transition ease-out delay-300 !py-3 w-full rounded border border-tag-brand hover:!text-white !text-tag-brand !bg-white hover:!bg-tag-brand ">
         
          <Link to='/collections' className='text-lg'>
            View All
          </Link>
        </PrimaryButton>  }
      </div>
    </section>
  );
};
// export default CollectionList;
// dispatching action
const mapDispatchToProps = (dispatch) => ({
  // loadAllCollections: () => dispatch(allCollectionsFn()),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  AllCollections: selectAllCollections,
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
