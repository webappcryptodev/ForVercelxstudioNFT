import React from "react";
import { paddingX } from "../../constants/spacing";
import { Heading, SmText } from "../../constants/text";

const UpcomingHero = () => {
  return (
    
      <main
      data-aos="fade-up"
        className={`${paddingX} h-96 md:px-6 px-4 bg-dark-700 flex items-center justify-center border-b-2 border-gray-700 `}
      >
        <div className='flex flex-col gap-6 items-center'>
          <Heading className='font-extrabold text-white text-center'>
            Upcoming NFT Projects
          </Heading>
          <SmText className=' text-dark-400 text-center'>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </SmText>
        </div>
      </main>
   
  );
};

export default UpcomingHero;