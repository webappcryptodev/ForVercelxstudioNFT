// import React from "react";
// import { Link } from "react-router-dom";
// import Modal from "react-modal";
// import item from "../../assets/img/items/item_11.png";
// import { paddingX } from "../../constants/spacing";
// import { BsText, Heading, SmText } from "../../constants/text";
// import BidModal from "../../components/modals/bidModal";
// import { GrayButton ,PrimaryButton} from "../../components/button/Button";
// const style = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   content: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     border: "none",
//     backgroundColor: "transparent",
//     overflow: "auto",
//     WebkitOverflowScrolling: "touch",
//     borderRadius: "4px",
//     outline: "none",
//     padding: "0px",
//     minWidth: "60vw",
//   },
// };
// const AuctionHero = ({ title, currentBid, image }) => {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
//   return (
//     <section
//       className={`${paddingX} grid md:grid-cols-2 grid-cols-1 md:gap-20  gap-8 justify-between md:py-32 py-12 items-center`}
//     >
//       <Modal
//         style={style}
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         contentLabel='Example Modal'
//       >
//         <BidModal handleClose={closeModal} image={item}  title='Nft title'/>
//       </Modal>
//       <div
//         data-aos='fade-down'
//         data-aos-delay='200'
//         className='flex flex-col justify-items-start gap-4'
//       >
//         <Heading className='text-white font-extrabold'>Live Auctions</Heading>
//         <SmText className='text-dark-400'>
//           Sign up to receive our monthly newsletter, featuring updates from the
//           team, new decentralized applications and NFT projects, and trends
//           we’re seeing in the space.{" "}
//         </SmText>
//       </div>
//       {/* side view of current bid aution time */}
//       <aside
//         data-aos='fade-left'
//         data-aos-delay='200'
//         className='grid md:grid-cols-fr-max grid-cols-1 gap-4 items-center justify-evenly p-4 bg-dark-700'
//       >
//         <div className='gap-4 grid '>
//           <BsText className='text-white font-extrabold py-2'>{title}</BsText>
//           <div className='flex p-2 items-center justify-around bg-dark-900 rounded-md'>
//             <div className='flex flex-col items-center  '>
//               <SmText className='text-dark-400'>CURRENT BID</SmText>
//               <SmText className='text-white'>{currentBid}BSC</SmText>
//             </div>
//             <div className='flex flex-col items-center p-4 bg-dark-900 rounded-md'>
//               <SmText className='text-dark-400'>AUCTION TIME</SmText>
//               <SmText className='text-white'>12:34:12</SmText>
//             </div>
//           </div>
//           <div className='flex p-4 items-center  gap-4 justify-center'>
//             <Link to='/item-details'>
//             <GrayButton >View Art</GrayButton>
//             </Link>
              
//             <PrimaryButton onClick={openModal}>Place Bid</PrimaryButton>
//           </div>
//         </div>
//         <div className='h-40 max-w-40 overflow-hidden relative object-fit'>
//           <img
//             src={image}
//             loading="lazy" alt={title}
//             className='w-full h-full object-fit relative'
//           />
//         </div>
//       </aside>
//     </section>
//   );
// };

// export default AuctionHero;
