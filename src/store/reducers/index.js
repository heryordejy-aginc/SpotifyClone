import { combineReducers } from 'redux';

import { authReducer } from './auth-reducer';
import { playerReducer } from './player-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  player: playerReducer,
});

export default rootReducer;
