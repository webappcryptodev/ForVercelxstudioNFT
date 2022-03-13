import { useState } from "react";
// import av1 from "../assets/img/avatars/avatar_1.png";
import { PROFILE_IMAGE_URL } from "../store/routes/routes";
export default function Avatar({ image, lst1, size, textSize , color}) {
  const [open, setOpen] = useState(false);
  console.log(`${PROFILE_IMAGE_URL}/${image}`)
  const src =`${PROFILE_IMAGE_URL}/${image}`;
  
  return (
    <>
      <div className="avatar onlin placeholder z-0 relative" onClick={() => setOpen(!open)}>
      <div
          className={`bg-gray-100 bg-opacity-30 p-[2px] rounded-full`}
        >
        <div
        style={{ backgroundColor: `${color}` }}
          className={`text-neutral-content rounded-full ${size}`}
        >
          <div
          style={{ background: `url(${src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ", }}
          // src={`${PROFILE_IMAGE_URL}/${image}`}
          // loading="lazy" alt='Avatar'
          className={`object-fit rounded-full border border-gray-400 ${size}`}
        ></div>
              
        </div>
        </div>
      </div>
    </>
  );
}
  