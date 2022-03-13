import BackToTop from "../backToTop/Top";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
     {/* <LoadingOverlay
            active={loaded}
            spinner={<ClipLoader size={50} color={"#EA2B2C"} />}
            styles={styles}
            // text='Please wait...'
          > */}
      <Header />
      
      <main>{children}</main>
      <BackToTop />
      <Footer />
      {/* </LoadingOverlay> */}
    </>
  );
};

export default Layout;
