// COLLECTION constants

const root = 'collections'

export const COLLECTIONS = {
    CREATE: `${root}/`,
  
    GET_MY_ALL: `${root}/my-collections`,

    GET_MY_SINGLE: (_id) => `/${root}/${_id}`,

    UPDATE_MY_SINGLE: (_id) => `${root}/${_id}`,

    DELETE_MY_SINGLE: (_id) => `${root}/${_id}`,

    UPLOAD_IMAGE: (_id) => `${root}/upload_image/${_id}`,

    GET_ALL: `${root}/`,

    GET_SINGLE: (_id) => `/${root}/${_id}`,

    GET_BY_USER: (_id) => `/${root}?profile=${_id}`
  };
  