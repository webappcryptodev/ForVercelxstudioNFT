import { SyncLoader } from "react-spinners";
import * as Yup from "yup";
import { connect} from "react-redux";
import { Formik } from "formik";
import { createStructuredSelector } from "reselect";
// import {  loaded } from "../../store/components/overlay/overlay";
import Notiflix from 'notiflix';
// import bg from "../../assets/img/bg/cover.jpg";
// import uploadIcon from "../../assets/img/icons/pic.png";
import { PrimaryButton } from "../../components/button/Button";
import { Input, TextArea } from "../../components/common/Textfields";
// import { useState } from "react";
import { collectionCreationFn } from "./../../store/components/collections/collections";
import { currentAccount } from "./../../store/components/users/auth";
// import history from "../../utils/history";
import { useNavigate } from 'react-router-dom';


function CreateCollectionsContent({ loading, createCollection, account }) {
  // const dispatch = useDispatch(); 
  // const [image, setImage] = useState(bg);
  // console.log(image);
  const history = useNavigate();

  // const handleFileUpload = (event) => {
  //   setImage(event.currentTarget.files[0]);
  // }

  // const handleFileUpload = (event) => {

  //   let reader = new FileReader();
  //   let file = event.target.files[0];
  //   reader.onloadend = () => {
  //     setImage({
  //       file: reader.result,
  //     });
  //   };
  //   reader.readAsDataURL(file);
  // };

  // function clearArray() {
  //   const state= setImage();
  //   return state;
  // }
  return (
    <section className="pb-28 pt-20 bg-tag-hardLight">
      <div className="wrapper ">
        <h1 className="text-2xl md:text-3xl font-bold  font-sora text-center mb-10">
          Create Collections
        </h1>

        <div className="grid md:grid-cols-1 gap-6 md:mx-32 mx-4  bg-white bg-opacity-90 xl:p-10 px-5 py-8 shadow">
          {/* Uplaod image */}
        
          {/* Form */}
          <Formik
            enableReinitialize
            initialValues={{
              name: "",
              description: "",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Name Is Required."),

              description: Yup.string().required("Description Is Required.").min(10, 'Must be above 10 letters')
              .max(250, 'Must be exactly 250 letters'),
            })}
            onSubmit={
             
              async (values) => {
              console.log(account, "ddddddddddd");
              await createCollection({ ...values, profile_address: account });
             
              Notiflix.Report.success(
                'Collection created!',
                'You can check your profile.',
                'Ok',
                function cb() {
                  history(`/profile/${account}`)
                },
              );
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 ">
                  {/* Title */}
                  <div className="form-group">
                    <Input
                      label="Collection Name"
                      placeholder="e.g `NFT Global design art`"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <p className="pt-2 text-xs  md:text-sm font-semibold text-red-600">
                        {formik.errors.name}
                      </p>
                    ) : null}
                  </div>
                  {/* Description */}
                  <div className="form-group">
                    <TextArea
                      label="Description"
                      placeholder="e.g `NFT Global design art`"
                      name="desc"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("description")}
                    />
                    {formik.touched.description && formik.errors.description ? (
                      <p className="pt-2 text-xs  md:text-sm font-semibold text-red-600">
                        {formik.errors.description}
                      </p>
                    ) : null}
                  </div>
        

                  {/* Submit */}
                  <div className="form-group mt-5 ">
                    <PrimaryButton
                      // disabled={loading}
                      type="submit"
                      className="!text-lg !py-2 !px-5 "
                    >
                      {loading ? (
                        <SyncLoader size={20} loading color="white" />
                      ) : (
                        <>
                          Create Item
                          <span className="fa fa-plus text-white pl-3" />
                        </>
                      )}
                    </PrimaryButton>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

// mapping the cuurent state as a component prop
// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  // loadState: selectAppLoadState,
  account: currentAccount,
});

// dispatching action
const mapDispatchToProps = (dispatch) => ({
  createCollection: (data) => dispatch(collectionCreationFn(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCollectionsContent);
