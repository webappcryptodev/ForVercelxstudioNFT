import { useLocation } from "react-router-dom";
import { SecButton } from "../../components/button/Button";
import Details from "./Details";
import History from "../../utils/history";

const ItemDetailsContent = () => {
  const location = useLocation();

  const { nft, profile } = location.state;

  console.log(nft, profile);

  return (
    <section className='wrapper'>
      <div className='pb-28 pt-16'>
        <SecButton to='#' state={nft} onClick={() => History.back()}>
          Back To Prev Page
        </SecButton>
        <Details
          title={nft?.name}
          likes='2.1'
          num='1'
          total='1'
          bsc={2.4}
          item={nft?.item_id}
          per={nft?.price || "1"}
          description={nft?.description}
          creator={profile?.address}
          to={`/creator/${profile?.address}`}
        />
      </div>
    </section>
  );
};

export default ItemDetailsContent;
