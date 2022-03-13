import Web3 from "web3";

import Web3Modal from "web3modal";

import { userAuth } from '../../store/components/users/auth'

import Store from '../../store/store'


import { nftaddress, nftmarketaddress, ethmarketaddress, ethnftaddress } from "../web3/testnet/config";

import NFTG from "../web3/testnet/NFTG.json";

import NFTMarket from "../web3/testnet/Market.json";


const W3Connection = async () => {

  const { storeConfig } = Store();

  let provider = window.ethereum;

  let account;

  const web3Modal = new Web3Modal();

  const connection = await web3Modal.connect();

  if (typeof window.ethereum !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then(async (accounts) => {
        account = accounts[0];

        let providerInsatnce = new Web3(connection);

        console.log(`Selected account is ${account}`);

       

          providerInsatnce.eth.net.getId()
          .then((chain) => {
            // alert('chain not supported', chain);
            if(chain === 80001) {
              console.log('connected chainId', chain);
              storeConfig.dispatch(userAuth({
                account,
            
                provider: providerInsatnce,
            
                token: new providerInsatnce.eth.Contract(NFTG.abi, `${nftaddress}`),
            
                market: new providerInsatnce.eth.Contract(
                  NFTMarket.abi,
                  `${nftmarketaddress}`
                ),
              }));
            } else if(chain === 3){
              console.log('connected chainId', chain);
              storeConfig.dispatch(userAuth({
                account,
            
                provider: providerInsatnce,
            
                token: new providerInsatnce.eth.Contract(NFTG.abi, `${ethnftaddress}`),
            
                market: new providerInsatnce.eth.Contract(
                  NFTMarket.abi,
                  `${ethmarketaddress}`
                ),
              }));
            } else {
              console.log('chain not supported', chain);
            }
          });
  
          window.location.reload(true);

        // return providerInsatnce;
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    window.ethereum.on("accountsChanged", async function (accounts) {
      account = accounts[0];

      let providerInsatnce = new Web3(connection);

      console.log(`Selected account is ${account}`);


      providerInsatnce.eth.net.getId()
      .then((chain) => {
        // alert('chain not supported', chain);
        if(chain === 80001) {
          console.log('connected chainId', chain);
          storeConfig.dispatch(userAuth({
            account,
        
            provider: providerInsatnce,
        
            token: new providerInsatnce.eth.Contract(NFTG.abi, `${nftaddress}`),
        
            market: new providerInsatnce.eth.Contract(
              NFTMarket.abi,
              `${nftmarketaddress}`
            ),
          }));
        } else if(chain === 3){
          console.log('connected chainId', chain);
          storeConfig.dispatch(userAuth({
            account,
        
            provider: providerInsatnce,
        
            token: new providerInsatnce.eth.Contract(NFTG.abi, `${ethnftaddress}`),
        
            market: new providerInsatnce.eth.Contract(
              NFTMarket.abi,
              `${ethmarketaddress}`
            ),
          }));
        } else {
          console.log('chain not supported', chain);
        }
      });

      window.location.reload(true);

 
      // return providerInsatnce;
    });

    window.ethereum.on("chainChanged", async function (chain) {

      let providerInsatnce = new Web3(connection);

      console.log(`Selected chain is ${chain}`);

        if(chain === 80001) {
          console.log('connected chainId', chain);
          storeConfig.dispatch(userAuth({
            account: window.ethereum.selectedAddress,
        
            provider: providerInsatnce,
        
            token: new providerInsatnce.eth.Contract(NFTG.abi, `${nftaddress}`),
        
            market: new providerInsatnce.eth.Contract(
              NFTMarket.abi,
              `${nftmarketaddress}`
            ),
          }));
        } else if(chain === 3){
          console.log('connected chainId', chain);
          storeConfig.dispatch(userAuth({
            account: window.ethereum.selectedAddress,
        
            provider: providerInsatnce,
        
            token: new providerInsatnce.eth.Contract(NFTG.abi, `${ethnftaddress}`),
        
            market: new providerInsatnce.eth.Contract(
              NFTMarket.abi,
              `${ethmarketaddress}`
            ),
          }));
        } else {
          console.log('chain not supported', chain);
        }

        window.location.reload(true);

 
      // return providerInsatnce;
    });
  } else {
    alert("MetaMask is not available");
  }
};

export default W3Connection;
