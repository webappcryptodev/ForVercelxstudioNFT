import axios from "axios";
import slugify from "slugify";
import { nanoid } from "nanoid";

export const handleFileUpload = (event, setImage) => {
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onloadend = () => {
    setImage({
      file: reader.result,
      nft: file,
    });
  };
  reader.readAsDataURL(file);
};

//prepare ipfs structure
export const ipfsFilePrepare = ({ name, desc }, data) => {
  const imgPayload = {
    name: slugify(`${name} ${nanoid()}_image`, "_"),
    keyvalues: {
      description: desc,
    },
  };

  const metadata = JSON.stringify(imgPayload);

  data.append("pinataMetadata", metadata);

  //pinataOptions are optional
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
    customPinPolicy: {
      regions: [
        {
          id: "FRA1",
          desiredReplicationCount: 1,
        },
        {
          id: "NYC1",
          desiredReplicationCount: 2,
        },
      ],
    },
  });

  data.append("pinataOptions", pinataOptions);

  return { pindata: data, imgPayload };
};

export const ipfsJsonPrepare = ({ name, desc }) => {
  let metaFile = {
    name: name,
    description: desc,
    image: "",
    edition: 1,
    attributes: [
      [
        {
          trait_type: "date",
          value: Date.now(),
        },
      ],
    ],
    compiler: "NFT GLOBAL",
  };

  return metaFile;
};

export const nftUpload = async (url, data) => {
  const document = await axios.post(url, data, {
    maxBodyLength: "Infinity", //this is needed to prevent axios from erroring out with large files
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: "3c13463c19383de2e552",
      pinata_secret_api_key:
        "28de4d38a568ed439d6a94d36cefaef6ef7734d65a3759ed1ecd7381d896ad13",
    },
  });

  return document;
};

export const prepareIpfsMetadata = async (
  url,
  response,
  metaFile,
  imgPayload
) => {
  //handle response here

  metaFile.image = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}/`;

  const metaPayload = {
    name: slugify(`${imgPayload.name}_meta`, "_"),
    keyvalues: {
      description: imgPayload.keyvalues.description,
    },
  };

  const pinPayload = {
    pinataMetadata: {
      name: `${metaPayload.name}_meta`,
      ...metaPayload,
    },
    pinataContent: {
      dataValues: {
        ...metaFile,
      },
    },
  };

  return await axios.post(url, pinPayload, {
    headers: {
      pinata_api_key: "3c13463c19383de2e552",
      pinata_secret_api_key:
        "28de4d38a568ed439d6a94d36cefaef6ef7734d65a3759ed1ecd7381d896ad13",
    },
  });
};
