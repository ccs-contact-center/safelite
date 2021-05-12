import { createStore, combineReducers } from 'redux';

import profileReducer from './Reducers/profileReducer';
import campaignReducer from './Reducers/campaignReducer';
import themeReducer from './Reducers/themeReducer';
import avatarReducer from './Reducers/avatarReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//import rootReducer from './reducers'; // the value from combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};


const rootReducer = combineReducers({
  profile: profileReducer,
  campaign: campaignReducer,
  darkTheme: themeReducer,
  setAvatar: avatarReducer
});



const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);


