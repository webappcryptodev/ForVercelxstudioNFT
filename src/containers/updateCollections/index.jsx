import { SyncLoader } from "react-spinners";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Formik } from "formik";
import { createStructuredSelector } from "reselect";
// import {  loaded } from "../../store/components/overlay/overlay";
import Notiflix from "notiflix";
import { PrimaryButton } from "../../components/button/Button";
import { Input, TextArea } from "../../components/common/Textfields";
import { useState } from "react";
import { myCollectionUpdateFn } from "../../store/components/collections/collections";
import { currentAccount } from "../../store/components/users/auth";
// import history from "../../utils/history";
import { useLocation, useNavigate } from "react-router-dom";
// import {  } from 'react-router-dom';

function UpdateCollectionsContent({ loading, updateCollection, account }) {
  const location = useLocation();
  const history = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const collection = location.state;

  return (
    <section className="pb-28 pt-20 bg-tag-hardLight">
      <div className="wrapper ">
        <h1 className="text-2xl md:text-3xl font-bold  font-sora text-center mb-10">
          Update Collection
        </h1>

        <div className="grid md:grid-cols-1 gap-6  bg-white bg-opacity-90 xl:p-10 px-5 py-8 shadow">
          {/* Form */}
          <Formik
            enableReinitialize
            initialValues={{
              name: collection?.name,
              description: collection?.description,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Name Is Required."),

              description: Yup.string().required("Description Is Required."),
            })}
            onSubmit={async (values) => {
              console.log(account, "ddddddddddd");
              setLoaded(true);
              try {
                await updateCollection(collection._id, {
                  ...values,
                });

                Notiflix.Report.success(
                  "Collection updated!",
                  "",
                  "Ok",
                  function cb() {
                    history(`/profile/${account}`);
                  }
                );
                setLoaded(false);
              } catch (error) {
                Notiflix.Report.failure(
                  "Collection update failed!",
                  error.message,
                  "Ok",
                  function cb() {}
                );
                setLoaded(false);
              }
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
                      disabled={loaded}
                      type="submit"
                      className="!text-lg !py-2 !px-5 "
                    >
                      {loading ? (
                        <SyncLoader size={20} loading color="white" />
                      ) : (
                        <>
                          Update Item
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
  updateCollection: (id, data) => dispatch(myCollectionUpdateFn(id, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateCollectionsContent);
