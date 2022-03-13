import hotUsers from "../../../constants/hotUsers.json";
import HotUser from "./hotUser";

const HotSellers = () => (
  <div className="bg-tag-dark p-6">
    <div className="grid grid-cols-2 gap-4">
      {hotUsers.slice(0, 8).map((user, i) => {
        return (
          <div className="sm:col-span-1 col-span-full" key={i}>
            <HotUser
              index={user.id}
              avatar={user.avatar}
              username={user.username}
              nft={user.nft}
              to="/"
            />
          </div>
        );
      })}
    </div>
  </div>
);

export default HotSellers;
