import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTelegram,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { BsText } from "../../constants/text";
import Logo from "../Logo";
import { menuItems } from "./footer.data";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='bg-tag-dark pt-20 pb-12'>
      <div className='wrapper'>
        <div className='grid grid-cols-12 gap-x-5 gap-y-7 items-start'>
          <div className='lg:col-span-6 col-span-full flex-col flex'>
            <Logo className='justify-self-start w-20' />
            <p className='my-4 text-white font-semibold leading-relaxed'>
              The X Studio - The revolutionary NFT Platform, designed for
              ambitious artists, collectors, and traders.
            </p>
            {/* Social links */}
            <ul className='flex pt-4'>
              <li>
                <a
                  href='https://'
                  className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
                  title='Follow us on Facebook'
                  aria-label='Facebook'
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className='text-3xl  hover:text-tag-brand'
                  />
                </a>
              </li>
              <li className='ml-3'>
                <a
                  href='https://'
                  className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
                  aria-label='Telegram'
                  title='Telegram'
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className='text-3xl  hover:text-tag-brand'
                  />
                </a>
              </li>
              <li className='ml-3'>
                <a
                  href='https://'
                  className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
                  aria-label='Twitter'
                  title='Follow us on Twitter'
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className='text-3xl  hover:text-tag-brand'
                  />
                </a>
              </li>
              <li className='ml-3'>
                <a
                  href='https://'
                  className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
                  aria-label='Instagram'
                  title='Follow us on Instagram'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='text-3xl  hover:text-tag-brand'
                  />
                </a>
              </li>
              <li className='ml-3'>
                <a
                  href='https://'
                  className='text-tag-brand hover:text-tag-light p-3 bg-white bg-opacity-10 tansition ease delay-300 rounded-full sm:h-16 h-full items-center sm:w-16 w-full flex justify-center'
                  aria-label='Youtube'
                  title='Subscribe to our channel on Youtube'
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className='text-3xl  hover:text-tag-brand'
                  />
                </a>
              </li>
            </ul>
          </div>

          {menuItems.map(({ header, items }, i) => (
            <div key={i} className='sm:col-span-6 lg:col-span-2 col-span-full'>
              <BsText className='pb-4 !text-base text-white'>{header}</BsText>
              <ul className='flex flex-col space-y-5'>
                {items.map(({ path, label }, i) => (
                  <li key={i}>
                    <Link
                      to={path}
                      className='text-gray-400 text-base hover:tracking-wid transition duration-300 ease-linear font-semibold'
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='text-center pt-20'>
          <p className='font-medium text-[15px] text-white'>
            Copyright © {date} The X Studio.
          </p>
        </div>
      </div>
    </footer>
  );
}
