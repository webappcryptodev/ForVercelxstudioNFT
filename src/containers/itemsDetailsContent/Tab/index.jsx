import { useState } from "react";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import Button from "@material-tailwind/react/Button";
// import { RecentActiveDrop } from "../../../components/common/Dropdown";
import { TabHistory } from "./tabComp";
import badge from "../../../assets/img/icons/Badge.svg";
import av1 from "../../../assets/img/avatars/avatar_1.png";
import av2 from "../../../assets/img/avatars/avatar_2.png";

export default function DetailsTab({description}) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="sm:flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            active={openTab === 1 ? true : false}
            className="!bg-gray-800 focus:outline-none px-3 py-2 hover:bg-black active:bg-black focus:bg-black !rounded-none text-white hover:text-white text-base capitalize active:text-tag-brand"
          >
            <span className="text-sm">Details</span>
          </Button>
          {/* <Button
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            active={openTab === 2 ? true : false}
            className="!bg-gray-800 focus:outline-none px-3 py-2 hover:bg-black active:bg-black focus:bg-black !rounded-none text-white hover:text-white text-sm capitalize active:text-tag-brand"
          >
            <span className="text-sm">Bids</span>
          </Button> */}
          {/* <Button
            buttonType="link"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            active={openTab === 3 ? true : false}
            className="!bg-gray-800 focus:outline-none px-3 py-2 hover:bg-black active:bg-black focus:bg-black !rounded-none text-white hover:text-white text-sm capitalize active:text-tag-brand"
          >
            <span className="text-sm">History</span>
          </Button> */}
        </div>
        {/* <div className="hidden sm:block">
          <RecentActiveDrop className="!bg-gray-800" />
        </div> */}
      </div>
      <div className="pt-5">
        <TabContent>
          <TabPane active={openTab === 1 ? true : false}>
            <p className="text-left leading-relaxed font-medium">
             {description}
            </p>
          </TabPane>
          <TabPane active={openTab === 2 ? true : false}>
            <p className="text-left leading-relaxed font-medium">
              No active bids yet. Be the first to make a bid!
            </p>
          </TabPane>
          <TabPane active={openTab === 3 ? true : false}>
            <div className="flex flex-col space-y-7">
              <TabHistory
                avatar={av1}
                badge={badge}
                amt={1}
                sender="ayoub"
                date="07/01/2022"
                time="12:30"
              />
              <TabHistory
                avatar={av2}
                badge={badge}
                amt={1}
                sender="monir"
                date="07/01/2022"
                time="12:30"
              />
            </div>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
}
