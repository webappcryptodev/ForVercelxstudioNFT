import React from "react";
import { paddingX } from "../../constants/spacing";
import { MdHeading, BsText } from "../../constants/text";
import UpcomingHero from "./hero";
import ProjectTab from "./projectTab";

const ProjectContainer = () => {
  return (
    <section>
      <UpcomingHero />
      {/* project table */}

      <main
        data-aos='fade-left'
        data-aos-delay='200'
        className={`${paddingX} py-20 grid grid-cols-1 gap-4`}
      >
        {[0, 1].map((index) => (
          <div key={index} className={`py-20 grid grid-cols-1 gap-6`}>
            {/* date */}
            <Date month='March' day='12' />
            <div className='bg-dark-700'>
              <TableHead />
              <div className={`${paddingX} pb-6 grid grid-cols-1 gap-6`}>
                {[0, 1, 2, 3].map((index) => (
                  <ProjectTab
                    key={index}
                    link='www.eatthebocksnft.com'
                    count='123'
                    price='1223'
                    time='12.00'
                    extra='Constant nft airdrop for owners'
                    title='NS Airdrop'
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ProjectContainer;

const TableHead = () => (
  <main
    className={`${paddingX} grid grid-cols-6  md:p-8 p-4 rounded-md justify-items-start justify-evenly`}
  >
    <BsText className='text-white  capitalize'>project</BsText>
    <BsText className='text-white  capitalize'>
      <i className='fa fa-external-link pr-2' aria-hidden='true'></i>Link
    </BsText>
    <BsText className='text-white capitalize'>
      <i className='fa fa-clock-o pr-2' aria-hidden='true'></i>Time
    </BsText>
    <BsText className='text-white capitalize'>
      <i className='fa fa-tags pr-2' aria-hidden='true' />
      Count
    </BsText>
    <BsText className='text-white  capitalize'>
      <i className='fa fa-money pr-2' aria-hidden='true'></i>Price
    </BsText>
    <BsText className='text-white  capitalize'>
      <i className='fa fa-info-circle pr-2' aria-hidden='true'></i>Extra
    </BsText>
  </main>
);

const Date = ({ month, day }) => (
  <MdHeading className='capitalize text-white'>
    <i
      className='fa fa-calendar-check-o bg-dark-700 mr-2 text-tag-brand rounded-full p-4'
      aria-hidden='true'
    ></i>
    {month} {day}th
  </MdHeading>
);
