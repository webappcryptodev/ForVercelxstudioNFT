import React, { useState } from "react";
import truncate from "truncate";
import { Link } from "react-router-dom";
import { BsText } from "../../constants/text";
import { PrimaryButton } from "../../components/button/Button";
import ModalForm from "../../components/modals/form";
import { NFT_IMAGE_URL } from "../../store/routes/routes";
// import uploadIcon from "../../assets/svg/xwhite.svg";
// import art from "../../assets/img/img.png";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import Avatar from "../Avatar";
// LazyLoadComponent } from 'react-lazy-load-image-component';
const PopularCard = ({
  username,
  src,
  title,
  nft,
  item,
  link,
  itemDetailsLink,
  state,
  collectionName,
  profileImage,
  profileColor,
  // countdown,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [load, setLoad] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log(load,src, "card");
  return (
    // <LazyLoadComponent
    //   id={itemDetailsLink}
    //   afterLoad={() => setLoad(true)}
    //   beforeLoad={() => setLoad(false)}
    // >
      <>
        {/* {load ? ( */}
          <div className='sm:col-span-6 shadow-new-4 lg:col-span-3 col-span-full group border rounded'>
            <div className='relative z-0'>
              <Link
                to={itemDetailsLink}
                state={state}
                className='text-black font-semibold'
              >
                {/* {load ? ( */}
                  <div
                    className='overflow-hidden relative'
                    style={
                      {
                        // background: `${profileColor}`,
                      }
                    }
                  >
                    <i class='fa fa-spinner text-3xl text-tag-brand absolute top-1/2 right-1/2 animate-spin'></i>
                    {/* <img
                  src={`${NFT_IMAGE_URL}/${src}`}
                  loading="lazy" alt={title}
                  className='object-cover h-[300px] scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-3 rounded-t z-10'
                  /> */}
                     {/* <LazyLoadImage
                      src={`${NFT_IMAGE_URL}/${src}`}
                      alt={title}
                      className="object-cover h-[300px] scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-3 rounded-t z-10"
                    /> */}
                   <div
                      className='object-cover h-[300px] scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-3 rounded-t z-10'
                      style={{
                        background: `linear-gradient(
                        to bottom,
                        rgba(0,0,0, 0),
                        rgba(0,0,0, 0)
                      ), url(${`${NFT_IMAGE_URL}/${src}`})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>

                {/* ) : (
                  <div className='object-cover h-[300px]  bg-gray-300 animate animate-pulse   scale-100  rounded-t z-10'></div>
                )} */}
              </Link>
              {/* {countdown ? <CountDownTimer className="absolute" /> : <></>} */}
            </div>
            <ModalForm
              item={item}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              price={nft}
              image={src}
              title={title}
              details={state}
            />
            <div className='flex flex-col space-y-4 px-4 pb-4 mt-4'>
              <BsText className='flex flex-col'>
                <p className='text-xs text-gray-400 font-semibold'>
                  {collectionName}
                </p>

                <Link
                  to={itemDetailsLink}
                  state={state}
                  className='text-black font-semibold'
                >
                  {title}
                </Link>
              </BsText>
              <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-4 mr-2'>
                  <div className='flex'>
                    {/* <LazyLoadImage
      
        loading="lazy" alt='akkl'
        // height={image.height}
        // Make sure to pass down the scrollPosition,
        // this will be used by the component to know
        // whether it must track the scroll position or not
        // scrollPosition={scrollPosition}
        src={av1.includes('/static/media/') ? av1 : `${PROFILE_IMAGE_URL}/${av1}`}
        width={image.width}
        className='h-8 w-8 object-fit rounded-full border border-gray-400'
        /> */}
                    <Avatar
                      size='h-8 w-8'
                      frst1='Cy'
                      lst1='Ng'
                      textSize='sm'
                      color={profileColor}
                      image={profileImage}
                    />
                  </div>
                  <p className='text-sm text-black font-semibold'>
                    {state?.profile?.username || truncate(`@${username}`, 7)}
                  </p>
                </div>
                <div className='space-x-3'>
                  <p className='text-tag-darker text-sm font-semibold '>
                    {`${nft} ${state.nft.chain === 80001 ? "MATIC" : "ETH"}`}
                  </p>
                </div>
              </div>
              <PrimaryButton
                onClick={openModal}
                className={`!py-2.5 w-full rounded ${
                  window.ethereum?.selectedAddress === username
                    ? "hidden"
                    : "none"
                }`}
                text='Buy Now'
              />
            </div>
          </div>
        {/* ) : (
          <h4>loading..</h4>
        )} */}
      </>
    // </LazyLoadComponent>
  );
};

export default PopularCard;
