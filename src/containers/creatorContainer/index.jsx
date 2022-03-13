import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  creatorCollectionsFn,
  selectCreatorCollections,
} from "../../store/components/collections/collections";
import avatar from "../../assets/img/avatars/avatar_1.png";
import bg from "../../assets/img/items/item_8.png";
// import { getUser } from "../../store/components/users/auth";

import CreatorGallery from "./gallery";
import CreatorHeader from "./header";

const CreatorContainer = ({ myCollections, loadCollections, profile }) => {
  const [detect, update] = useState(false);

  useEffect(() => {
    loadCollections(profile._id);

    // loadProfile(creator?.profile_address || profile?.address);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detect, profile?._id]);
  console.log(profile, myCollections, "dataA");

  const notify = () => {
    update((prev) => !prev);
  };

  return (
    <main className="">
      <CreatorHeader
        bg={bg}
        avatar={avatar}
        name={profile?.name}
        creator={profile?.address}
        account={profile?.address}
        profile={profile}
        notify={notify}
        color={profile?.color}
      />

      <div className="wrapper">
        <CreatorGallery
          notify={notify}
          collections={myCollections}
          account={profile?.address}
        />
      </div>
    </main>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  loadCollections: (profile) => dispatch(creatorCollectionsFn(profile)),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  myCollections: selectCreatorCollections,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatorContainer);

// export default ProfileContainer;
