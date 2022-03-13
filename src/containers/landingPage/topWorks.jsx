import { MdHeading } from "../../constants/text";
import Filter from "../../components/filter/Filter";
import { NftCard } from "../../components/cards/nftcards";
import item from "../../assets/img/art.jpg";
import HorizontalCard from "../../components/cards/horizonCard";
// import { SmLink } from "../../constants/Link";
import { RecentActiveDrop } from "../../components/common/Dropdown";

const TopArtWorks = () => (
  <section className='pb-28'>
    <div className='flex justify-between items-center'>
      <MdHeading>Top artworks</MdHeading>
      <RecentActiveDrop />
    </div>
    <Filter />
    <div className='mt-5 grid grid-cols-12 gap-5'>
      <div className='lg:col-span-4 col-span-full'>
        <NftCard
          title='Colorful Abstract Painting'
          link='/'
          owner='makinizi_jamy'
          bid='77 534 NGTG'
          image={item}
        />
      </div>
      <div className="lg:col-span-8 col-span-full">
        <div className="grid grid-cols-2 gap-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div   key={index} className="md:col-span-1 col-span-full">
              <HorizontalCard
              
                title='Colorful Abstract Painting'
                nft='41 906 BSC'
                username='makinizi_beck'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TopArtWorks;
