
// History tab content component
export const TabHistory = ({ avatar, badge, amt, sender, date, time }) => (
  <div className="flex flex-col items-center justify-center space-y-5">
    <div className="flex space-x-3 items-center">
      <div className="img-box relative">
        <img src={avatar} loading="lazy" alt="" className="w-12 h-12 sm:h-20 sm:w-20 rounded-full relative" />
        <img src={badge} loading="lazy" alt="" className="w-5 h-5 absolute right-0 bottom-0" />
      </div>
      <div className="flex flex-col text-left space-y-1">
        <p className="font-semibold">
          Bid accepted <span className="text-tag-brand text-[17px]">{` ${amt} BSC`}</span> by {sender}
        </p>
        <p className="text-[15px] font-roboto">{`${date}, ${time}`}</p>
      </div>
    </div>
  </div>
);
