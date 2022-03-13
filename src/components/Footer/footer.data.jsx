export const menuItems = [
  // {
  //   header: "Collections",
  //   items: [
  //     {
  //       path: "/collections",
  //       label: "art",
  //     },
  //     {
  //       path: "/collections",
  //       label: "music",
  //     },
  //     {
  //       path: "/collections",
  //       label: "design",
  //     },
  //     // {
  //     //   path: "/collections",
  //     //   label: "creative",
  //     // },
  //   ],
  // },
  {
    header: "Marketplace",
    items: [
      {
        path: "/nft-page",
        label: "All NFTs",
      },
      // {
      //   path: "/creators",
      //   label: "Creators",
      // },
      {
        path: "/collections",
        label: "Collections",
      },
      // {
      //   path: "/activity",
      //   label: "Activity",
      // },
    ],
  },
  {
    header: "Art",
    items: [
      // {
      //   path: "/upload-types",
      //   label: "Upload Types",
      // },
      {
        path: "/creators",
        label: "Creators",
      },
      // {
      //   path: "/nft-page",
      //   label: "NFT",
      // },
      // {
      //   path: "/item-details",
      //   label: "Item details",
      // },
    ],
  },
  {
    header: "My Account",
    items: [
      // {
      //   path: "/upload-types",
      //   label: "Upload Types",
      // },
      {
        path: `/profile/${window.ethereum?.selectedAddress}`,
        label: "My Profile",
      },
      // {
      //   path: "/nft-page",
      //   label: "NFT",
      // },
      // {
      //   path: "/item-details",
      //   label: "Item details",
      // },
    ],
  },
];