import React from "react";
import { Link } from "react-router-dom";
import { BsText, SmText } from "../../constants/text";
// import art from "../../assets/img/items/cover_3.png";
// import gif from "../../assets/gif/Empty.gif";
// import av1 from "../../assets/img/avatars/avatar_1.png";
// import { PrimaryButton } from "../button/Button";
// import ModalForm from "../../components/modals/form";
// import { GrayModal, Modal } from "../common/modal";
import Avatar from "../../components/Avatar";
import truncate from "truncate";
import { NFT_IMAGE_URL } from "../../store/routes/routes";
import {
  LazyLoadComponent,
  // LazyLoadImage,
} from "react-lazy-load-image-component";

export const NftCard = ({
  image,
  title,
  owner,
  price,
  bid,
  itemDetailsLink,
}) => {
  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <main className='xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-full'>
      <div className='border shadow transition p-3 hover:-translate-y-2 ease duration-300 ease-linear transform hover:shadow-lg'>
        {/* image like place bid */}
        <Link to={itemDetailsLink}>
          <div
            className='h-80 max-w-80 overflow-hidden relative object-cover'
            data-aos='fade-right'
            data-aos-delay='200'
          >
            <div className='absolute top-2 right-2  z-10'>LikesButton</div>
            <div
              src={image}
              style={{
                background: `linear-gradient(
      to bottom,
      rgba(0,0,0, 0),
      rgba(0,0,0, 0)
    ), url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
              loading='lazy'
              alt={title}
              className='w-full h-full img-fluid object-cover relative transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-5'
            ></div>
          </div>
        </Link>
        {/* <ModalForm isOpen={modalIsOpen} onRequestClose={closeModal} /> */}
        {/* nft details */}
        <div className='flex flex-col space-y-3 '>
          <BsText className=' capitalize  pt-2 text-sm font-bold'>
            {" "}
            {title}{" "}
          </BsText>
          <div className='flex pb-2 justify-between items-center '>
            <div className='flex items-center '>
              <img
                src={image}
                loading='lazy'
                alt={title}
                className='h-8 w-8 rounded-full mr-1'
              />{" "}
              <SmText className=' capitalize text-sm font-bold'>
                @{owner}
              </SmText>
            </div>
            <SmText className='justify-self-end'>{price}BSC</SmText>
          </div>
          {/* <SmText className="pt-3 border-t">
            <i className="fa fa-first-order"></i>{" "}
            <span className="text-dark-400 px-1">Highest bid</span>
            {bid}BSC
          </SmText> */}
        </div>
      </div>
    </main>
  );
};

// Auction card
export const AuctionNftCard = ({
  image,
  title,
  owner,
  price,
  children,
  likes,
  link,
}) => {
  return (
    <main className='bg-dark-700 transition p-3 hover:-translate-y-2 ease transform hover:shadow-new-3'>
      {/* image like place bid */}
      <div className='h-80 max-w-80 overflow-hidden relative object-cover'>
        <button className='absolute top-2 right-2 py-2 px-3 text-sm  z-10 bg-dark-700 flex items-center gap-1'>
          <i className='fa fa-facebook-f'></i>
          {likes}k
        </button>
        <img
          src={image}
          loading='lazy'
          alt={title}
          className='w-full h-full object-cover relative'
        />
      </div>

      {/* nft details */}
      <div className='flex flex-col gap-1 '>
        <BsText className=' capitalize  pt-2 text-sm font-bold'>
          {" "}
          {title}{" "}
        </BsText>
        <div className='flex gap-2 items-center justify-between pb-2'>
          <div className='flex  gap-1'>
            <img
              src={image}
              loading='lazy'
              alt={title}
              className='h-8 w-8 rounded-full mr-1'
            />{" "}
            <SmText className=' capitalize text-sm font-bold'>@{owner}</SmText>
          </div>
          <SmText className='text-red-700'>{price}BSC</SmText>
        </div>
        <div className='pt-2 border-t-2 border-dark-800 flex justify-between'>
          {children}
        </div>
      </div>
    </main>
  );
};

// Collection card
export const CollectionNftCard = ({
  image,
  title,
  owner,
  items,
  itemsNo,
  likes,
  profileLink,
  collectionLink,
  state,
  color,
  profileColor,
  profileImage,
}) => {
  // const [load, setLoad] = useState(false);
  return (
    <LazyLoadComponent
      id={collectionLink}
      // afterLoad={() => setLoad(true)}
      // beforeLoad={() => setLoad(false)}
    >
      <div style={{ backgroundColor: `${color}` }} className='rounded-xl'>
        <div
          className='relative rounded-xl group overflow-hidden '
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0, 0.1),
              rgba(0,0,0, 0.8)
            ), url(${
              image && !image?.includes("undefined") ? `${image}` : ""
            })`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className='group-hover:scale-95 transition duration-300 ease-linear cursor-pointer'>
            <div className='top-0'>
              <Link to={`${collectionLink}`} state={state}>
                <div className='flex justify-between px-5 py-8'>
                  {items <= 0 ? (
                    <div className='w-28 h-28 object-cover rounded-lg  border-opacity-50'></div>
                  ) : (
                    <img
                      src={`${NFT_IMAGE_URL}/${items[0]?.image}`}
                      loading='lazy'
                      alt='collections'
                      className='w-28 h-28 object-cover rounded-lg border border-primary-100 border-opacity-50'
                    />
                  )}

                  {items ? (
                    <div className=''>
                      <p className='bg-gray-300 bg-opacity-40 text-white rounded-full px-4 py-2'>{`${items?.length} NFTs`}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </Link>
            </div>
            <div className='flex flex-col space-y-6 p-5 pb-8 mt-24'>
              <h2 className='text-2xl lg:text-3xl font-bold text-white capitalize'>
                <Link to={`${collectionLink}`} state={state}>
                  {title}
                </Link>
              </h2>
              <div className='relative flex flex-col items-start'>
                <div className='bg-gray-300 bg-opacity-40 px-5 py-2 rounded-full '>
                  <Link to={`${profileLink}`}>
                    <div className='flex items-center space-x-4'>
                      <Avatar
                        size='h-8 w-8'
                        frst1='Cy'
                        lst1='Ng'
                        textSize='sm'
                        image={profileImage}
                        color={profileColor}
                      />
                      <span className='font-semibold text-base text-white'>
                        {state?.profile?.username || truncate(`@${owner}`, 8)}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazyLoadComponent>
    // <main className=" transition  duration-400  hover:-translate-y-1 ease hover:transform hover:shadow-new shadow-new md:shadow-none group">
    //   <Link to={collectionLink} state={state}>
    //     <div className="grid grid-cols-1 gap-y-4 md:shadow md:border p-3 group-hover:border-0 md:group-hover:shadow-none">
    //       <div className="h-80 max-w-60 overflow-hidden col-span-full row-span-full object-cover">

    //         <img
    //           src={image && !image?.includes('undefined') ? `${image}` : art}
    //           loading="lazy" alt={title}
    //           className="h-80 max-w-60 object-fill "
    //         />
    //       </div>
    //     <div className="grid grid-cols-1  col-span-full row-span-full self-start justify-items-start m-6 shadow-md relative">
    //           {items?.length > 0 ? (
    //             <div className="grid grid-cols-1  p-1 bg-transparent backdrop-blur-md ">
    //               {/* {items?.filter((nft) => nft.listed === true)?.slice(0,3).map((item, idx) => ( */}
    //                 <div  className="h-32 max-w-32 overflow-hidden  object-cover">
    //                   <img
    //                     src={`${NFT_IMAGE_URL}/${items[0]?.image}`}
    //                     loading="lazy" alt={items[0]?.name}
    //                     className="w-32 h-full object-cover "
    //                   />
    //                 </div>
    //               {/* // ))} */}
    //             </div>
    //           ) : (
    //               <div className="h-32 w-full overflow-hidden  object-cover">
    //               {/* <img
    //               src={gif}
    //               loading="lazy" alt='empty collection'
    //               className="w-32 h-full object-cover "
    //             />       */}
    //               <h4 className=' absolute top-0 left-0 transform text-sm text-white py-2 px-3 bg-red-600 '>Empty collection</h4>
    //            {/* <img
    //                     src={gif}
    //                     loading="lazy" alt='empty collection'
    //                     className="h-32 max-w-32 object-cover "
    //                   /> */}
    //           </div>
    //           )}
    //            </div>
    //     </div>
    //   </Link>
    //   {/* coolection details */}
    //   <div className="flex flex-col space-y-2 px-3">
    //     <div className="flex justify-between md:mt-3 ">
    //       <Link to={collectionLink} state={state}>
    //         <SmText className=" capitalize pt-2 text-sm font-bold">
    //           {title}
    //         </SmText>
    //       </Link>
    //       <button className="py-2 px-3 text-tag-brand text-sm font-semibold z-10">
    //         <i className="fa fa-heart pr-1" />
    //         {likes >= 1000 ? `${likes}k` : likes}
    //       </button>
    //     </div>

    //     <div className="flex space-x-2 items-center pb-4">
    //       <SmText className="text-xs px-1">{itemsNo} items</SmText>
    //       <SmText className="text-xs px-1">Created by</SmText>
    //       <img
    //         src={image && !image?.includes('undefined') ? `${image}` : av1}
    //         loading="lazy" alt={title}
    //         className="h-6 w-6 object-cover rounded-full mr-1"
    //       />{" "}
    //       <Link to={profileLink} state={state}>
    //         <SmText className=" capitalize text-xs font-bold"> {truncate(`@${owner}`, 8 )}</SmText>
    //       </Link>
    //     </div>
    //   </div>
    // </main>
  );
};
