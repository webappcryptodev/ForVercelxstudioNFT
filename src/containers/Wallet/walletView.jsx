import React, { useEffect } from "react";
// import { ethers } from "ethers";
import { Heading, SmText } from "../../constants/text";
import meta from "../../assets/img/icons/metamask.svg";
// import torus from "../../assets/img/icons/torus.svg";
import { ReactComponent as Logo } from "../../assets/svg/xwhite.svg";

import fortmatic from "../../assets/img/icons/fortmatic.svg";
import walletconnect from "../../assets/img/icons/walletconnect.svg";
import coinbase from "../../assets/img/icons/coibase.svg";
// import bitski from "../../assets/img/icons/bitski.svg";

import { connect } from "react-redux";
import { BsText } from "../../constants/text";
import { createStructuredSelector } from "reselect";
import { connectors } from "../../store/provider/connectors";
import { useWeb3React } from "@web3-react/core";
import {
  currentAccount,
  userAuth,
  loginBackend,
  providerInstance,
} from "../../store/components/users/auth";
import W3Connection from "../../store/provider";
import { useNavigate } from "react-router-dom";

function WalletView({ account, authenticate, validate, provider }) {
  console.log('Authenticated', authenticate);
  const navigate = useNavigate();

  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();

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
  }, [
    account,
    activateNetwork,
    authenticate,
    networkActive,
    networkError,
    provider,
    validate,
  ]);

    const connnectWallet = (wallet) => {      
      switch (wallet) {
        case 'Coinbase':          
          activateNetwork(connectors.coinbaseWallet)
          break;
        case 'Metamask':
          activateNetwork(connectors.injected)
          break;
        case 'Walletconnect':
          activateNetwork(connectors.walletConnect)
          break;
        default:
          break;
      }
    }
  return (
    <section className='bg-tag-lite sm:py-28 py-20 lg:px-40 md:px-20 sm:px-px-8 flex items-center justify-items-center'>
      <main className='wrapper'>
        <div data-aos='fade-down' className='flex flex-col gap-6 items-center'>
          <Logo className='md:h-40 md:w-40 w-32 h-32' />
          <Heading className='text-center'>Connect Wallet</Heading>
          <SmText className='text-center'>
            Connect with one of available wallet providers or create a new
            wallet.
          </SmText>
        </div>

        {/* options to connect  */}
        <div
          data-aos='fade-left'
          data-aos-delay='200'
          className='grid md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-8 py-4 mt-8  items-stretch '
        >
          {data.map((el) => (
            <WalletBox
              key={el.title}
              image={el.image}
              onClick={() => connnectWallet(el.title)}
              description={el.description}
              title={el.title}
              disabled={el.disabled}
            />
          ))}
        </div>
      </main>
    </section>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(WalletView);

const WalletBox = ({ title, description, disabled, onClick, image }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } border-none focus:outline-none self-stretch `}
    >
      <main className='rounded flex flex-col space-y-4 justify-items-start items-center p-6 bg-tag-dark hover:-translate-y-2 ease duration-300 ease-linear shadow-lg hover:shadow'>
        <img
          src={image}
          loading='lazy'
          alt='connnect-wallet'
          className='h-20 w-20'
        />
        <BsText className='!text-tag-light font-bold capitalize'>
          {title}
        </BsText>
        <SmText className=''>{description}</SmText>
      </main>
    </button>
  );
};

// mockFile
const data = [
  {
    title: "Coinbase",
    image: coinbase,
    disabled: false,
  },
  {
    title: "Metamask",

    image: meta,
    disabled: false,
  },
  {
    title: "Fortmatic",

    image: fortmatic,
    disabled: true,
  },
  {
    title: "Walletconnect",

    image: walletconnect,
    disabled: false,
  },
];
