/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Web3 from "web3";
import { SyncLoader } from "react-spinners";
import * as Yup from "yup";
import { Formik } from "formik";
import Notiflix from "notiflix";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import uploadIcon from "../../assets/img/icons/pic.png";
import { PrimaryButton } from "../../components/button/Button";
import { Input, TextArea } from "../../components/common/Textfields";
import { useState } from "react";
import { FILE_PIN_URL, JSON_PIN_URL } from "../../constants/upload";
import {
  handleFileUpload,
  ipfsFilePrepare,
  nftUpload,
  ipfsJsonPrepare,
  prepareIpfsMetadata,
} from "../../utils/upload";
import { loading, loadFinish  } from "../../store/components/overlay/overlay";
import SwitchModal from "../../components/modals/switch";
import {
  selectMyCollections,
  // allMyCollectionsFn,
} from "./../../store/components/collections/collections";
import { nftCreationFn } from "./../../store/components/tokens/nft";
import {
  tokenInstance,
  providerInstance,
} from "./../../store/components/users/auth";
import { SmText } from "../../constants/text";

import { Link, useLocation, useNavigate } from "react-router-dom";

// icons eth / matic
import { ReactComponent as Eth } from "../../assets/svg/eth.svg";
import { ReactComponent as Matic } from "../../assets/svg/matic.svg";

