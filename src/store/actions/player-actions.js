import { playerActionTypes } from '../constants/player-constants';

export const addAllTracksAction = payload => dispatch => {
  dispatch({ type: playerActionTypes.ADD_TRACKS, payload });
};

export const loadCurrentAction = payload => dispatch => {
  dispatch({ type: playerActionTypes.CURRENT_TRACK, payload });
};

export const playTrackAction = dispatch => {
  dispatch({ type: playerActionTypes.PLAY_TRACK });
};

export const pauseTrackAction = dispatch => {
  dispatch({ type: playerActionTypes.PAUSE_TRACK });
};

export const nextTrackAction = dispatch => {
  dispatch({ type: playerActionTypes.SKIP_NEXT });
};

export const prevTrackAction = dispatch => {
  dispatch({ type: playerActionTypes.SKIP_PREV });
};
