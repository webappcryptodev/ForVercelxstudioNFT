import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { connectors } from "../../store/provider/connectors";
import { useWeb3React } from "@web3-react/core";
// import { Heading, SmText } from "../../constants/text";
// import PagesDropdown from './pagesDropdown';
import Transition from "../common/Transition";
import { Search, NavItem } from "./headerComp";
import { PrimaryButton } from "../button/Button";
import { Close, Hamburger } from "../Icons";
import Logo from "../Logo";
import menuItems from "./header.data";
import Avatar from "../Avatar";
import {
  currentAccount,
  userAuth,
  loginBackend,
  providerInstance,
  currentProfile,
  getUser,
} from "../../store/components/users/auth";
import { allMyCollectionsFn } from "../../store/components/collections/collections";
// import { SelectWallet } from "./selectConnect";
// import W3Connection from "../../store/provider";

function Header({
  profile,
  account,
  authenticate,
  validate,
  provider,
  loadProfile,
  allMyCollections,
}) {
  const [open, setOpen] = useState(false);
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();

  // loads profile
  useEffect(() => {
    loadProfile(window.ethereum?.selectedAddress);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?._id]);
  useEffect(() => {
    if (profile?.address)
      allMyCollections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.address]);

  useEffect(() => {
    connectors.injected.isAuthorized()
      .then(async (isAuthorized) => {
        if (isAuthorized && !networkActive && !networkError) {
          await activateNetwork(connectors.injected);
        }
        if (networkActive) {
          validate({ address: window.ethereum?.selectedAddress });

          authenticate({ account: window.ethereum?.selectedAddress });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  });

  const handleClick = () => {
    setOpen(!open);
  };
  console.log(account, "eth");
  const location = useLocation();
  const searchRoute = location.pathname;
  return (
    <>
      <header
        className='bg-tag-dark shadow-md border-b border-gray-700 w-full z-50 transition duration-300 ease-in-out py-2'
        style={{ zIndex: 9999 }}
      >
        <div className='bg-tag-dark mx-auto py-0 wrapper'>
          <div className='flex flex-wrap items-center justify-between '>
            <Logo className='' />
            {/* Hamburger */}

            <button
              type='button'
              onClick={handleClick}
              className='lg:hidden bg-transparent text-gray-300 focus:outline-none z-40 relative'
            >
              {open ? <Hamburger /> : <Close />}
            </button>

            <nav className='lg:flex items-center space-x-32 hidden'>
              <ul className='lg:flex lg:space-y-0 lg:flex-grow lg:flex-row lg:flex-wrap lg:space-x-6 lg:items-center font-sora'>
                {/* Search */}
                <li className={`xl:px-12 ${searchRoute === '/search' ? 'hidden' : 'block'}`}>
              
                <Link to='/search'>
                  <Search
                    bgColor="bg-gray-700 border-none"
                    width="xl:w-80 w-full"
                  />
                  </Link>
                </li>
                {menuItems.map(({ path, label }) => (
                  <li key={label}>
                    <NavItem to={path} item={label} />
                  </li>
                ))}
                {/* Pages */}
                {/* <li>
                  <PagesDropdown />
                </li> */}
                {!account ? (
                  // {/* Connect wallet */}
                  <li className='lg:px-5'>
                    <Link to='/connect-wallet'>
                      <PrimaryButton
                        type='button'
                        className='!py-2 !px-6 rounded'
                      >
                        <p className={`text-base`}>Connect Wallet</p>
                      </PrimaryButton>
                    </Link>
                    {/* <SelectWallet /> */}
                  </li>
                ) : (
                  <>
                    {/* <li>
                      <NavItem to='/profile' item='Profile' />
                    </li> */}
                    {/* <li className="lg:px-5">
                      <button type="button" className="text-gray-50 ">
                        <FontAwesomeIcon icon={faWallet} size="4x" />
                      </button>
                    </li> */}
                    <li className='lg:px-5'>
                      <div className='dropdown dropdown-end'>
                        <label tabIndex='0' className='cursor-pointer'>
                          <Avatar
                            size='h-8 w-8'
                            frst1='Cy'
                            lst1='Ng'
                            textSize='sm'
                            color={profile?.color}
                            image={profile?.image}
                          />
                        </label>
                        <ul
                          tabIndex='0'
                          className='p-0 shadow-md mt-2 menu dropdown-content border border-gray-800 bg-tag-dark rounded w-44 divide-y flex flex-col justify-center items-center'
                        >
                          <li className='py-1.5 hover:bg-transparent'>
                            <Link
                              to='/create-nft'
                              className='hover:bg-transparent'
                            >
                              <button
                                type='button'
                                className='text-sm py-1 text-gray-300 focus:outline-none hover:text-tag-brand'
                              >
                                Create NFT
                              </button>
                            </Link>
                          </li>
                          <li className='py-1.5 hover:bg-transparent'>
                            <Link
                              to='/create-collections'
                              className='hover:bg-transparent'
                            >
                              <button
                                type='button'
                                className='text-sm py-1 text-gray-300 focus:outline-none hover:text-tag-brand'
                              >
                                Create Collection
                              </button>
                            </Link>
                          </li>
                          <li className='hover:bg-transparent'>
                            <Link
                              to={`/profile/${window.ethereum?.selectedAddress}`}
                              className='hover:bg-transparent'
                            >
                              <button
                                type='button'
                                className='text-sm py-1 px-8 text-gray-300 focus:outline-none hover:text-tag-brand'
                              >
                                Profile
                              </button>
                            </Link>
                          </li>
                          {/* <li>
                            <button
                              type="button"
                              className="text-sm py-4 px-8 text-gray-300 focus:outline-none"
                              onClick={async () =>
                                await provider.clearCachedProvider()
                              }
                            >
                              Disconnect
                            </button>
                          </li> */}
                        </ul>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div>
        <Transition
          id='modal'
          className='fixed inset-0 z-50  overflow-hidden flex items-center justify-center transform px-2 my-24 lg:hidden'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal'
          show={open}
          enter='transition ease-out duration-200'
          enterStart='opacity-0 scale-95'
          enterEnd='opacity-100 scale-100'
          leave='transition ease-out duration-200'
          leaveStart='opacity-100 scale-100'
          leaveEnd='opacity-0 scale-95'
        >
          <div
            className={`${
              open
                ? "opacity-100 transition-opacity duration-300 ease-in"
                : "hidden"
            } bg-tag-dark px-4 pb-5 pt-6 w-full rounded max-h-full h-full overflow-y-auto transition-all duration-300 ease-out z-50 lg:hidden shadow-new`}
            style={{ zIndex: 9999 }}
          >
            <ul className='flex flex-col space-y-5 '>
              {/* Search */}
              <li className='xl:px-12 px-2'>
              <Link to='/search'> <Search
                    bgColor="bg-gray-700 border-none"
                    width="xl:w-80 w-full"
                  />   </Link>
              </li>
              {menuItems.map(({ path, label }) => (
                <li key={label}>
                  <NavItem to={path} item={label} className='text-gray-200' />
                </li>
              ))}
              {/* Pages */}
              {/* <li>
                <PagesDropdown />
              </li> */}

              {account === null ? (
                // {/* Connect wallet */}
                <li className='lg:px-5'>
                  <Link to='/connect-wallet'>
                    <PrimaryButton className='!py-2 !px-6 rounded'>
                      <p className={`text-base`}>Connect wallet</p>
                    </PrimaryButton>
                  </Link>
                </li>
              ) : (
                <>
                  {/* <li>
                    <NavItem
                      to={`/profile/${window.ethereum?.selectedAddress}`}
                      item="Profile"
                    />
                  </li> */}
                  <li>
                    <NavItem to='/create-nft' item='Create NFT' />
                  </li>
                  <li>
                    <NavItem
                      to='/create-collections'
                      item='Create collections'
                    />
                  </li>
                  {/* <li className="lg:px-5 px-2">
                    <button type="button" className="text-gray-50 ">
                      <FontAwesomeIcon icon={faWallet} size="4x" />
                    </button>
                  </li> */}
                  <li className='lg:px-5 px-2'>
                    <div className='dropdown'>
                      <button tabIndex='0' type='button' className=''>
                        <Avatar
                          size='h-8 w-8'
                          frst1='Cy'
                          lst1='Ng'
                          textSize='sm'
                          color={profile?.color}
                          image={profile?.image}
                        />
                      </button>
                      <ul className='p-0 shadow-lg menu dropdown-content bg-white rounded-box w-44 divide-y flex flex-col justify-center items-center'>
                        <li>
                          <NavItem
                            to={`/profile/${window.ethereum?.selectedAddress}`}
                            item='Profile'
                            className='text-gray-200'
                          />
                        </li>
                        <li>
                          <button
                            type='button'
                            className='text-base text-gray-200 py-4 px-8 focus:outline-none'
                            onClick={async () =>
                              await provider.clearCachedProvider()
                            }
                          >
                            Disconnect
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </>
              )}
              {/* Search */}
              {/* <li className="xl:px-12 px-2">
                <Search bgColor="bg-white border" width="xl:w-80 w-full" />
              </li> */}
            </ul>
          </div>
        </Transition>
        <Transition
          className='fixed inset-0 -z-0 bg-black bg-opacity-50 transition-opacity w-full max-w-full lg:hidden'
          show={open}
          enter='transition ease-out duration-200'
          enterStart='opacity-0'
          enterEnd='opacity-100'
          leave='transition ease-out duration-100'
          leaveStart='opacity-100'
          leaveEnd='opacity-0'
          aria-hidden='true'
        />
      </div>
    </>
  );
}

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  authenticate: (data) => dispatch(userAuth(data)),

  validate: (data) => dispatch(loginBackend(data)),
  loadProfile: (account) => dispatch(getUser(account)),
  allMyCollections: () => dispatch(allMyCollectionsFn())
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  account: currentAccount,
  provider: providerInstance,
  profile: currentProfile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