const CreateNftContent = ({ myCollections, createNft, TOKEN, PROVIDER }) => {
  const dispatch = useDispatch();
  const [chainId, setChainId] = useState();


  const location = useLocation();

  // link state of create nft from collection details page
  const linkCollection = location?.state;
  const name = linkCollection?.data?.name;
  const id = linkCollection?.data?._id;


  // modal
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setCollection({
      name: `${ name || myCollections[0]?.name }`,
      id: `${id || myCollections[0]?._id}`,
    });
  }, [chainId, id, myCollections, name]);
  function closeModal() {
    setIsOpen(false);
  }
  //   useEffect(async() => {
  //  try{
  //    const collections =  await myCollections
  //  }catch(error){
  //    alert('collection')
  //  }
  //   }, []);
  const history = useNavigate();
  PROVIDER?.eth?.net?.getId().then((chain) => {
    setChainId(chain);
  });

  const [open, setOpen] = useState(false);

  // collection state, first check for pre data
  const [collection, setCollection] = useState({
    name: `${ myCollections[0]?.name || name}`,
    id: `${myCollections[0]?._id || id}`,
  });

  
  const [image, setImage] = useState();

  let backendNftData = {
    owner: "",
    creator: "",
    collection_id: "",
    name: "",
    description: "",
    metadata_hash: "",
    hash: "",
    image: "",
    item_id: "",
    token: "",
    price: "",
    // sold: 0,
  };

  return (
    <section className='pb-28 pt-20 bg-tag-hardLight'>
      <SwitchModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title='Nft title'
        setChainId={setChainId}
      />
      <div className='wrapper '>
        <h1 className='text-2xl md:text-3xl font-bold font-sora text-center mb-10'>
          Create NFT
        </h1>

        <div className='grid md:grid-cols-2 gap-6  bg-white xl:p-10 px-5 py-8 shadow'>
          {/* Uplaod image */}
          {image ? (
            <div className='overflow-hidden max-h-1/2 relative'>
              <button
                onClick={() => setImage()}
                className='hover:bg-red-500 bg-red-500 bg-opacity-60 h-10 w-10 text-base absolute top-2 right-2 font-bold rounded-full shadow-sm text-white'
              >
                X
              </button>
              <img src={image.file} loading="lazy" alt='upload pictures' className='h-full ' />
            </div>
          ) : (
            <div className='box in__upload'>
              <div className='left__part upload_file'>
                <div className='flex flex-col items-center justify-center space-y-4 mt-8'>
                  <div className='text-center flex flex-col justify-center items-center space-y-8'>
                    <img
                      src={uploadIcon}
                      loading="lazy" alt='icon'
                      className='text-center max-w-full h-20 w-20'
                    />
                    <h5 className='text-black lg:text-lg font-bold text-base font-display'>
                    Choose file to upload
                    </h5>
                    <p className='text-gray-600 font-medium'>
                    PNG, GIF, JPG, JPEG. Max 100mb.
                    </p>
                  </div>
                  <div className='pt-10'>
                    <div className='text-center flex flex-col justify-center items-center space-y-8'>
                      <p className='text-gray-600 font-medium'>
                        or choose a file
                      </p>
                      <PrimaryButton
                        className='!px-4 !py-3 !text-lg'
                        text='Browse files'
                      />
                      <input
                        id='file'
                        name='file'
                        type='file'
                        // value={formik.values.image}
                        onChange={(e) => handleFileUpload(e, setImage)}
                        // {...formik.getFieldProps("image")}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Form */}
          <Formik
            enableReinitialize
            initialValues={{
              image: "",
              title: "",
              desc: "",
              price: "",
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string().required("Title Is Required."),

              desc: Yup.string()
                .required("Description Is Required.")
                .min(10, "Must be above 10 letters")
                .max(250, "Must be exactly 250 letters"),

              price: Yup.string()
                .typeError("Price Must Be A Number")
                .required("Price Is Required"),
            })}
            onSubmit={async (values, { resetForm }) => {
              if (myCollections.length < 1) {
                return alert("No collection");
                
              }

              dispatch(loading());

              const { title, desc, price } = values;

              backendNftData = {
                ...backendNftData,
                name: title,
                description: desc,
                price,
              };

              let data = new FormData();

              data.append("file", image?.nft);

              const nftFile = ipfsFilePrepare({ name: title, desc }, data);

              const nftJson = ipfsJsonPrepare({ name: title, desc });

              await nftUpload(FILE_PIN_URL, data)
                .then((response) => {
                  const metaDeploy = prepareIpfsMetadata(
                    JSON_PIN_URL,
                    response,
                    nftJson,
                    nftFile.imgPayload
                  );

                  backendNftData = {
                    ...backendNftData,
                    collection_id: collection?.id,
                    image: response.data.IpfsHash,
                  };

                  // setBackendNftData((prev) => ({
                  //   ...prev,
                  //   collection_id: myCollections[0]?._id,
                  //   image: response.data.IpfsHash,
                  // }));
                  console.log(response);
                  console.log(response?.data?.IpfsHash);

                  return metaDeploy;
                })
                .then(async (response) => {
                  console.log(response.data);
                  console.log(response?.data?.IpfsHash);
                  console.log(backendNftData, "mmmmm");
                  backendNftData = {
                    ...backendNftData,
                    metadata_hash: response?.data?.IpfsHash,
                  };

                  // setBackendNftData((prev) => ({
                  //   ...prev,
                  //   metadata_hash: response?.data?.IpfsHash,
                  // }));

                  // console.log(backendNftData, "bbbbbbbb");

                  const tx = await TOKEN.methods
                    .createToken(
                      `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`,
                      Web3.utils.toWei(`${price}`, "ether")
                    )
                    .send({
                      from: window.ethereum?.selectedAddress,
                    });

                    console.log(tx)

                  return {
                    data: tx?.events?.MarketItemCreated[1]?.returnValues,

                    transactionHash: tx?.transactionHash,
                  };
                })
                .then(async (response) => {
                  console.log("dddddd", response);
                  const {
                    itemId,
                    nftContract,
                    tokenId,
                    seller,
                    owner,
                    price,
                    sold,
                  } = response.data;

                  let chainName = await PROVIDER.eth.net.getId();
                  backendNftData = {
                    ...backendNftData,
                    hash: response.transactionHash,
                    item_id: itemId.toString(),
                    token: tokenId.toString(),
                    owner: seller,
                    creator: seller,
                    chain: chainName,
                  };

                  // setBackendNftData((prev) => ({
                  //   ...prev,
                  //   hash: response.transactionHash,
                  //   item_id: itemId.toString(),
                  //   token: tokenId.toString(),
                  //   owner: seller,
                  //   creator: seller,
                  // }));

                  console.log(itemId.toString());

                  console.log(backendNftData);

                  await createNft(backendNftData);

                  Notiflix.Notify.success("NFT minted!");

                  resetForm({
                    title: "",
                    desc: "",
                    price: "",
                  });
                  setImage();
                  history(`/creator/${window?.ethereum?.selectedAddress}`);
                })
                .catch(function (error) {
                  console.log(error);
                  
                  dispatch(loadFinish());
                  // history(`/collection-details/${collection._id}`);

                  // Notiflix.Notify.failure(error.message);
                });
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-1 gap-y-6'>
                  {/* Title */}
                  <div className='form-group'>
                    <Input
                      label='Title'
                      placeholder='e.g `NFT Global design art`'
                      name='title'
                      className=''
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("title")}
                    />
                    {formik.touched.title && formik.errors.title ? (
                      <p className='pt-2 text-sm font-semibold text-red-600'>
                        {formik.errors.title}
                      </p>
                    ) : null}
                  </div>
                  {/* Description */}
                  <div className='form-group'>
                    <TextArea
                      label='Description'
                      placeholder='e.g `NFT Global design art`'
                      name='desc'
                      value={formik.values.desc}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("desc")}
                    />
                    {formik.touched.desc && formik.errors.desc ? (
                      <p className='pt-2 text-sm font-semibold text-red-600'>
                        {formik.errors.desc}
                      </p>
                    ) : null}
                  </div>
                  {/* Price */}
                  <div className='relative'>
                    <div className='form-group relative'>
                      <Input
                        type='number'
                        label='Price'
                        placeholder='e.g `120`'
                        name='price'
                        className='relative'
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps("price")}
                      />
                      <span className='text-base text-gray-700 absolute bottom-[15px] right-[15px]'>
                        {chainId === 80001 ? "MATIC" : "Eth"}
                      </span>
                    </div>
                    {formik.touched.price && formik.errors.price ? (
                      <p className='pt-2 text-sm font-semibold text-red-600'>
                        {formik.errors.price}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor='collection'
                      className={`text-[15px] text-gray-800 font-semibold text-left`}
                    >
                      Network
                    </label>
                    <div className='flex  justify-between items-center py-3 px-4 rounded border border-gray-200'>
                      <h3
                        className={`text-[15px] text-gray-800 font-semibold text-left flex items-center`}
                      >
                        {chainId === 80001 ? (
                          <Matic
                            throwIfNamespace='false'
                            className='h-6 w-6 mr-2 '
                          />
                        ) : (
                          <Eth
                            throwIfNamespace='false'
                            className='h-6 w-6 mr-2 '
                          />
                        )}
                        {chainId === 80001 ? "Polygon" : "Ethereum"}
                      </h3>
                      <button
                        onClick={openModal}
                        className='text-tag-brand text-sm hover:text-red-600'
                      >
                        Switch network
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className='input-group flex flex-col relative'>
                      <label
                        htmlFor='collection'
                        className={`text-[15px] text-gray-800 font-semibold text-left`}
                      >
                        Collection
                      </label>
                      <div className='relative'>
                        <button
                          type='button'
                          className={`flex justify-between items-center cursor-pointer text-black px-3 sm:px-4 w-full h-[50px] mt-3  form-input placeholder-gray-400 focus:border-gray-700 active:border-gray-700 hover:border-gray-700 focus:bg-white !rounded font-medium text-[15px]
                            focus:text-black border border-gray-200`}
                          onClick={() => setOpen(!open)}
                        >
                          <SmText className='capitalize'>
                            collection: {collection?.name}
                          </SmText>
                          {open ? (
                            <i
                              className='fa fa-angle-up text-xl'
                              aria-hidden='true'
                            />
                          ) : (
                            <i
                              className='fa fa-angle-down text-xl'
                              aria-hidden='true'
                            />
                          )}
                        </button>
                        {/* Site navigation */}
                        <nav
                          className={`${
                            open ? "flex" : "hidden"
                          }  bg-white mt-1 shadow-sm absolute -top-2/5 left-0 flex-col divide-y w-full py-3 lg:py-0  `}
                        >
                          {myCollections?.map((el) => (
                            <button
                              type='button'
                              onClick={() => {
                                setCollection({ name: el.name, id: el._id });
                                setOpen(!open);
                              }}
                              className={`capitalize hover:bg-tag-hardLight hover:shadow-sm transition ease duration-300 text-black px-3 sm:px-4 w-full h-[50px]  font-medium text-[15px]
                        hover:text-black text-left flex items-center `}
                              value={el.name}
                            >
                              {el.name}
                            </button>
                          ))}
                          <Link
                            to='/create-collections'
                            className={`capitalize hover:bg-tag-hardLight hover:shadow-sm transition ease duration-300 text-black px-3 sm:px-4 w-full h-[50px]  font-medium text-[15px]
                        hover:text-black text-left flex items-center `}
                          >
                            <i className='fa fa-plus mr-2' /> Create collection
                          </Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Submit */}
                  <div className='form-group mt-5 '>
                    <PrimaryButton
                      // disabled={loading}
                      type='submit'
                      className='!text-lg !py-2 !px-5 '
                    >
                      {false ? (
                        <SyncLoader size={20} loading color='white' />
                      ) : (
                        <>
                          Create Item
                          <span className='fa fa-plus text-white pl-3' />
                        </>
                      )}
                    </PrimaryButton>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = createStructuredSelector({
  TOKEN: tokenInstance,
  PROVIDER: providerInstance,
  myCollections: selectMyCollections,
});

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  createNft: (data) => dispatch(nftCreationFn(data)),
  // loadMyCollections: () => dispatch(allMyCollectionsFn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNftContent);
