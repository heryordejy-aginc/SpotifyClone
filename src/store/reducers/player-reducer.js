import { playerActionTypes } from '../constants/player-constants';

export const playerInitialState = {
  currentTrack: null,
  trackMode: 'play',
  trackSkip: null,
  allTracks: null,
};

export const playerReducer = (
  state = playerInitialState,
  { type, payload },
) => {
  switch (type) {
    case playerActionTypes.ADD_TRACKS:
      return { ...state, allTracks: payload };

    case playerActionTypes.CURRENT_TRACK:
      return { ...state, currentTrack: payload, trackMode: 'play' };

    case playerActionTypes.PLAY_TRACK:
      return { ...state, trackMode: 'play' };

    case playerActionTypes.PAUSE_TRACK:
      return { ...state, trackMode: 'pause' };

    case playerActionTypes.SKIP_NEXT:
      return { ...state, trackSkip: 'next' };

    case playerActionTypes.SKIP_PREV:
      return { ...state, trackMode: 'prev' };

    default:
      return { ...state };
  }
};
