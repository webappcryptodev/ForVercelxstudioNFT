import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { BsText } from "../../constants/text";
import { PrimaryButton } from "../../components/button/Button";
import LikesButton from '../likes/LikesButton';
import ModalForm from "../modals/form";

const RecentListCard = ({
  username,
  // av1,
  av2,
  item,
  likes,
  stock,
  title,
  nft,
  itemLink
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="bg-tag-dark px-4 py-7 sm:col-span-6 lg:col-span-3 col-span-full group">
      <div className="flex items-center justify-between mb-5">
        {/* <Link to="/" className="flex space-x-1 items-center">
        <img src={av1} loading="lazy" alt="" className="h-8 w-8 object-cover rounded-full" />
        <span className="font-semibold text-sm">@{username}</span>
      </Link> */}
        <Link to="/" className="flex space-x-2 items-center">
          <img src={av2} loading="lazy" alt="" className="h-8 w-8 object-cover rounded-full" />
          <span className="font-semibold text-base">@{username}</span>
        </Link>
      </div>
      <div className="img-box relative">
        <div
          className="overflow-hidden"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <img
            src={item}
            loading="lazy" alt=""
            className="h-72 relative scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-5 border border-gray-700"
          />
        </div>
        <div className="absolute top-5 right-4">
          <LikesButton colors="text-tag-red bg-tag-dark" likes={likes} />
        </div>
      </div>
      <div className="flex flex-col space-y-3 mt-4">
        <BsText>
          <Link to="/">{title}</Link>
        </BsText>
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">{stock} in stock</p>
          <p className="font-semibold">
            <Link to="/">
              Price: <span className="text-tag-red">{nft} </span>
            </Link>
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHistory} size="3x" />
            <p className="font-semibold">
              <Link to={itemLink}>View</Link>
            </p>
          </div>  <PrimaryButton onClick={openModal}>
            Place Bid
          </PrimaryButton>
        
        </div>
      </div>
      <ModalForm
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={item}  title='Nft title'
      />
    </div>
  );
};

export default RecentListCard;