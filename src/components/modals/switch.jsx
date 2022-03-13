import React, { useState } from "react";

import { ReactComponent as Eth } from "../../assets/svg/eth.svg";
import { ReactComponent as Matic } from "../../assets/svg/matic.svg";
// import { BsText } from "../../constants/text";
import Modal from "react-modal";

import {
  Close
} from "../../assets/svg/Svg";

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "0px",
    zIndex: 999,
    minWidth: "40%",
  },
};
const SwitchModal = ({ isOpen, onRequestClose }) => {
  const [, setError] = useState();

  const networks = {
    polygon: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Polygon Testnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
    ethereum: {
      chainId: `0x${Number(3).toString(16)}`,
      chainName: "Ropsten Test Network",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: [
        "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      ],
      blockExplorerUrls: ["https://ropsten.etherscan.io/"],
    },
  };

  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");

      if (networkName === "ethereum") {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: `0x${Number(3).toString(16)}`,
            },
          ],
        });
      } else {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              ...networks[networkName],
            },
          ],
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });

    window.location.reload(true)
  };


 

  return (
    <Modal
      style={style}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
     <>
     
      <div className="moda ">
        <div className=" !p-0 !m-0 w-full  modal-bo verflow-hidden h-auto bg-tag-dark rounded dark:bg-gray-700">
          <div>
            <div className="flex justify-between items-center py-4 px-6 rounded-t border-b dark:border-gray-600">
              <div>
                <h3 className="font-semibold text-tag-light text-xl lg:text-2xl dark:text-white mb-0 pb-0">
                  Select a wallet
                </h3>
              </div>
              <button
          className="focus:outline-none"
          onClick={onRequestClose}
        >
                <label
                  for="my-modal"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  <Close />
                </label>
              </button>
            </div>

            <div className="p-6">
              {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                By connecting your wallet, you agree to our{" "}
                <Link
                  to="/terms"
                  className="hover:opacity-80 font-medium text-gray-200 border-b border-dotted"
                >
                  Terms of service
                </Link>{" "}
                and our{" "}
                <Link
                  to="/privacy-policy"
                  className="hover:opacity-80 font-medium text-gray-200 border-b border-dotted"
                >
                  Privacy policy
                </Link>
              </p> */}
              <ul className="my-5 space-y-4">
                <li>
                    <button
                      type="button"
                      onClick={() => {
                        handleNetworkSwitch("ethereum");
                        onRequestClose();
                      }}
                      className={`${active} justify-between !bg-tag-dark border border-gray-500`}
                    >
                      <div className="flex items-center ">
                      <Eth throwIfNamespace="false" className="h-6 w-6 mr-2 " /> 
          <span className="  ml-5 whitespace-nowrap text-lg text-tag-light
          ">
                          Etherium
                        </span>
                      </div>
                      <span className=" inline-flex items-center justify-center ml-3 text-gray-500 group-hover:text-white">
                        <span className="fa fa-angle-right fa-2x font-semibold" />
                      </span>
                    </button>
                </li>
                <li>
                  {/* <Link to="/connect-wallet"> */}
                  <button type="button"
                   onClick={() => {
                    handleNetworkSwitch("polygon");
                    onRequestClose();
                  }} className={`${active} justify-between border border-gray-500 !bg-tag-dark`}>
                    <div className="flex items-center">
                    <Matic className="h-6 w-6 mr-2" />
                      <span className=" ml-5 whitespace-nowrap text-lg text-tag-light
                      ">
                        Polygon
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center ml-3 text-gray-500 group-hover:text-white">
                      <span className="fa fa-angle-right fa-2x font-semibold" />
                    </span>
                  </button>
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
    </Modal>
  );
};


  
 

 
 export default SwitchModal;
 const active = `flex items-center p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white focus:outline-none w-full group`;

//  <BsText className="!text-white text-xl">Select Network</BsText>
//         <div className="grid grid-cols-1 gap-y-3">
//           <button
//             onClick={() => {
//               handleNetworkSwitch("ethereum");
//               onRequestClose();
//             }}
//             className="hover:bg-cyan-500 hover:shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-self-stretch text-white font-bold rounded py-3 px-6 text-xl "
//           >
//             <Eth throwIfNamespace="false" className="h-6 w-6 mr-2 " /> Ethereum
//           </button>
//           <button
//             onClick={() => {
//               handleNetworkSwitch("polygon");
//               onRequestClose();
//             }}
//             className="hover:bg-orange-500 hover:shadow-md bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-self-stretch  text-white font-bold rounded py-3 px-6 text-xl "
//           >
//             <Matic className="h-6 w-6 mr-2" /> Polygon
//           </button>
//         </div>
//         <button
//           className=" text-tag-brand hover:text-red-500 py-1 px-1 text-sm "
//           onClick={onRequestClose}
//         >
//           Close
//         </button>