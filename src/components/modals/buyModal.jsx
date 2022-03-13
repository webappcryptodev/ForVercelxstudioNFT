import { PrimaryButton } from "../button/Button";

export default function BuyModal() {
  return (
    <>
      <a href="#buy-modal">
        <PrimaryButton className="!py-2.5 w-full rounded" text="Buy Now" />
      </a>
      {/* Search modal */}
      
      {/* <div id="my-modal" className="modal">
        <div className="modal-box bg-white rounded max-w-2xl">
          <div className="">
            <InputLabel
              type="search"
              placeholder="Search"
              extraClass="!h-[3.5rem] pr-12"
            />
            <button
              type="button"
              className="fa fa-search !text-[20px] text-gray-400 absolute top-[37px] right-10 focus:outline-none"
            />
          </div>

          <div className="modal-action">
            <a href="/#" className="btn !rounded-none text-[16px] close">
              Close
              <Close />
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
