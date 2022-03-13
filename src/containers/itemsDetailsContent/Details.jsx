// import item2 from "../../assets/img/items/item_2.png";
import MoreButton from "../../components/button/More";
import ShareButton from "../../components/button/Share";
// import LikesButton from "../../components/likes/LikesButton";
import { Link, useLocation } from "react-router-dom";
import { BsText, MdHeading } from "../../constants/text";
import { ProofDrop } from "./dropContents";
import DetailsTab from "./Tab";
// import av1 from "../../assets/img/avatars/avatar_1.png";
import Truncate from "truncate";
import { PrimaryButton } from "../../components/button/Button";
import ModalForm from "../../components/modals/form";
import { useState } from "react";
import { NFT_IMAGE_URL } from "../../store/routes/routes";
import Avatar from "../../components/Avatar";

// import item from "../../assets/img/items/item_11.png";

const   Details = ({   likes, num, total, bsc, per, item,   to }) => {
  // const [modalIsOpen, setIsOpen] = useState(false);
  const [bidOpen, setBidOpen] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  const location = useLocation();

  const { nft, profile } = location.state;

  function bidModalOpen() {
    setBidOpen(true);
  }

  function bidModalClose() {
    setBidOpen(false);
  }

  const url = window.location.href;

  return (
    <div className='grid grid-cols-12 gap-6 mt-12'>
      <div style={{
        zIndex: 0
      }} className='lg:col-span-5 col-span-full'>
        {/* <img
          src={`${NFT_IMAGE_URL}/${nft?.image}`}
          loading="lazy" alt={nft?.name}
          className='w-full h-full object-cover'
        /> */}
         <div
                    className='w-full h-full z-10 relative'
                  
                  >
                    {/* <i class='fa fa-spinner text-3xl text-tag-brand absolute top-1/2 right-1/2 animate-spin'></i> */}
               
         <div
                       className='w-full h-full z-30 object-cover'
                       style={{
                        background: `linear-gradient(
              to bottom,
              rgba(0,0,0, 0),
              rgba(0,0,0, 0)
            ), url(${`${NFT_IMAGE_URL}/${nft?.image}`})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    ></div></div>
      </div>
      <div className='lg:col-span-7 col-span-full'>
        <MdHeading>{nft?.name}</MdHeading>
        <div className='flex justify-between items-center mt-6'>
          <div className='flex items-center space-x-2'>
            {/* <p className='font-semibold'>
              {num} of {total}
            </p> */}
            {/* <LikesButton colors='bg-tag-dark text-white' likes={likes} /> */}
            <div className=''>
            <Link
              to={`/creator/${profile?.address}`}
              className='flex items-center space-x-2'
            >
             <Avatar
                            size="h-8 w-8"
                            frst1="Cy"
                            lst1="Ng"
                            textSize="sm"
                            color={profile?.color}
                            image={profile?.image}
                          />
              <span className='text-[15px] font-semibold'>
                {profile?.username || Truncate(`@${profile?.address}`, 25)}
              </span>
            </Link>
          </div>
          </div>
          <div className='flex space-x-3 items-center'>
            <ShareButton shareUrl={url} title={nft?.description} />
            <MoreButton to='/report' />
          </div>
        </div>
        <div className='mt-5'>
          <ProofDrop metadata={nft?.metadata_hash} token={nft?.token} chain={nft?.chain} />
        </div>
        <div className='border shadow flex flex-col space-y-6 divide-y divide-black p-4 mt-6'>
          <DetailsTab description={nft?.description} />
        </div>
        <div className='my-7'>
          <p className='text-lg font-semibold pb-3'>Price</p>
          <BsText>
            {`${nft?.price} ${nft?.chain === 3 ? "ETH" : "MATIC"}`}
          </BsText>
        </div>
        {/* <div className="sm:col-span-1 col-span-full relative">
            <p className="text-lg font-semibold pb-3">Countdown</p>
            <div className="flex">
              <CountDownTimer className="relative" />
            </div>
          </div> */}
        <div className='grid grid-cols-1 gap-x-5 gap-y-5 lg:gap-y-10 my-7'>
        
        </div>
        <ModalForm
          isOpen={bidOpen}
          onRequestClose={bidModalClose}
          price={per}
          item={item}
          image={nft?.image}
          title={nft?.name}
          state={location.state}
          details={location.state}
        />
        {/* <CheckoutForm isOpen={modalIsOpen} onRequestClose={closeModal} /> */}
        <div className='mt-4 flex space-x-4 items-center'>
          {window?.ethereum?.selectedAddress === profile?.address ? (
            ""
          ) : (
            <PrimaryButton
              onClick={bidModalOpen}
              className='!px-6 rounded !text-lg !py-3'
            >
              Buy Now
            </PrimaryButton>
          )}
          {/* <PrimaryButton onClick={bidModalOpen} className="!px-6 !bg-tag-darker rounded !text-lg !py-3">
            Place bid
          </PrimaryButton> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
