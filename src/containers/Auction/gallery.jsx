import React from "react";
import art from "../../assets/img/items/cover_1.png";
import { paddingX } from "../../constants/spacing";
import RecentListCard from "../../components/cards/recentListCard";
import { Heading } from "../../constants/text";

const AuctionGallery = () => {
  // const [showModal, setShowModal] = React.useState(false);

  return (
    <section
      data-aos='fade-up'
      data-aos-delay='200'
      className={`${paddingX}  bg-dark-900 items-start sm:py-20 py-8`}
    >
      <Heading className='font-extrabold text-white pt-8'>Hot bids</Heading>
      <div className='grid md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-4 py-0 items-center'>
        {[0, 1, 2, 3].map((index) => (
          <RecentListCard
            key={index}
            username='danil_pan'
            av1={art}
            av2={art}
            item={art}
            likes='1.2'
            stock='4'
            nft='21 045 NGTG'
            title='Color Abstract Painting'
            itemLink='/item-details'
          />
        ))}
      </div>
    </section>
  );
};

export default AuctionGallery;
