import { PrimaryButton } from "../../components/button/Button";
import { Heading } from "../../constants/text";

const StartCollection = () => (
  <section className="bg-tag-dark py-16 mb-28">
    <div
      className="max-w-3xl mx-auto text-center "
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Heading>Start your own collection today</Heading>
      <p className="font-semibold py-6 leading-relaxed">
        Become now a part in the most innovative and revolutionary NFT
        marketplace. Buy, Sell, and Mint NFTs for free.
      </p>
      <PrimaryButton
        to="/"
        className="px-5 py-3 font-semibold text-lg"
        className=" mt-4"
      >
        Start Collecting
      </PrimaryButton>
    </div>
  </section>
);

export default StartCollection;
