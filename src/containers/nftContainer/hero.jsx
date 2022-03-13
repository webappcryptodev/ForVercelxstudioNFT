import React from "react";
import bg from "../../assets/img/items/item_11.png";

const Section = `w-full `;
const ContentWrapper = `container px-4 lg:px-10 pt-24 pb-[140px]`;
const Content = `flex items-center gap-4`;
const Image = `border-1 shadow-lg border-gray-100 rounded-md w-40 h-32 mb-4`;
const H1 = `xl:text-6xl lg:text-4xl text-3xl text-white font-bold uppercase`;
const InfoSectionContainer = `px-4 lg:px-10 -mt-16`;
const InfoSection = `bg-white py-5 px-8 shadow-lg max-w-lg rounded-md`;
const InfoSectionWrap = `flex justify-between flex-wrap`;
const SmallSecContentWrap = `flex flex-col space-y-3 mb-4 sm:mb-0`;
const InfoSectionHead = `text-lg text-gray-600 font-bold`;
const InfoSectionText = `font-bold text-2xl text-black flex`;

const Hero = ({amount}) => {
  return (
    <div>
      <>
        <section
          className={Section}
          style={{
            background: `linear-gradient(
    to left,
    rgba(0,0,0, 0.5),
    rgba(0,0,0, 0.8)
  ), url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
          }}
        >
          <div className={ContentWrapper}>
            <div className={Content}>
              <img src={bg} loading="lazy" alt='art' className={Image} />
             
              <h1 className={H1}>NFT Gallery</h1>
            
            </div>
          </div>
        </section>
        <div className={InfoSectionContainer}>
          <div className={InfoSection}>
            <div className={InfoSectionWrap}>
              {/* Collection of */}
              <div className={SmallSecContentWrap}>
                <h3 className={InfoSectionHead}>Amount NFT</h3>
                <p className={InfoSectionText}>{amount}</p>
              </div>
              {/* Owned by */}
              {/* <div className={SmallSecContentWrap}>
                <h3 className={InfoSectionHead}>Owned by</h3>
                <p className={InfoSectionText}>
                
                  <img
                    className='h-8 w-8 rounded-full object-cover ml-3'
                    src={avatar}
                    loading="lazy" alt='avatar'
                  />
                  {`@${truncate(creator, 10)}`}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hero;
