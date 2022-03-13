import { PrimaryButton } from "../../components/button/Button";
import { Input, TextArea } from "../../components/common/Textfields";
import { MdHeading } from "../../constants/text";

const SocialAccounts = () => (
  <div className="">
    <MdHeading
      text="Your social media"
      className="!text-2xl pb-6 text-center md:text-left"
    />

    {/* Facebook */}
    <div className="form-group mb-7">
      <Input
        type="text"
        name="facebook"
        label="Facebook"
        placeholder="facebook username"
      />
      <PrimaryButton className="!px-4 !text-sm !mt-2.5 !font-medium">
        <span className="fa fa-facebook-official pr-2" />
        Connect to Facebook
      </PrimaryButton>
    </div>
    {/* Twitter */}
    <div className="form-group mb-7">
      <Input
        type="text"
        name="twitter"
        label="Twitter"
        placeholder="twitter username"
      />
      <PrimaryButton className="!px-4 !text-sm !mt-2.5 !font-medium">
        <span className="fa fa-twitter pr-2" />
        Connect to Twitter
      </PrimaryButton>
    </div>
    {/* DIsord */}
    <div className="form-group mb-7">
      <Input
        type="text"
        name="discord"
        label="Discord"
        placeholder="discord username"
      />
      <PrimaryButton className="!px-4 !text-sm !mt-2.5 !font-medium">
        <span className="fa fa-discord pr-2" />
        Connect to Discord
      </PrimaryButton>
    </div>
    <div className="mt-4">
      <button
        type="button"
        className="bg-tag-dark text-white px-4 py-2 text-sm mt-2.5 font-medium"
      >
        <span className="fa fa-plus-circle pr-2" />
        Add more social media
      </button>
    </div>
  </div>
);
