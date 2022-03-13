import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import Notiflix from "notiflix";
import { selectMyCollections } from "../../store/components/collections/collections";
import { nftaddress,   ethnftaddress, ethmarketaddress, nftmarketaddress  } from "../../store/web3/testnet/config";
import { loading, loadFinish } from "../../store/components/overlay/overlay";
// import NFTG from "../../store/web3/testnet/NFTG.json";

import NFTMarket from "../../store/web3/testnet/Market.json";

import {
  // providerInstance,
  // marketInstance,
  // tokenInstance,
  currentProfile,
} from "../../store/components/users/auth";
import SwitchModal from "../modals/switch";
import { buyTokenFn } from "../../store/components/tokens/nft";
// import {  loading,loaded } from "../../store/components/overlay/overlay";
import { NFT_IMAGE_URL } from "../../store/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { BsText } from "../../constants/text";
import Modal from "react-modal";
// import { Input } from "../common/Textfields";
import { PrimaryButton } from "../button/Button";
// import { Formik } from "formik";
// import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "0px",
    zIndex: 999,
    minWidth: "40%",
    maxHeight: "100%",
    overflowY: "auto",
  },
};
const ModalForm = ({
  isOpen,
  onRequestClose,
  image,
  price,
  title,
  buyNFT,
  item,
  details,
  myCollections,
}) => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log(details, "items");

  console.log(details, "item");
  useEffect(() => {
    // loadCollections(details?.profile?._id);
    // getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const serviceFee = parseFloat(price) * 0.025;
  const [collection, setCollection] = useState({
    name: myCollections[0]?.name,
    id: myCollections[0]?._id,
  });
  const [open, setOpen] = useState(false);

  return (
    <Modal
      style={style}
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      contentLabel="Buy NFT Modal"
      ariaHideApp={false}
    >
      <div className="px-8 md:py-8 py-6 md:px-12 scroll-component  w-full bg-tag-dark  z-50">
        {/* content */}
        <div className="border-0 rounded-lg  flex flex-col w-full outline-none focus:outline-none ">
          {/* header */}
          <div className=" border-b pb-3 pt-8 mb-3">
            <div className="flex justify-between items-center space-x-2">
              <BsText className="!text-white">Buy NFT</BsText>
              <button
                onClick={openModal}
                className="text-tag-brand font-semibold text-sm md:text-base hover:text-white"
              >
                Switch network
              </button>
            </div>
            <SwitchModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              image={item}
              title="Nft title"
            />
            <button
              type="button"
              className="opacity- outline-none text-2xl text-white
               font-bold focus:outline-none absolute hover:text-tag-brand transition ease details-300 px-2.5 py-px right-8 top-4 hover:bg-opacity-50"
              onClick={onRequestClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          {/* body */}
          <div className=" pt-3">
            {/* form */}{" "}
            <div
              className="flex flex-col space-y-3"
              // onSubmit={formik.handleSubmit}
            >
              <div className="overflow-hidden">
                {/* <img
                  src={`${NFT_IMAGE_URL}/${image}`}
                  loading="lazy" alt={title}
                  className="object-cover h-[300px] scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-3 rounded-t z-10"
                /> */}
                 <div
                      className="object-cover h-[300px] scale-100 transition duration-300 ease-linear group-hover:scale-110 group-hover:rotate-3 rounded-t z-10"
                      style={{
                        background: `linear-gradient(
              to bottom,
              rgba(0,0,0, 0),
              rgba(0,0,0, 0)
            ), url(${`${NFT_IMAGE_URL}/${image}`})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                      }}
                    ></div>
              </div>
              <BsText className="!text-white font-semibold">{title}</BsText>

              <hr />
              <div className="flex justify-between items-center">
                <p className="text-tag-text text-base">Price</p>
                <p className="font-semibold text-base text-tag-text">
                  {price} {details?.nft?.chain === 80001 ? "MATIC" : "ETH"}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-tag-text text-base">Service fee:</p>
                <p className="font-semibold text-base text-tag-text">
                2.5%  {/* {serviceFee} {details?.nft?.chain === 80001 ? "MATIC" : "ETH"} */}
                </p>
              </div>
              <div className="input-group flex flex-col ">
                {/* <label
                      htmlFor='collection'
                      className={`text-[15px] text-gray-800 font-semibold text-left`}
                    >
                      Choose collection
                    </label> */}
                <div className="relative">
                  <button
                    type="button"
                    className={`flex justify-between items-center cursor-pointer bg-tag-dark text-white px-3 sm:px-2 w-full h-[40px] mt-1  form-input placeholder-gray-400 focus:border-gray-700 active:border-gray-700 hover:border-gray-700 focus:bg-tag-darker !rounded font-medium text-[15px]
                            focus:text-white border-2 border-gray-700`}
                    onClick={() => setOpen(!open)}
                  >
                    <h5 className="capitalize text-sm text-white">
                      Selected Collection: {collection?.name}
                    </h5>
                    {open ? (
                      <i
                        className="fa fa-angle-up text-xl"
                        aria-hidden="true"
                      />
                    ) : (
                      <i
                        className="fa fa-angle-down text-xl"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {/* Site navigation */}
                  <nav
                    className={`${
                      open ? "flex" : "hidden"
                    }  bg-tag-darker mt-1 shadow-sm absolute bottom-full right-0 flex-col divide-y w-max   py-2 lg:py-0  `}
                  >
                    {myCollections?.map((el) => (
                      <button
                        type="button"
                        onClick={() => {
                          setCollection({ name: el.name, id: el._id });
                          setOpen(!open);
                        }}
                        className={`capitalize hover:bg-tag-dark hover:shadow-sm transition ease duration-300 text-white px-2 sm:px-2 w-full h-[40px]  font-medium text-[12px]
                        hover:text-white text-left flex items-center `}
                        value={el.name}
                      >
                        {el.name}
                      </button>
                    ))}
                    <Link
                      to="/create-collections"
                      className={`capitalize hover:bg-tag-dark hover:shadow-sm transition ease duration-300 text-white px-3 sm:px-4 w-full h-[40px]  font-medium text-[12px]
                        hover:text-white text-left flex items-center `}
                    >
                      <i className="fa fa-plus mr-2" /> Create collection
                    </Link>
                  </nav>
                </div>
              </div>
              {/* <div className='flex justify-between items-center'>
                    <p className='text-tag-text text-base'>Total bid amount:</p>
                    <p className='font-semibold text-base text-tag-text'>
                      56,031 BSC
                    </p>
                  </div> */}
              {/* Submit */}
              <div className="">
                <PrimaryButton
                  type="submit"
                  className="w-full"
                  onClick={async () => {
                    dispatch(loading());

                    const web3Modal = new Web3Modal();

                    const connection = await web3Modal.connect();

                    let providerInsatnce = new Web3(connection);

                    const chainId = await providerInsatnce.eth.net.getId();

                    const tokenAddress = chainId === 80001 ? nftaddress : ethnftaddress;
                      

                    const marketAddress = chainId === 80001 ? nftmarketaddress : ethmarketaddress;

                    const token = new providerInsatnce.eth.Contract(NFTMarket.abi, `${marketAddress.toLowerCase()}`)

                    if (details?.nft?.chain === chainId) {
                      try {

                        await token.methods 
                          .createMarketSale(tokenAddress, `${item}`)
                          .send({
                            gas: 250000,
                            from: window.ethereum?.selectedAddress,
                            value: providerInsatnce.utils.toWei(`${price}`),
                          });

                        const { nft } = details;

                        await buyNFT(nft?._id, {
                          collection_id: collection?.id,
                        });

                        dispatch(loadFinish());

                        Notiflix.Report.success(
                          "NFT Purchased!",
                          "",
                          "Continue"
                        );
                      } catch (error) {
                        dispatch(loadFinish());

                        Notiflix.Report.failure(
                          "NFT Purchase Failed!",
                          "",
                          "Ok"
                        );

                        console.log(error);
                      }
                    } else if (typeof window.ethereum === "undefined") {
                      dispatch(loadFinish());

                      Notiflix.Report.failure(
                        "Connect to a provider/wallet",
                        "",
                        "Ok",
                        function cb() {
                          history(`/wallet-connect`);
                        }
                      );
                    } else if (
                      details?.nft?.chain === undefined &&
                      details?.nft?.chain !== 3 &&
                      details?.nft?.chain !== 80001
                    ) {
                      dispatch(loadFinish());

                      Notiflix.Report.failure(
                        "Invalid Network",
                        "The Network Of The NFT Is Invalid Or Not Supported",
                        "Ok"
                      );
                    } else {
                      dispatch(loadFinish());

                      Notiflix.Report.warning(
                        `Switch network to ${
                          details?.nft?.chain === 80001 ? "Polygon" : "Ethereum"
                        } Network`,
                        "",
                        "Continue",
                        function cb() {
                          openModal();
                        }
                      );
                    }
                  }}
                >
                  Buy
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  // loadCollections: (id) => dispatch(userCollectionFn(id)),

  // getProfile: () => dispatch(getMyProfileFn()),

  buyNFT: (id, data) => dispatch(buyTokenFn(id, data)),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  // provider: providerInstance,

  // token: tokenInstance,

  // market: marketInstance,

  profile: currentProfile,

  myCollections: selectMyCollections,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
