import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const LikesButton = ({likes, colors}) => (
  <Button
    buttonType="filled"
    size="regular"
    rounded={false}
    block={false}
    iconOnly={false}
    ripple="light"
    className={`!rounded-none !bg-tag-brand focus:bg-tag-brand active:bg-tag-brand  hover:bg-tag-brand ${colors} !px-3 py-1.5  !shadow-none  z-0`}
  >
    <Icon name="favorite" size="" />
    <span className="text-sm font-sora pl-2 text-white">{likes}k</span>
  </Button>
);

export default LikesButton;
