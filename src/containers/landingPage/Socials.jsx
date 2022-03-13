import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTelegramPlane, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { BsText, MdHeading } from "../../constants/text";

const NftGlobalSocials = () => (
  <div className="text-center pb-28" data-aos="fade-up">
    <div className="max-w-3xl px-6 lg:px-0 mx-auto text-center">
      <MdHeading>NFT Global community</MdHeading>
      <p className="font-semibold py-6 leading-relaxed">
        Learn more about NFT Global, chat with the team, other people in the
        community, and express your opinion on the future development of NFT
        Global.
      </p>
    </div>
    <div className="grid grid-cols-12 gap-7 mt-5">
      {/* Telegram */}
      <a
        href="https://"
        className="lg:col-span-3 sm:col-span-6 col-span-full  bg-tag-dark px-4 pt-8 pb-3"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="p-8 flex flex-col space-y-8">
          <div>
            <span className="bg-black text-center rounded-full text-tag-brand pr-8 pt-10 pb-8 pl-8">
              <FontAwesomeIcon icon={faTelegramPlane} size="3x" />
            </span>
          </div>
          <BsText>Telegram</BsText>
        </div>
      </a>
      {/* Twitter */}
      <a
        href="https://"
        className="lg:col-span-3 sm:col-span-6 col-span-full  bg-tag-dark px-4 pt-8 pb-3"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="p-8 flex flex-col space-y-8">
          <div>
            <span className="bg-black text-center rounded-full text-tag-brand pr-8 pt-10 pb-8 pl-8">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </span>
          </div>
          <BsText>Twitter</BsText>
        </div>
      </a>
      {/* Instagram */}
      <a
        href="https://"
        className="lg:col-span-3 sm:col-span-6 col-span-full  bg-tag-dark px-4 pt-8 pb-3"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="p-8 flex flex-col space-y-8">
          <div>
            <span className="bg-black text-center rounded-full text-tag-brand pr-8 pt-10 pb-8 pl-8">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </span>
          </div>
          <BsText>Instagram</BsText>
        </div>
      </a>
      {/* Facebook */}
      <a
        href="https://"
        className="lg:col-span-3 sm:col-span-6 col-span-full  bg-tag-dark px-4 pt-8 pb-3"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="p-8 flex flex-col space-y-8">
          <div>
            <span className="bg-black text-center rounded-full text-tag-brand pr-8 pt-10 pb-8 pl-8">
              <FontAwesomeIcon icon={faFacebookF} size="3x" />
            </span>
          </div>
          <BsText>Facebook</BsText>
        </div>
      </a>
    </div>
  </div>
);

export default NftGlobalSocials;
