// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "react-upload-gallery/dist/style.css";
// import RUG, { DropArea } from "react-upload-gallery";
// import bg from "../../assets/img/bg/cover.jpg";
import {ReactComponent as UploadPlus} from "../../assets/img/icons/upload-plus.svg";
// import { MoonLoader } from "react-spinners";
import { MdHeading } from "../../constants/text";
import { useState, useEffect } from "react";
import { PROFILE_COVER_URL } from "../../store/routes/routes";
import {
  currentProfile,
  userEditCover,
} from "../../store/components/users/auth";
import UploadModalForm from "./upload";

const EditHeader = ({ profile, editAccountCover }) => {
  const [prPic, setPrPic] = useState(`${PROFILE_COVER_URL}/${profile?.cover}`);

  useEffect(() => {
    setPrPic(`${PROFILE_COVER_URL}/${profile?.cover}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.cover]);

  // upload modalconfig
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [error, setError] = useState(false)

  useEffect(() => {
    // loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
      <div style={{ backgroundColor: `${profile?.color}` }}>
      <div
        className=""
        style={{
          background: `url(${
            profile?.cover || !prPic.includes("undefined") ? prPic : ''
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* cover pictures  */}
        <div className="pb-64 pt-7 wrapper">
          {/* <div className="bg-white rounded-full border px-5 py-2 text-base font-semibold inline-flex items-center space-x-3">
            <Link to="/" className="text-tag-brand">
              Home
            </Link>
            <span className="fa fa-angle-right" />
            <span>Edit profile</span>
          </div> */}
        </div>
        </div>
      </div>
      
      <div className="mt-10 edit_profile wrapper">
        <MdHeading text="Choose your cover image" className="pb-6 !text-2xl" />
        <div className="grid grid-cols-2 gap-4 sm:flex items-center sm:space-x-5 profile-img">
        
          <button
                onClick={openModal} className='w-min flex justify-item'>
          <div className=" items-center">
            <div className="box in__profile flex justify-items-center items-center">
              {/* <img className="" src={uploadPlus} loading="lazy" alt="upload cover" /> */}
              {/* <input
                id="file"
                name="file"
                className="hiiden"
              /> */}
              <UploadPlus className='h-16 w-16'/>
            </div>
                
          </div>  </button>
          <UploadModalForm
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            />
          <div className="">
            {/* <div className={isActiv}>
              {loaded ? (
                <div className=' h-28 w-28 items-center flex justify-center'>
                  {" "}
                  <MoonLoader size={18} loading color='black' />
                </div>
              ) : (
                <img
                  src={image ||  !prPic.includes("undefined") ? prPic : bg}
                  className='rounded-[10px] h-full w-full'
                  loading="lazy" alt='cover                                                                                                                                                                                                                                                                          '
                />
              )}
            </div> */}
          </div>
          {/* <div className=''>
            <div className={proImg}>
              <img src={cover1} loading="lazy" alt='' className='rounded-[10px]' />
            </div>
          </div>
          <div className=''>
            <div className={proImg}>
              <img src={cover1} loading="lazy" alt='' className='rounded-[10px]' />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  profile: currentProfile,
});

//send dispatch action to component props
const mapDispatchToProps = (dispatch) => ({
  editAccountCover: (user) => dispatch(userEditCover(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditHeader);

// const isActive = `pro_img w-40 h-24 is_active scale-100 hover:opacity-80 hover:scale-90 cursor-pointer transition-all duration-300 ease-in-out`;
