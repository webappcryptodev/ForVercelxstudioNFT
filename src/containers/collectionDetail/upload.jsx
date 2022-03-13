import React, { useState } from "react";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import uploadIcon from "../../assets/img/icons/pic.png";

import {
  collectionEditPic,
  myCollectionFn,
} from "../../store/components/collections/collections";
import Modal from "react-modal";
import { PrimaryButton } from "../../components/button/Button";

// import { MoonLoader } from "react-spinners";

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
  },
};
const UploadModalForm = ({
  isOpen,
  onRequestClose,
  collection,
  price,
  title,
  provider,
  token,
  market,
}) => {
  // const [prPic, setPrPic] = useState();

  const [image, setImage] = useState();
  const [, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const handleFileUpload = async (event) => {
    setLoaded(true);

    try {
      let data = new FormData();

      setLoaded(false);
      let reader = new FileReader();
      let file = event.target.files[0];
      data.append("image", file);

      reader.onloadend = () => {
        
        setImage(reader.result);
        dispatch(collectionEditPic(collection._id, data));
        dispatch(myCollectionFn(collection._id));
      };
      reader.readAsDataURL(file);

      // Notiflix.Notify.success("Collection Image updated!!");
    } catch (err) {
      setLoaded(false);
      Notiflix.Notify.failure(err.message);
    }
  };

  return (
    <Modal
      style={style}
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {image ? (
        <div className="p-2 bg-white flex flex-col justify-center">
          {/* {loaded ? (
            <div className=' h-28 w-28 items-center flex justify-center'>
              {" "}
              <MoonLoader size={18} loading color='black' />
            </div>
          ) : ( */}
          <>
            <div className="overflow-hidden relative">
              {/* <button
                  onClick={() => onRequestClose()}
                  className='hover:bg-red-500 bg-red-500 bg-opacity-60 h-10 w-10 text-base absolute top-2 right-2 font-bold rounded-full shadow-sm text-white'
                >
                  X
                </button> */}
              <img src={image} alt="upload pictures" className="h-96" />
              <PrimaryButton
                className="!w-full justify-self-center mt-2  "
                onClick={() => window.location.reload()}
              >
                Reload
              </PrimaryButton>
            </div>
          </>
          {/* )} */}
          {/* <PrimaryButton
            disabled={loaded}
            // onChange={(e) => handleFileUploadd(e, setImage)}
            className='!px-3 !py-2 !text-lg !my-4 !mx-4'
            text='UPLOAD'
          /> */}
        </div>
      ) : (
        <div className="box in__upload">
          <div className="left__part upload_file">
            <div className="flex flex-col items-center justify-center space-y-4 mt-8">
              <div className="text-center flex flex-col justify-center items-center space-y-8">
                <img
                  src={uploadIcon}
                  alt="icon"
                  className="text-center max-w-full h-20 w-20"
                />
                <h5 className="text-black lg:text-lg font-bold text-base font-display">
                Choose file to upload
                </h5>
                <p className="text-gray-600 font-medium">
                PNG, GIF, JPG, JPEG. Max 100mb.
                </p>
              </div>
              <div className="pt-10">
                <div className="text-center flex flex-col justify-center items-center space-y-8">
                  <p className="text-gray-600 font-medium">or choose a file</p>
                  <PrimaryButton
                    className="!px-4 !py-3 !text-lg"
                    text="Browse files"
                  />
                  <input
                    id="file"
                    name="file"
                    type="file"
                    // value={formik.values.image}
                    onChange={handleFileUpload}
                    // {...formik.getFieldProps("image")}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};


export default UploadModalForm;
