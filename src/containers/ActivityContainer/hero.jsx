import React from "react";
import { GrayButton } from "../../components/button/Button";
import { paddingX } from "../../constants/spacing";
import { Heading } from "../../constants/text";

const ActivityHero = () => {
  return (
    <main >
      <div
        data-aos='fade-up'
        className={`${paddingX} h-96 md:px-6 px-4 bg-dark-700 flex items-center justify-center border-b-2 border-gray-700 `}
      >
        <Heading className='font-extrabold text-white text-center'>
          Activity Feed
        </Heading>
      </div>
      {/* nav */}
      <div
        className={`${paddingX} flex  justify-center gap-4 py-8 bg-dark-700 border-y-2 border-gray-700 overflow-hidden w-full` }
      >
        <div
          data-aos='fade-right'
          data-aos-delay='200'
          className='flex gap-4 items-center sm:overflow-x-hidden  overflow-x-scroll'
        >
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <GrayButton key={index}>Games</GrayButton>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ActivityHero;
