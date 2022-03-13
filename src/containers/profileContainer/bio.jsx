import React from "react";
import truncate from "truncate";
import { BsText, SmText } from "../../constants/text";

const Bio = ({ collections, creations, bioInfo }) => {
  return (
    <section
      className='flex flex-col gap-8 '
      data-aos='fade-right'
      data-aos-delay='200'
    >
      <div className='grid grid-cols-1 gap-2'>
        <BsText className='font-bold text-white '>About me</BsText>
        <div className='flex-col p-4 bg-dark-700 gap-4 flex md:w-96 w-full'>
          <SmText className='text-dark-400'>{bioInfo}</SmText>
          <aside className='flex gap-12'>
            <div className='flex flex-col'>
              <BsText className='text-white'>Collections</BsText>
              <BsText className='text-white font-extrabold'>
                {collections}
              </BsText>
            </div>
            <div className='flex flex-col'>
              <BsText className='text-white '>Creations</BsText>
              <BsText className='text-white font-extrabold'>{creations}</BsText>
            </div>
          </aside>
        </div>
      </div>
      {/* follow me */}
      <div className='grid grid-cols-1 gap-2'>
        <BsText className='font-bold text-white'>Follow me</BsText>
        <div
          data-aos='fade-right'
          data-aos-delay='200'
          className='flex-col p-4 bg-dark-700 flex gap-2'
        >
          {[0, 1, 2, 3].map((index) => (
            <BsText key={index} className='flex gap-2 items-center text-white'>
              <span
                className=' text-red-700 rounded-full font-bold text-base h-3 w-3 flex
        items-center justify-center px-3 py-3 bg-dark-900 bg-opacity-80'
              >
                <i className='fa fa-facebook-f'></i>
              </span>
              {truncate("facebook.com/nftglobal/where", 15)}
            </BsText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
