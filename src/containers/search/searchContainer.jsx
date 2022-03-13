import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { MdHeading } from "../../constants/text";
// import { PrimaryButton } from "../../components/button/Button";
import { CollectionNftCard } from "../../components/cards/nftcards";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { COLLECTION_IMAGE_URL } from "../../store/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import {
  // allCollectionsFn,
  selectAllCollections,
} from "./../../store/components/collections/collections";
import { BsText } from "../../constants/text";
// import { Search } from "../../components/Header/headerComp";

const SearchContainer = ({ AllCollections }) => {

    const [Data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    // const [load, isLoad] = useState(true);
  
    // useEffect(() => {
    //   axios.get(`https://data.messari.io/api/v1/assets`).then((response) => {
    //     setData(response.data.data);
    //     isLoad(false);
    //   });
    // }, []);
    useEffect(() => {
        setData(AllCollections);
        // loadAllCollections();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [AllCollections]);
console.log(Data,'data');
    const searchItems = (searchValue) => {
      setSearchInput(searchValue);
      if (searchInput !== "") {
        const filteredData = Data.filter((item) => {
          return Object.values(item.name)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });
        setFilteredResults(filteredData);
      } else {
        setFilteredResults(Data);
      }
    };
  
    console.log(filteredResults.length, 'lenghth')

  return (
    <section
      className='pb-28 md:px-12 px-3 wrapper'
      // data-aos="fade-up"
      // data-aos-easing="linear"
      // data-aos-duration="1500"
    >
      <div className='flex w-full justify-center '>
          <div className='relative w-full md:w-1/2 border border-gray-300 rounded md:py-4 md:px-6 py-2 px-4 my-12 '>

      <input
        onChange={(e) => searchItems(e.target.value)}
      placeholder='Type collection name...'
                className='md:text-base text-sm text-gray-800 w-full'
                  />
                   <button
                   onChange={(e) => searchItems(e.target.value)}
                   className="absolute right-2 md:text-3xl text-sm top-1.5 bg-gray-50 text-gray-700 px-2 pt-2 rounded">
      <FontAwesomeIcon icon={faSearch}  />
    </button>
          </div>
      </div>
      <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7`}>
      {searchInput.length > 1
                ? filteredResults.length <= 0 ?  <div 
                 data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                 className={`w-full py-40 flex flex-col justify-center items-center col-span-full`}> 
                    <BsText className='!text-center !text-3xl !text-tag-brand !font-bold'>Ups!... No result found</BsText><br/>
                    <span className='font-medium text-base'>Please try another search</span></div> :
                filteredResults?.filter((el) => el?.nftsList?.length > 0).map((collection) => {
                    return (
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
                    );
                  })
                : Data?.filter((el) => el?.nftsList?.length > 0)
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
