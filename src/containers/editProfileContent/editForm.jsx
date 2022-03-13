import { PrimaryButton } from "../../components/button/Button";
import { Input, TextArea } from "../../components/common/Textfields";
import { MdHeading } from "../../constants/text";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { currentProfile, userEdit } from "../../store/components/users/auth";
import { useNavigate } from "react-router-dom";

const EditForm = ({ editAccount, profile }) => {
  const history = useNavigate();

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: profile?.name,
        username: profile?.username,
        email: profile?.email,
        bio: profile?.bio,
        url: profile?.url,
      }}
      onSubmit={async (state) => {
        try {
          await editAccount(state);

          history(`/profile/${profile?.address}`);
        } catch (err) {
          console.log(err);
        }
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Please fill in your name"),
        username: Yup.string().required("Please fill in your username"),
        email: Yup.string().email(),
        bio: Yup.string().min(25).max(400),
        url: Yup.string().url(),
      })}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white px-7 pb-8 pt-24 md:pt-8"
        >
          <div className="grid grid-cols-1 gap-5 border-b pb-5">
            {/* Account Info */}
            <div className="">
              <MdHeading
                text="Account info 🍉"
                className="!text-2xl pb-6 text-center md:text-left"
              />
              {/* DIsplay Username */}
              <div className="form-group mb-7 flex flex-col gap-1">
                <Input
                  type="text"
                  name="username"
                  label="Username"
                  className="!pr-[85px]"
                  placeholder="Not Set"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username ? (
                  <p className="text-xs  md:text-sm font-semibold text-red-600">
                    {formik.errors.username}
                  </p>
                ) : null}
              </div>
              {/* DIsplay name */}
              <div className="form-group mb-7 flex flex-col gap-1">
                <Input
                  type="text"
                  name="name"
                  label="Full Name"
                  className="!pr-[85px]"
                  placeholder="Your name..."
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-xs  md:text-sm font-semibold text-red-600">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>

              {/* Email */}
              <div className="form-group mb-7  flex flex-col gap-1">
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  className="!pr-[85px]"
                  placeholder="Your email..."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-xs  md:text-sm font-semibold text-red-600">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              {/* Custom URL */}
              <div className="form-group mb-7 flex flex-col gap-1">
                <Input
                  type="text"
                  name="url"
                  label="Custom URL"
                  value={formik.values.url}
                  placeholder="https://www..."
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("url")}
                />
                {formik.touched.url && formik.errors.url ? (
                  <p className="text-xs  md:text-sm font-semibold text-red-600">
                    {formik.errors.url}
                  </p>
                ) : null}
              </div>
              {/* Bio */}
              <div className="form-group mb-7 flex flex-col gap-1">
                <TextArea
                  className=""
                  label="Bio"
                  name="bio"
                  placeholder="Something about you..."
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("bio")}
                />
                {formik.touched.bio && formik.errors.bio ? (
                  <p className="text-xs  md:text-sm font-semibold text-red-600">
                    {formik.errors.bio}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          {/* Submit */}
          <div className="mt-5">
            <p className="lg:text-lg text-base font-semibold text-gray-100 font-montserrat md:text-left text-center">
              To update your setting you should sign message through your
              wallet. Click "Update profile" then sign the message.
            </p>
            <div className="text-center md:text-left">
              <PrimaryButton
                type="submit"
                text="Update profile"
                className="mt-5 !px-5 !py-3"
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  profile: currentProfile,
});

//send dispatch action to component props
const mapDispatchToProps = (dispatch) => ({
  // createAccount: (user) => dispatch(userRegister(user)),

  editAccount: (user) => dispatch(userEdit(user)),

  // editAccountPic: (user) => dispatch(userEditPic(user)),

  // getAccount: (user) => dispatch(getUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
