import { combineReducers } from 'redux';

import layouts from './components/layouts/reducers';

import users from './components/users/reducers';

import tokens from './components/tokens/reducers';

import collections from './components/collections/reducers';


import overlay from './components/overlay/reducers';

// All Application Reducers Are Assembled Here
export default combineReducers({
  users,

  tokens,

  collections,

  layouts,
  
  overlay
});
