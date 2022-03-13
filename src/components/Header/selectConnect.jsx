// import {useState} from 'react'
import { Link } from "react-router-dom";
import eth from "../../assets/img/icons/eth-diamond-purple.png";
import poly from "../../assets/img/icons/polygon.png";
import { Close } from "../Svg";

export function SelectWallet() {
  return (
    <>
      <label
        for="my-modal"
        className="py-2 px-6 rounded text-center inline-flex items-center text-white bg-tag-brand text-base font-semibold hover:bg-opacity-90 cursor-pointer"
      >
        Connect Wallet
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal !mt-0">
        <div className="relative !p-0 !m-0 w-full max-w-lg modal-box overflow-hidden h-auto bg-white rounded dark:bg-gray-700">
          <div>
            <div className="flex justify-between items-center py-4 px-6 rounded-t border-b dark:border-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 text-xl lg:text-2xl dark:text-white mb-0 pb-0">
                  Select a wallet
                </h3>
              </div>
              <div className="modal-action">
                <label
                  for="my-modal"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  <Close />
                </label>
              </div>
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
                  <Link to="/connect-wallet">
                    <button
                      type="button"
                      className={`${active} justify-between`}
                    >
                      <div className="flex items-center">
                        <img src={eth} className="h-12" loading="lazy" alt="Ethereum" />
                        <span className=" ml-5 whitespace-nowrap text-lg">
                          Etherium
                        </span>
                      </div>
                      <span className="inline-flex items-center justify-center ml-3 text-gray-500 group-hover:text-white">
                        <span className="fa fa-angle-right fa-2x font-semibold" />
                      </span>
                    </button>
                  </Link>
                </li>
                <li>
                  {/* <Link to="/connect-wallet"> */}
                  <button type="button" className={`${active} justify-between`}>
                    <div className="flex items-center">
                      <img
                        src={poly}
                        className="img-fluid h-12 w-12"
                        loading="lazy" alt="Polygon"
                      />
                      <span className=" ml-5 whitespace-nowrap text-lg">
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
  );
}

const active = `flex items-center p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white focus:outline-none w-full group`;
