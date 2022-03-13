import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CreatorContainer from "../containers/creatorContainer";
import Layout from "../components/Layout/Layout";
import {
  getCreatorFn,
  creatorProfile,
  currentAccount,
} from "../store/components/users/auth";
import { NoAccess } from "../components/error/Errors";
import { profileLoading } from "../store/components/overlay/overlay";

const Creator = ({ account, profile, loadProfile, profileLoad }) => {
  const location = useLocation();

  // const verifyRoute = `/creator/${account}`;

  const creatorAcct = location.pathname.split("/")[2];

  const nullRoute = `/creator/null`;

  const profileRoute = `/profile/${account}`;

  useEffect(() => {
    if (creatorAcct && creatorAcct === account) {
      return (window.location = profileRoute);
    }
    console.log("my", creatorAcct);
    loadProfile(creatorAcct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(profile, account, creatorAcct);
  return (
    <Layout>
      {profileLoad ? (
        <></>
      ) : profile?.address && profile?.address !== account ? (
        <CreatorContainer account={profile?.address} profile={profile} />
      ) : !profileLoad && profileRoute === nullRoute ? (
        <NoAccess />
      ) : (
        <></>
      )}
    </Layout>
  );
};
// export default Profile;
const mapDispatchToProps = (dispatch) => ({
  loadProfile: (address) => dispatch(getCreatorFn(address)),
});

const mapStateToProps = createStructuredSelector({
  account: currentAccount,

  profile: creatorProfile,

  profileLoad: profileLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
