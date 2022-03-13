import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectProfiles,
  getAllProfilesFn,
  currentAccount,
} from "./../../store/components/users/auth";
import Discover from "./Discover";
import PopularIntro from "./IntroComp";
import PopularCreators from "./popularCreators";

const CreatorsContainer = ({ Profiles, loadProfiles, account }) => {
  useEffect(() => {
    loadProfiles();
    console.log(Profiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="wrapper">
        <PopularIntro profiles={Profiles?.slice(0, 4)} account={account} />
      </section>
      <PopularCreators profiles={Profiles} account={account} />
      <section className="wrapper">
        <Discover profiles={Profiles} account={account} />
      </section>
    </>
  );
};

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  loadProfiles: () => dispatch(getAllProfilesFn()),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  Profiles: selectProfiles,
  account: currentAccount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatorsContainer);
