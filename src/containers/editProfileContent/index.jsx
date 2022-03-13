import EditForm from "./editForm";
import EditHeader from "./editHeader";
import avatar from "../../assets/img/avatars/avatar_9.png";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  currentProfile,
  userEditPic,
  userEditCover,
} from "../../store/components/users/auth";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { PROFILE_IMAGE_URL } from "../../store/routes/routes";

const EditProfileContent = ({ profile, editAccountPic }) => {
  const [prPic, setPrPic] = useState(`${PROFILE_IMAGE_URL}/${profile?.image}`);
  useEffect(() => {
    setPrPic(`${PROFILE_IMAGE_URL}/${profile?.image}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.image]);

  const [image, setImage] = useState();
  const [loaded, setLoaded] = useState(false);

  const handleFileUpload = async (event) => {
    setLoaded(true);

    try {
      let data = new FormData();

      setLoaded(false);
      let reader = new FileReader();

      let file = event.target.files[0];
      data.append("image", file);

      reader.onloadend = async () => {
        setImage(reader.result);

        await editAccountPic(data);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="pb-2 bg-tag-hardLight">
      <EditHeader profile={profile} />
      <div className="pb-28 md:pt-16 pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-4 relative">
            <div className="relative">
              {loaded ? (
                <div className=" h-28 w-28 items-center flex justify-center">
                  {" "}
                  <MoonLoader size={18} loading color="black" />
                </div>
              ) : (
                <img
                  src={image || !prPic.includes("undefined") ? prPic : avatar}
                  loading="lazy" alt="avatar"
                  className="img-fluid absolute md:relative rounded-full h-28 w-28 object-cover -top-[50px] md:top-0"
                />
              )}
              <div className="absolute bottom-0 bg-white text-black text-xl rounded-full shadow px-2.5 py-1 right-0 cursor-pointer">
                <span className="fa fa-camera" />
                <input
                  className="__avupload"
                  id="file"
                  name="file"
                  type="file"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <EditForm profile={profile} />
          </div>
        </div>
      </div>
    </section>
  );
};

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  profile: currentProfile,
});

//send dispatch action to component props
const mapDispatchToProps = (dispatch) => ({
  editAccountPic: (user) => dispatch(userEditPic(user)),

  editAccountCover: (user) => dispatch(userEditCover(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContent);
