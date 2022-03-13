import React from "react";
import { Link } from "react-router-dom";
// import { PrimaryButton } from "../../components/button/Button";
// import bg from '../../assets/img/bg/Frame.svg';
// import Logo from '../../components/Logo';
import { ReactComponent as Logoo } from "../../assets/svg/Xblack.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  // faTelegram,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import hero from "../../assets/img/bg/new-hero-1.png";
import her from "../../assets/img/bg/bgt.png";
// import facebook from "../../assets/img/icons/facebook.png";
// import reddit from "../../assets/img/icons/reddit.png";
// import instagram from "../../assets/img/icons/instagram.png";
// import linkedin from "../../assets/img/icons/linkedin.png";
// import history from '../../utils/history'
const HomeBanner = () => {
  return (
    <section className=' bg-tag-dark relative mb-12'>
      <div
        className=''
        style={{
          backgroundImage: `url(${her})`,
          backgroundPostion: "right 0% bottom 0%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={`py-12 md:py-28 wrapper bg-tag-dark bg-opacity-10`}>
          <div className='flex flex-col space-y-4 w-full md:w-1/2'>
            <div className='w-full flex md:justify-start justify-center'>
              <Logoo className='h-40 w-40' />
            </div>
            <h1 className={`${heading} leading-relaxed`}>
              Art is about passion and authenticity.
            </h1>
            <p className='text-lg font-semibold text-gray-50 font-montserrat md:text-left text-center lg:text-xl md:text-lg pt-2'>
              The X Studio unites genuine artists with art euthusiasts
            </p>
            <div className='flex pt-3 space-x-6  items-center justify-center md:justify-start mt-12'>
              <a
                href='https://'
                target='_blank'
                rel='noreferrer'
                className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
              >
                <FontAwesomeIcon icon={faFacebookF} className='text-3xl ' />
              </a>
              <a
                href='https://'
                target='_blank'
                rel='noreferrer'
                className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
              >
                <FontAwesomeIcon icon={faYoutube} className='text-3xl ' />
              </a>
              <a
                href='https://'
                target='_blank'
                rel='noreferrer'
                className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
              >
                <FontAwesomeIcon icon={faTwitter} className='text-3xl ' />
              </a>
              <a
                href='https://'
                target='_blank'
                rel='noreferrer'
                className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
              >
                <FontAwesomeIcon icon={faInstagram} className='text-3xl ' />
              </a>
            </div>
            <div className='text-center md:text-left pt-8 mt-8'>
              <Link
                className={`text-base md:text-lg text-white py-3 px-10 bg-tag-brand font-semibold hover:bg-opacity-90 hover:text-white rounded-md`}
                to='/collections'
              >
                Explore
              </Link>
              {/* <button onClick={()=> history.z('/create-nft')}>push</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

// const container = `grid md:pr-0 relative md:pl-8 rounded-[20px] !bg-tag-darker grid-cols-12 items-center mb-12 gap-x-7 gap-y-5 xl:rounded-bl-[150px] before:content-none after:content-none xl:after:absolute after:bg-tag-darker after:w-[100px] after:h-[100px] after:bottom-[60px] after:rounded-bl-[20px] after:bg-tag-darker xl:before:absolute before:w-[740px] before:h-[70px] before:bg-white before:bottom-0 before:-bottom-[10px] before:-left-[20px] __bann49`;

// const colSpan = `md:col-span-6 pt-10 px-6 md:px-12 md:px-0 md:pt-0 col-span-full flex flex-col space-y-6 relative xl:after:absolute after:content-none after:bg-white after:w-[100px] after:h-[110px] after:-right-[77px] z-10 after:-bottom-[240px] after:rotate-[-36.45deg] __bann498`;

const heading = `md:text-5xl xl:text-6xl sm:text-4xl text-3xl md:leading-tight md:text-left text-center px-4 md:px-0 font-bold font-sora text-white`;
