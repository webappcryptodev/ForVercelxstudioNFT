import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faTelegramPlane,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Button from "@material-tailwind/react/Button";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


const ShareButton = ({ shareUrl,  title }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const ref = useRef(null);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);
  return (
    <div className="share relative" ref={ref}>
      <div className="icon">
        <Button
          buttonType="link"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
          onClick={handleToggle}
          className="!bg-gray-800 focus:outline-none px-5 py-3 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 !rounded-none text-white hover:text-white text-base"
        >
          <FontAwesomeIcon icon={faShareAlt} size="2x" />
        </Button>
      </div>
      <div
        className={`transition-all duration-300 ease-linear absolute -right-0 shadow-new-3 z-50 ${
          toggle ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 bg-gray-800 mt-3 px-3  py-6">
          <li>
            <FacebookShareButton url={shareUrl} qoute={title}>
            <p url={shareUrl} className="text-base text-white p-1">
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </p>
            </FacebookShareButton>
          </li>
          <li>
            <WhatsappShareButton url={shareUrl} title={title} >

            <p url={shareUrl} className="text-base text-white p-1">
              <FontAwesomeIcon icon={faWhatsapp} size="1x" />
            </p>
            </WhatsappShareButton>
          </li>
          <li><TelegramShareButton url={shareUrl} >

            <p url={shareUrl} className="text-base text-white p-1" >
              <FontAwesomeIcon icon={faTelegramPlane} size="1x" />
            </p>
          </TelegramShareButton>
          </li>
          <li>
            <TwitterShareButton url={shareUrl}  title={title} >

            <p className="text-base text-white p-1">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </p>
            </TwitterShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareButton;
