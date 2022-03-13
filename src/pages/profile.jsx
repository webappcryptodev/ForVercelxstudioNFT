import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProfileContainer from "../containers/profileContainer";
import Layout from "../components/Layout/Layout";
import {
  currentAccount,
  currentProfile,
  getUser,
} from "../store/components/users/auth";
import { NoAccess } from "../components/error/Errors";
import { profileLoading } from "../store/components/overlay/overlay";

const Profile = ({ account, profile, loadProfile, profileLoad }) => {
  const location = useLocation();

  const verifyRoute = `/profile/${account}`;

  const nullRoute = `/profile/null`;

  const creatorAcct = location.pathname.split("/")[2];

  console.log("meeeeeeeeeee");

  useEffect(() => {
    loadProfile(account || creatorAcct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(profile, account);

  return (
    <Layout>
      {profileLoad && verifyRoute === nullRoute ? (
        <></>
      ) : profile?.address ? (
        <ProfileContainer profile={profile} />
      ) : (
        <NoAccess />
      )}
    </Layout>
  );
};
// export default Profile;
const mapDispatchToProps = (dispatch) => ({
  loadProfile: (account) => dispatch(getUser(account)),
});

const mapStateToProps = createStructuredSelector({
  account: currentAccount,

  profile: currentProfile,

  profileLoad: profileLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
