import { RecentActiveDrop } from "../../../components/common/Dropdown";
import { MdHeading } from "../../../constants/text";
import HotBuyers from "./hotBuyers";
import HotSellers from "./hotSellers";

const HotSection = () => (
  <section className=" pb-28">
    <div className="grid grid-cols-2 gap-y-5 gap-x-8">
      {/* Hot Sellers */}
      <div className="lg:col-span-1 col-span-full" data-aos="fade-down-left">
        <div className="flex justify-between items-center pb-8">
          <MdHeading>Hot Sellers</MdHeading>
          <RecentActiveDrop />
        </div>
        <HotSellers />
      </div>
      {/* Hot Buyers */}
      <div className="lg:col-span-1 col-span-full" data-aos="fade-up-right">
        <div className="flex justify-between items-center pb-8">
          <MdHeading>Hot Buyers</MdHeading>
          <RecentActiveDrop />
        </div>
        <HotBuyers />
      </div>
    </div>
  </section>
);

export default HotSection;
