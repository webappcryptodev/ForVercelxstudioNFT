import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  allMyCollectionsFn,
  selectMyCollections,
} from "../../store/components/collections/collections";
// import { currentProfile, getUser } from "./../../store/components/users/auth";
import avatar from "../../assets/img/avatars/avatar_1.png";
import bg from "../../assets/img/items/item_8.png";
// import { getUser } from "../../store/components/users/auth";

import ProfileGallery from "./gallery";
import ProfileHeader from "./header";

const ProfileContainer = ({ myCollections, loadCollections, profile }) => {
  const [detect, update] = useState(false);

  useEffect(() => {
    loadCollections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detect]);
  console.log(profile, loadCollections, "dataA");

  const notify = () => {
    update((prev) => !prev);
  };

  return (
    <main className="">
      <ProfileHeader
        bg={bg}
        avatar={avatar}
        name={profile?.username ? `@${profile?.username}` : profile?.name}
        creator={profile?.address}
        account={profile?.address}
        profile={profile}
        notify={notify}
        color={profile?.color}
      />

      <div className="wrapper">
        <ProfileGallery
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
  loadCollections: () => dispatch(allMyCollectionsFn()),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  myCollections: selectMyCollections,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

// export default ProfileContainer;
