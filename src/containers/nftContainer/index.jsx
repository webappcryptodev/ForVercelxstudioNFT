import {useEffect} from 'react';
import Hero from "./hero";
import Gallery from "./gallery";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { allNftsFn, selectAllNfts } from "../../store/components/tokens/nft";

const NftContainer = ({loadAllNfts, AllNfts}) => {
  let location = useLocation();

  useEffect(() => {
    loadAllNfts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nft = location.state || {AllRecentNfts: AllNfts};

  return (
    <div>
      <Hero amount={nft?.AllRecentNfts?.length} />
      <Gallery data={nft} />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NftContainer);