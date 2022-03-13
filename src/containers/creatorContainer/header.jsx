import React, { useState } from "react";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import truncate from "truncate";
import MoreButton from "../../components/button/More";
import ShareButton from "../../components/button/Share";
import { paddingX } from "../../constants/spacing";
import { BsText } from "../../constants/text";
import {PROFILE_COVER_URL,  PROFILE_IMAGE_URL } from "../../store/routes/routes"
 
export const RedButton = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={` ${className} bg-red-600 py-2 px-4 text-base text-white focus:outline-none`}
  >
    {children}
  </button>
);

const CreatorHeader = ({ bg, profile, account, name, creator , color}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(!copied);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const url = window.location.href;

  return (
    <main className='border-b-2 border-gray-700'
    style={{ backgroundColor: `${color}` }}>
      {/* cover pictures  */}
      <div
        className=''
        style={{
          background: `url(${profile?.cover ? `${PROFILE_COVER_URL}/${profile?.cover}` : bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* cover pictures  */}
        <div className='pb-64 pt-7 wrapper'>
          <div className='bg-white rounded-full border px-5 py-2 text-base font-semibold inline-flex items-center space-x-3'>
            <Link to='/' className='text-tag-brand'>
              Home
            </Link>
            <span className='fa fa-angle-right' />
            <span>Profile</span>
          </div>
        </div>
      </div>
      {/* bio details */}
      <div className='bg-black'>
        <div
          // data-aos='fade-left'
          data-aos-delay='200'
          className={`${paddingX} flex md:flex-row flex-col  justify-between  items-center wrapper`}
        >
          <aside className='flex  md:flex-row flex-col space-x-4  items-center'>
          <div style={{ backgroundColor: `${color}` }} className='overflow-hidden h-32 w-32 rounded-full border-4 border-dark-800 transform -translate-y-3'>
          {
            profile?.image ?  <img
            src={`${PROFILE_IMAGE_URL}/${profile?.image}`}
            loading="lazy" alt='profile avatar'
            className='h-full w-full  '
          /> : ''
          }
         
          </div>
            <BsText className='text-white'>
              {name || truncate(creator || account, 10)}
            </BsText>
          </aside>
          <div className='flex py-4 md:py-0 space-x-3 space-y-2 sm:space-y-0 sm:space-x-4 flex-wrap items-center justify-center'>
            <BsText
              className={`${
                copied ? "bg-green-500 bg-opacity-5" : "bg-dark-600"
              } text-white text-sm  py-2 px-4 flex  items-center`}
            >
              {copied ? (
                <span className='text-green-400 '>Copied!</span>
              ) : (
                <>{truncate(account, 10)}</>
              )}
              <CopyToClipboard text={account} onCopy={handleCopy}>
                <button className=' text-gray-300 ml-3  focus:outline-none'>
                  <i className='fa fa-clone'></i>
                </button>
              </CopyToClipboard>
            </BsText>
            {account === window?.ethereum?.selectedAddress ? (
              <Link
                to='/edit-profile'
                className='py-2 px-4 text-white bg-tag-brand text-base font-semibold'
              >
                Edit Profile
              </Link>
            ) : (
              <></>
            )}

            <ShareButton shareUrl={url} title={profile?.bio} /> 
            <MoreButton to='/report' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatorHeader;
