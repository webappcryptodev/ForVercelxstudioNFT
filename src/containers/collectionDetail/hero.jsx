import React, { useEffect, useState } from "react";
import truncate from "truncate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import {  } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  currentProfile,
  getMyProfileFn,
} from "./../../store/components/users/auth";
import UploadModalForm from "./upload";
import Avatar from "../../components/Avatar";

const Section = `w-full `;
const ContentWrapper = `container px-4 lg:px-10 pt-24 pb-[140px]`;
const Content = `flex flex-col space-y-6`;
const Image = `border border-white rounded-md w-40 h-32 `;
const Linkk = `rounded-full text-base py-2 px-5 bg-gray-900 text-gray-500 hover:bg-opacity-75 transition duration-300 ease-linear hover:text-white`;
const Span = `uppercase tracking-wide pr-2 text-white`;
const H1 = `xl:text-6xl lg:text-4xl text-3xl text-white font-bold uppercase`;
const CreatorBox = `flex items-center space-x-3 bg-gray-900 text-white rounded-full py-2 px-4 hover:text-white hover:bg-black`;

const Creator = `font-semibold tracking-wide  text-base `;
const InfoSectionContainer = `px-4 lg:px-10 -mt-16 z-40`;
const InfoSection = `bg-white py-5 px-8 shadow-lg max-w-lg rounded-md`;
const InfoSectionWrap = `flex justify-between flex-wrap`;
const SmallSecContentWrap = `flex flex-col space-y-3 mb-4 sm:mb-0`;
const InfoSectionHead = `text-lg text-gray-600 font-bold`;
const InfoSectionText = `font-bold text-2xl text-black flex`;

const Hero = ({
  collection,
  bg,
  link,
  image,
  artName,
  avatar,
  number,
  creator,
  address,
  user,
  profile,
  color,
  avImage,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [error, setError] = useState(false)
  console.log("profile",bg, image, collection);;

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
    <div className="z-0 relative ">
      <>
        <div style={{ backgroundColor: `${color}` }}>
          <section
            className={`${Section} `}
            style={{
              background: `linear-gradient(
    to left,
    rgba(0,0,0, 0.5),
    rgba(0,0,0, 0.8)
  ), url(${bg ? bg : ""})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center ",
            }}
          >
            <div className={` ${ContentWrapper}`}>
              <div className={`wrapper ${Content}`}>
                {bg ? <div style={{ backgroundColor: `${color}` }} className='rounded-md w-min h-min'>
                  {/* <img src={bg} lazy loading="lazy" onerror="this.style.display='none'"alt="art" className={`${error ? 'hidden' : 'block'}${Image}`} /> */}
                 <div 
                 className={` ${Image}`}
                 style={{
              background: `linear-gradient(
                to left,
                rgba(0,0,0, 0),
                rgba(0,0,0, 0)
              ), url(${bg ? bg : ""})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center ",
            }}></div>
                  </div> : ""}
                <div className="pt-6">
                  <Link to={link} className={Linkk}>
                    <span className={Span}>{address}</span>
                    <span className="fa fa-external-link" />
                  </Link>
                </div>
                {address === profile?.address ? (
              <Link
                to={`/update-collection/${collection?._id}`}
                state={collection}
                className="absolute top-2 right-2 bg-white text-black text-xl rounded-full shadow px-2.5 py-1  cursor-pointer"
              >
                <span className="fa fa-pencil" />
              </Link>
            ) : (
              ""
            )}
              <h1 className={`relative ${H1}`}>{collection?.name}</h1>
                <div className="inline-flex">
                  <Link to={link} className={CreatorBox}>
                    <Avatar
                      size="h-8 w-8"
                      frst1="Cy"
                      lst1="Ng"
                      textSize="sm"
                      color={color}
                      image={avImage}
                    />
                    <span className={Creator}>
                      {user || `@${truncate(creator, 15)}`}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {address === profile?.address ? (
              <button
                onClick={openModal}
                className="absolute bottom-2 right-2 bg-white text-black text-xl rounded-full shadow px-2.5 py-1  cursor-pointer"
              >
                <span className="fa fa-camera" />
              </button>
            ) : (
              ""
            )}
          
            <UploadModalForm
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              collection={collection}
            />
          </section>
        </div>
        <div className={InfoSectionContainer}>
          <div className={InfoSection}>
            <div className={InfoSectionWrap}>
              {/* Collection of */}
              <div className={SmallSecContentWrap}>
                <h3 className={InfoSectionHead}>Collection of</h3>
                <p className={InfoSectionText}>{number}</p>
              </div>
              {/* Owned by */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadProfile: () => dispatch(getMyProfileFn()),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  profile: currentProfile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
