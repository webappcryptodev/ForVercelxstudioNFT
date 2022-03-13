import { useEffect, useState } from "react";
import { Injected } from "./connectors";
import { useWeb3React } from "@web3-react/core";

function MetamaskProvider() {
  const [loaded, setLoaded] = useState(false);

  const [account, setAccount] = useState(null);

  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();

  useEffect(() => {
    Injected.isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(Injected);
          setLoaded((prev) => !prev);
        }
        if (networkActive) {
          setLoaded((prev) => !prev);
          setAccount(window.ethereum?.selectedAddress);
          return true;
        } else return false;
      })
      .then((status) => {
        if (status === false) {
          setLoaded((prev) => !prev);
          setAccount(null);
        }
      })
      .catch(() => {
        setLoaded(false);
      });
  }, [account, activateNetwork, networkActive, networkError]);

  return { loaded, account, setAccount, activateNetwork, networkActive };
}

export default MetamaskProvider;
