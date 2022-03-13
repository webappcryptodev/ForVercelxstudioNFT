import React from "react";
import ActivityTab from "./activityTab";
import art from "../../assets/img/items/cover_2.png";
import { SmText } from "../../constants/text";
import { RecentActiveDrop } from "../../components/common/Dropdown";

const ActivityView = () => {
  return (
    <main className='md:px-52 px-12 py-20'>
      <div className='flex justify-between py-4'>
        <button>
          <SmText className='text-white hover:bg-dark-700 transition ease-linear delay-300 px-3 py-2 focus:outline-none'>
            Mark all read
          </SmText>{" "}
        </button>
        <RecentActiveDrop />
      </div>
      {/* tabs of activity */}
      <div className='flex flex-col gap-4'>
        {[0, 1, 2, 3].map((index) => (
          <ActivityTab
            key={index}
            collectionName='Master of thoughts'
            creatorName='John Doe'
            link={`/profile/`}
            time='2days'
            image={art}
            read='false'
          />
        ))}
      </div>
    </main>
  );
};

export default ActivityView;
