import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import W3Connection from "../../store/provider";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Injected } from "../../store/provider/connectors";
import { useWeb3React } from "@web3-react/core";
import {
  currentAccount,
  userAuth,
  loginBackend,
  providerInstance,
} from "../../store/components/users/auth";
// import { PrimaryButton } from "../button/Button";
import {
  Close,
  Coinbase,
//   ConnectLink,
  Fortmatic,
  Help,
  MetaMask,
  WalletConnect,
} from "../../assets/svg/Svg";

export function ConnectBtn({ account, authenticate, validate, provider }) {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();

  useEffect(() => {
    Injected.isAuthorized()
      .then(async (isAuthorized) => {
        if (isAuthorized && !networkActive && !networkError) {
          await activateNetwork(Injected);
        }
        if (networkActive) {
          validate({ address: window.ethereum?.selectedAddress });

          authenticate({ account: window.ethereum?.selectedAddress });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }, [
    account,
    activateNetwork,
    authenticate,
    networkActive,
    networkError,
    provider,
    validate,
  ]);
  return (
    <>
    
      <div
        id='walletModal'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
      >
        <div className='relative px-4 w-full max-w-md h-full md:h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex justify-between items-center py-4 px-6 rounded-t border-b dark:border-gray-600'>
              <h3 className='text-base font-semibold text-gray-900 lg:text-xl dark:text-white'>
                Select a wallet
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-toggle='walletModal'
              >
                <Close />
              </button>
            </div>

            <div className='p-6'>
              <p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                By connecting your wallet, you agree to our{" "}
                <Link
                  to='/terms'
                  className='hover:opacity-80 font-medium text-primary-100 border-b border-dotted'
                >
                  Terms of service
                </Link>{" "}
                and our{" "}
                <Link
                  to='/privacy-policy'
                  className='hover:opacity-80 font-medium text-primary-100 border-b border-dotted'
                >
                  Privacy policy
                </Link>
              </p>
              <ul className='my-5 space-y-4'>
                <li>
                  <button
                    type='button'
                    onClick={async () => await W3Connection(authenticate)}
                    className={`${active} justify-between`}
                  >
                    <div className='flex items-center'>
                      <MetaMask />
                      <span className=' ml-3 whitespace-nowrap'>MetaMask</span>
                    </div>
                    <span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400'>
                      Available
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    className={`${disabled}`}
                    title='Not Available'
                    disabled
                  >
                    <Coinbase />
                    <span className=' ml-3 whitespace-nowrap'>
                      Coinbase Wallet
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    className={`${disabled}`}
                    title='Not Available'
                    disabled
                  >
                    <WalletConnect />
                    <span className=' ml-3 whitespace-nowrap'>
                      WalletConnect
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    className={`${disabled}`}
                    title='Not Available'
                    disabled
                  >
                    <Fortmatic />
                    <span className=' ml-3 whitespace-nowrap'>Fortmatic</span>
                  </button>
                </li>
              </ul>
              <div>
                <button
                  data-tooltip-target='tooltip-no-arrow'
                  data-tooltip-trigger='click'
                  // data-tooltip-trigger="hover"
                  data-tooltip-placement='bottom'
                  type='button'
                  className='inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400 focus:outline-none'
                >
                  <Help />
                  Why do I need to connect with my wallet?
                </button>
                <div
                  id='tooltip-no-arrow'
                  role='tooltip'
                  className='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
                >
                  Connecting your wallet doesn't really do much: it doesn't send
                  any transactions. All it does is to give your wallet's public
                  address to the website and the possibility for the website to
                  request actions from the wallet - actions which you, as a
                  user, need to accept manually.
                  <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const active = `flex items-center p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white focus:outline-none w-full`;

const disabled = `flex items-center p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white focus:outline-none cursor-not-allowed w-full`;

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  authenticate: (data) => dispatch(userAuth(data)),

  validate: (data) => dispatch(loginBackend(data)),
});

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  account: currentAccount,

  provider: providerInstance,
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectBtn);
