import React from "react";
import { Link } from "react-router-dom";
import { BsText, SmText } from "../../constants/text";

const ActivityTab = ({ image, read, collectionName, link, creatorName, time }) => {
  return (
      <main className={`${read ? '' : 'border-2 border-tag-brand'} hover:shadow-new-1 sm:px-12 px-8 py-4
     bg-dark-700 flex sm:flex-row flex-col items-center justify-between gap-4
     ease duration-300 ease-linear`}>
      <div className='flex sm:flex-row flex-col items-center gap-2'>
        <div className='h-32 max-w-32 rounded-full overflow-hidden object-fit'>
          <img
            src={image}
            loading="lazy" alt={collectionName}
            className='w-32 h-32  object-fit '
          />
        </div>
        <div className='flex flex-col gap-2'>
          <BsText className='text-white'>{collectionName}</BsText>
          <SmText className='text-white sm:text-left text-center'>
            Listed by{" "}
            <Link className='text-tag-brand' to={link}>
              @{creatorName}
            </Link>
          </SmText>
        </div>
      </div>
      <SmText className='text-dark-400'>{time}</SmText>
    </main>
  );
};

export default ActivityTab;
