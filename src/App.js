import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import ClipLoader from "react-spinners/ClipLoader";
import "@material-tailwind/react/tailwind.css";
import AOS from "aos";
import Web3 from "web3";
import "aos/dist/aos.css";
  import { useSelector, useDispatch } from "react-redux";
import { userAuth, loginBackend } from "./store/components/users/auth";
import { nftaddress, nftmarketaddress, ethmarketaddress, ethnftaddress } from "./store/web3/testnet/config";
import NFTG from "./store/web3/testnet/NFTG.json";
import NFTMarket from "./store/web3/testnet/Market.json";
import {
  allMyCollectionsFn,
  allCollectionsFn
} from "./store/components/collections/collections";
import "./app.css";
import Home from "./pages";
import Profile from "./pages/profile";
import Creator from "./pages/creator";
import Collection from "./pages/collection";
import Auction from "./pages/auction";
import ConnectWallet from "./pages/connectWallet";
import UpcomingProject from "./pages/upcomingProject";
import Creators from "./pages/creators";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Activity from "./pages/activity";
import ItemsDetails from "./pages/items-details";
import EditProfile from "./pages/edit-profile";
import CreateNft from "./pages/create-nft";
import CreateCollections from "./pages/create-collections";
import UpdateCollections from "./pages/update-collections";
import CollectionDetails from "./pages/CollectionDetail";
import NftPage from "./pages/nftPage";
import { NoConnectionn } from "./components/error/Errors";
import Search from "./pages/search";
// import { overlayFn } from "./store/components/overlay/overlay";

const App = ({ props }) => {
  const dispatch = useDispatch();

  const loaded = useSelector((store) => store.overlay.overlay.loading);

  // const active = false;
  const location = useLocation();

  const online = window.navigator.onLine;

  useEffect(() => {
    (async () => {        
      let providerInsatnce = new Web3(window?.ethereum);

          providerInsatnce?.eth?.net.getId()
          .then((chain) => {
            //alert('chain not supported', chain);
            if(chain === 3) {
              console.log('connected chainId', chain);
              dispatch(userAuth({
                account: window?.ethereum?.selectedAddress,
            
                provider: providerInsatnce,
            
                token: new providerInsatnce.eth.Contract(NFTG.abi, `${ethnftaddress}`),
            
                market: new providerInsatnce.eth.Contract(
                  NFTMarket.abi,
                  `${ethmarketaddress}`
                ),
              }));
            
            } else if(chain === 80001){
              console.log('connected chainId', chain);
              dispatch(userAuth({
                account: window?.ethereum?.selectedAddress,
            
                provider: providerInsatnce,
            
                token: new providerInsatnce.eth.Contract(NFTG.abi, `${nftaddress}`),
            
                market: new providerInsatnce.eth.Contract(
                  NFTMarket.abi,
                  `${nftmarketaddress}`
                ),
              }));
            } else {
              console.log('chain not supported', chain);
            }
          });

          dispatch(allMyCollectionsFn());
    
    })();


    dispatch(loginBackend({ address: window?.ethereum?.selectedAddress }))



  }, [dispatch]);

  useEffect(() => {
    dispatch(allCollectionsFn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    // focusHandling('outline');
  }, [location.pathname]);

  // overlay wrapper styling
  const styles = {
    wrapper: {
      height:`${ loaded ? '100Vh' : '100%'}`
    },
  };
  return (
  
        <>
          <LoadingOverlay
            active={loaded}
            spinner={<ClipLoader size={50} color={"#EA2B2C"} />}
            styles={styles}
            // text='Please wait...'
          >
            {online ? (
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/profile/:id' element={<Profile />} />
              <Route path='/creator/:id' element={<Creator />} />
              <Route path='/collections' element={<Collection />} />
              <Route path='/nft-page' element={<NftPage {...props} />} />
              <Route
                path='/collection-details/:id'
                element={<CollectionDetails {...props} />}
              />
              <Route path='/search' element={<Search />} />
              <Route path='/activity' element={<Activity />} />
              <Route path='/live-auctions' element={<Auction />} />
              <Route path='/connect-wallet' element={<ConnectWallet />} />
              <Route path='/upcoming-projects' element={<UpcomingProject />} />\
              <Route path='/creators' element={<Creators />} />
              <Route
                path='/item-details/:id'
                element={<ItemsDetails {...props} />}
              />
              <Route path='/edit-profile' element={<EditProfile />} />
              <Route path='/create-nft' element={<CreateNft />} />
              <Route
                path='/create-collections'
                element={<CreateCollections />}
              />
               <Route
                path='/update-collection/:id'
                element={<UpdateCollections  {...props}/>}
              />
              <Route path='*' element={<Error404 />} />
              <Route path='/server-error' element={<Error500 />} />
            </Routes>
          ) : (
            <NoConnectionn />
          )}
          </LoadingOverlay>
        </>
  );
};

// // // dispatching action
// const mapDispatchToProps = (dispatch) => ({
//   authenticate: (data) => dispatch(userAuth(data)),
// });

export default App;
