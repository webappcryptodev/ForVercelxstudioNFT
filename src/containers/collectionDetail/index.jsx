import Hero from "./hero";
import av1 from "../../assets/img/avatars/avatar_1.png";
import Gallery from "./gallery";
import { useLocation } from "react-router-dom";
import { COLLECTION_IMAGE_URL } from "../../store/routes/routes";

const CollectionDetailsContainer = () => {
  let location = useLocation();
  const collection = location.state;

  const isUrl = collection?.image?.includes("http");

  return (
    <div>
      <Hero
        link={`/creator/${collection?.profile?.address}`}
        address={collection?.profile?.address}
        avImage={collection?.profile?.image}
        artName={collection?.profile?.name}
        color={collection?.profile?.color}
        creator={collection?.profile?.address}
        user={collection?.profile?.username}
        number={collection?.nftsList?.length}
        price='0.50'
        bg={
          collection?.image && !isUrl
            ? `${COLLECTION_IMAGE_URL}/${collection?.image}`
            : collection?.image && isUrl
        }
        avatar={
          collection?.profile?.image?.includes("undefined")
            ? collection?.profile?.image
            : av1
        }
        collection={collection}
      />
      <Gallery data={collection} />
    </div>
  );
};

export default CollectionDetailsContainer;
