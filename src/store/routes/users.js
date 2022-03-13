// User Constatnts

export const USERS = {
  LOGIN: "/profile/create",
  SIGN_UP: "/profile/create",
  EDIT_USER: "/profile/me",
  UPLOAD_PHOTO: "/profile/upload_image",
  UPLOAD_COVER: "/profile/profile_cover/upload_image",
  GET_USER:(address) =>  `/profile?address=${address}`,
  GET_FOLLOWERS: "/profile/get/followers",
  FOLLOW_USER: "/profile/add/follower",
  UNFOLLOW_USER: "/profile/remove/following",
  LOGIN_SERVER: "/profile/login",
  GET_ME: "/profile/me",
  GET_ALL: "/profile",
};
