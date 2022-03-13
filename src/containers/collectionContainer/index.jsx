import React from "react";
import CollectionGallery from "./gallery";
import CollectionHero from "./hero";

const CollectionContainer = () => {
  return (
    <main className="">
      <CollectionHero />
      <div className="wrapper">
        <CollectionGallery />
      </div>
    </main>
  );
};

export default CollectionContainer;
