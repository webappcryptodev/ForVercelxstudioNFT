import BackToTop from "../backToTop/Top";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MetamaskProvider from "../../store/provider/status";
import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Link } from "react-router-dom";
// import { PrimaryButton } from "../../components/button/Button";
// import bg from '../../assets/img/bg/Frame.svg';
// import hero from "../../assets/img/bg/hero.png";
import facebook from "../../assets/svg/facebook.svg";
import reddit from "../../assets/svg/reddit.svg";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import bg from "../../assets/svg/bghead.svg";
import {ReactComponent as Cir} from "../../assets/svg/cir.svg";
import {ReactComponent as Head} from "../../assets/svg/head.svg";
// import history from '../../utils/history'
const style = {
  background: ` url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const HomeBanner = () => {
  // const { account } = MetamaskProvider();
  const { account } = useWeb3React();
  return (
    <section className='bg-tag-dark mb-8'>
      <div style={style} className='h-screen flex flex-col '>
        <Header
          wallet={account}
          styleLink='!text-white'
          className='!bg-transparent !border-none !shadow-none'
          classNameBg='!bg-transparent'
          btnClass='!text-white !bg-transparent'
          searchClass='!bg-gray-900 !bg-opacity-50 !text-white'
        />
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 items-center  overflow-hidden h-full'>
          <div className='flex flex-col justify-items-center ml-6'>
            <h1 className={heading}>
              There is no must in art because art is free.
            </h1>
            <p className='text-lg font-semibold text-gray-50 font-montserrat md:text-left text-center md:text-xl lg:text-lg'>
              Become now a part in the most innovative and revolutionary NFT
              marketplace. Buy, Sell, and Mint NFTs for free.
            </p>
            <div className='text-center md:text-left pt-8'>
              <Link
                className={`text-base md:text-lg text-white py-3 px-10 bg-tag-brand font-semibold hover:bg-opacity-80 hover:text-white rounded-md`}
                to='/create-nft'
              >
                Create
              </Link>
              {/* <button onClick={()=> history.z('/create-nft')}>push</button> */}
            </div>
          <div className='flex items-center space-x-4 mt-6 md:justify-start justify-center '>
            <a href='https://'>
              <img
                src={facebook}
                loading="lazy" alt='facebook'
                title='facebook'
                className=''
              />
            </a>
            <a href='https://'>
              <img
                src={linkedin}
                loading="lazy" alt='linkedin'
                title='linkedin'
                className=''
              />
            </a>
            <a href='https://'>
              <img src={reddit} loading="lazy" alt='reddit' title='reddit' className='' />
            </a>
            <a href='https://'>
              <img
                src={instagram}
                loading="lazy" alt='instagram'
                title='instagram'
                className=''
              />
            </a>
            </div>
          </div>
          <div className=' hidden md:grid gird-cols-1 justify-items-center '>
            <Cir className='w-full top-0 right-2/5 z-10 col-span-full row-span-full'/>

            <Head className='w-full top-0 right-2/5 z-30 col-span-full row-span-full mt-32'/>
        </div>
        </div>
      </div>
    </section>
  );
};
// const container = `grid md:pr-0 relative md:pl-8 rounded-[20px] !bg-tag-darker grid-cols-12 items-center mb-12 gap-x-7 gap-y-5 xl:rounded-bl-[150px] before:content-none after:content-none xl:after:absolute after:bg-tag-darker after:w-[100px] after:h-[100px] after:bottom-[60px] after:rounded-bl-[20px] after:bg-tag-darker xl:before:absolute before:w-[740px] before:h-[70px] before:bg-white before:bottom-0 before:-bottom-[10px] before:-left-[20px] __bann49`;

// const colSpan = `md:col-span-6 pt-10 px-6 md:px-12 md:px-0 md:pt-0 col-span-full flex flex-col space-y-6 relative xl:after:absolute after:content-none after:bg-white after:w-[100px] after:h-[110px] after:-right-[77px] z-10 after:-bottom-[240px] after:rotate-[-36.45deg] __bann498`;

const heading = `md:text-5xl xl:text-6xl sm:text-4xl text-3xl md:leading-tight md:text-left text-center px-4 md:px-0 font-bold font-sora text-white`;

const LayoutHome = ({ children }) => {
  return (
    <>
      <HomeBanner />
      <main>{children}</main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default LayoutHome;
