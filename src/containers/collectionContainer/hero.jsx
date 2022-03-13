import React from "react";
import { Heading } from "../../constants/text";
import Filter from "../../components/filter/Filter";
import { RecentActiveDrop } from "../../components/common/Dropdown";

const CollectionHero = () => {
  return (
    <section>
      <div
        // data-aos='fade-down'
        className={`md:h-80 h-44 md:px-6 px-4 bg-dark-700 flex items-center `}
      >
        <Heading className="font-extrabold wrapper text-white text-left">
          Artwork Collections
        </Heading>
      </div>
      <main
        className={`pb-5 pt-2 border-b border-gray-700`}
      >
        <div className="flex lg:flex-row flex-col md:justify-between space-y-4 md:items-center wrapper px-4">
          <Filter />
          <div className="flex space-x-4 items-center">
            {/* <SmText className="" text="SORT BY:" /> */}
            <RecentActiveDrop />
          </div>
        </div>
      </main>
    </section>
  );
};

export default CollectionHero;
