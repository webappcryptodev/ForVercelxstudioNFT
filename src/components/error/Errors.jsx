import { Link } from "react-router-dom";
import error_404 from "../../assets/img/err404.svg";
import error_500 from "../../assets/img/err5.svg";
import { PrimaryButton } from "../button/Button";
import gif from "../../assets/gif/connection.gif";
import noaccess from "../../assets/svg/noaccess.svg";
import empty from "../../assets/svg/empty.svg";
import { BsText } from "../../constants/text";
import Layout from "../Layout/Layout";

// Error 404
export const Error4 = () => (
  <section className='max-w-3xl mx-auto px-5 pb-10 pt-16 sm:pt-10'>
    <div className='text-center flex flex-col justify-center items-center'>
      <img src={error_404} loading="lazy" alt='error' className='img-fluid' />
    </div>
    <div className='text-center mt-4'>
      <PrimaryButton>
        <Link className={` text-sm xl:text-base  `} to='/'>
          Go to Homepage
        </Link>
      </PrimaryButton>
    </div>
  </section>
);

// Error 500
export const Error5 = () => (
  <section className='max-w-5xl mx-auto px-5 pt-20 pb-10 md:py-10'>
    <Link to='/' className='text-center '>
      <img src={error_500} loading="lazy" alt='error' className='img-fluid' />
    </Link>
  </section>
);

// No connection
export const NoConnection = () => (
  <section className='max-w-3xl mx-auto px-5 pb-10 pt-16 sm:pt-10'>
    <div className='text-center flex flex-col justify-center items-center'>
      <img src={gif} loading="lazy" alt='error' className='img-fluid' />
    </div>
    <BsText className='text-dark text-center  tracking-wide font-extrabold'>
      Check your network connection
    </BsText>
    <div className='text-center mt-4'>
      {/* <PrimaryButton>
        <Link className={` text-sm xl:text-base  `} to='/'>
          Go to Homepage
        </Link>
      </PrimaryButton> */}
    </div>
  </section>
);
// No connection
export const NoConnectionn = () => {
  const refreshPage = () => {
    window.location.reload(true);
  };
  return (
    <Layout>
    <section className='max-w-3xl mx-auto px-5 py-8 '>
      <div className='text-center flex flex-col justify-center items-center'>
        <img src={gif} loading="lazy" alt='error' className='img-fluid ' />
      </div>
      <BsText className='text-dark text-center  tracking-wide font-extrabold'>
        Check your network connection
      </BsText>
      <div className='text-center mt-4'>
        <PrimaryButton onClick={refreshPage}>Refresh</PrimaryButton>
      </div>
    </section>
    </Layout>
  );
};

// No Access
export const NoAccess = () => (
  <section className='max-w-3xl mx-auto px-5 pb-10 pt-16 sm:pt-10'>
    <div className='text-center flex flex-col justify-center items-center'>
      <img src={noaccess} loading="lazy" alt='error' className='img-fluid' />
    </div>{" "}
    <BsText className='text-dark text-center'>
      Restricted access, connect wallet.
    </BsText>
    <div className='text-center mt-4'>
      <PrimaryButton>
        <Link className={` text-sm xl:text-base  `} to='/'>
          Go to Homepage
        </Link>
      </PrimaryButton>
    </div>
  </section>
);

// Empty collection
export const EmptyCollection = () => (
  <div className='max-w-xs mx-auto mt-12 px-4 items-center'>
  <section className='max-w-3xl mx-auto px-5 pb-10 pt-16 sm:pt-10'>
    <div className='text-center flex flex-col justify-center items-center'>
      <img src={empty} loading="lazy" alt='error' className='img-fluid' />
    </div>
    <BsText className='text-dark text-center  tracking-wide font-extrabold'>
      Sorry, it's empty!
    </BsText>
  </section>
  </div>
);
