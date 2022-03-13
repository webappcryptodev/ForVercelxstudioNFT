import{ useEffect } from "react";
import HomeBanner from "./Banner";
import CollectionList from "./collection";
import NFTs from "./Nfts";
import RecentlyListed from "./recentListed";
import { connect } from "react-redux";
import { allMyCollectionsFn } from "../../store/components/collections/collections";

const HomeContainer = ({ loadCollections }) => {
  useEffect(() => {
    loadCollections();
  },[loadCollections])
  return (
    <>
        <HomeBanner />
      <section className='wrapper'>
        <NFTs />
        <RecentlyListed />
        <CollectionList />
      </section>
    </>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  loadCollections: (id) => dispatch(allMyCollectionsFn()),
});

export default connect(null, mapDispatchToProps)(HomeContainer);
