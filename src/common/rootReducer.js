import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import fitRankingReducer from '../features/fit-ranking/redux/reducer';
import posterReducer from '../features/poster/redux/reducer';
import diffDocsReducer from '../features/diff-docs/redux/reducer';
import uploadFileReducer from '../features/upload-file/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: routerReducer,
  home: homeReducer,
  common: commonReducer,
  examples: examplesReducer,
  fitRanking: fitRankingReducer,
  poster: posterReducer,
  diffDocs: diffDocsReducer,
  uploadFile: uploadFileReducer,
};

export default combineReducers(reducerMap);
