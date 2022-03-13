import React from "react";
import truncate from "truncate";
import { SmText } from "../../constants/text";

const ProjectTab = ({ title, link, time, count, price, extra }) => {
  return (
      <main
      data-aos="fade-right"
data-aos-delay="200"
          className='bg-black hover:bg-opacity-70 ease duration-300 ease-linear grid grid-cols-6  md:p-8 p-4 rounded-md justify-evenly'>
          <SmText className='text-white '>{title}</SmText>
          {
              link ? 
      <a href={link} target='_blank' rel='noreferrer'>
        <SmText className='text-white '>{truncate(link, 8)}</SmText>
      </a> : <SmText className='text-white '>No link yet</SmText>
          }
      <SmText className='text-tag-brand'>{time}UTC</SmText>
      <SmText className='text-tag-brand'>{count}</SmText>
      <SmText className='text-blue-600 '>{price || 'Free mint'}</SmText>
      <SmText className='text-white '>{extra}</SmText>
    </main>
  );
};

export default ProjectTab;
