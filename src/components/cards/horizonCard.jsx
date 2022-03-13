import { useState } from "react"; 
import { Link } from "react-router-dom";
import truncate from "truncate";

import { PrimaryButton } from "../button/Button";
import avatar from "../../assets/img/avatars/avatar_4.png";
import item from "../../assets/img/items/item_6.png";
import { SmText } from "../../constants/text";
import ModalForm from "../modals/form";

const HorizontalCard = ({ title, username, nft }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className="bg-tag-dark group px-3 py-4 grid grid-cols-5 gap-x-3 
  items-center"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="col-span-2 relative overflow-hidden">
          <img
            src={item}
            loading="lazy" alt=""
            className="img-fluid relative scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:skew-y-6"
          />
          <div className="z-1 absolute bottom-3.5 left-3.5 right-3.5 !bg-white !bg-opacity-80 flex items-center rounded-none">
            <div
              className="h-1/2  ml-1 text-white bg-tag-brand"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex flex-col space-y-3">
            <SmText>
              <Link to="">{title}</Link>
            </SmText>

            <hr />
            <div className="flex items-center space-x-3">
              <img
                src={avatar}
                loading="lazy" alt=""
                className="h-8 w-8 rounded-full object-fit"
              />
              <p className="text-sm text-white font-semibold">
                {truncate(`@${username}`, 15)}
              </p>
            </div>
            <div className="flex justify-between items-center pt-3">
              <PrimaryButton onClick={openModal}>
                Place Bid
              </PrimaryButton>
              <p className="!text-tag-red uppercase text-sm font-semibold font-sora">
                {nft}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ModalForm
      isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={item}  title='Nft title'
      />
    </>
  );
}

export default HorizontalCard;
