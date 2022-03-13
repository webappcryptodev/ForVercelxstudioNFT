import { BsText } from "../../constants/text";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
const CreatorCard = ({ img, color, image, sold, colec, views, to }) => {
  return (
    <div className="wrap">
      <div className="img-box relative mb-4">
        <div   style={{
            background: `${color}` }}>

        <div
          style={{
            background: `linear-gradient(
  to bottom,
  rgba(0,0,0, 0.3),
  rgba(0,0,0, 0.3)
), url(${img })`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          // src={img?.includes('http') ? img : require(`../../assets/img/items/${img}`)}
          // loading="lazy" alt=""
          className="object-cover w-full h-[100px]"
        ></div>
        </div>
        <div className="flex flex-col justify-center items-center -mt-10">
          <Link to={to}>
          <Avatar
            size="h-20 w-20"
            frst1="Cy"
            lst1="Ng"
            textSize="sm"
            color={color}
            image={image}
          />
          </Link>
        </div>
      </div>
      <div className="bg-tag-dark bg-opacity-80 p-5 flex justify-between items-center">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <BsText className="text-tag-parag">
            {sold} 
          </BsText>
          <p className="font-semibold text-sm text-white">Sold</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <BsText className="text-tag-parag">{colec}</BsText>
          <p className="font-semibold text-sm text-white">Collections</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center">
          <BsText className="text-tag-parag">{views}</BsText>
          <p className="font-semibold text-sm text-white">Followers</p>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
