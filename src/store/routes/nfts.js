// NFT constants

const root = 'nfts'

export const NFTS = {
    CREATE: `${root}/`,

    BUY:(_id) => `${root}/my-nfts/${_id}/buy_nft`,

    GET_MY_ALL: `${root}/my-nfts`,

    GET_MY_COLLECTION_ALL: (collection) => `${root}/my-nfts/collection/${collection}`,

    GET_MY_SINGLE: (_id) => `${root}/${_id}`,

    UPDATE_MY_SINGLE: (_id) => `${root}/${_id}`,

    DELETE_MY_SINGLE: (_id) => `${root}/${_id}`,

    GET_ALL: `${root}/`,

    GET_ALL_RECENT: `${root}/?sort=created_at`,

    GET_COLLECTION_ALL: (collection) => `${root}/collection/${collection}`,

    GET_SINGLE: (_id) => `${root}/${_id}`,
};
