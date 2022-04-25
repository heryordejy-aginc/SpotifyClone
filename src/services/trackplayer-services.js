import { store } from '../store';
import TrackPlayer from 'react-native-track-player';
import { playerActionTypes } from '../store/constants/player-constants';
import { playTrackAction } from '../store/actions/player-actions';

export default async () => {
  TrackPlayer.addEventListener('remote-play', () => {
    store.dispatch({ type: playerActionTypes.PLAY_TRACK });
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    store.dispatch({ type: playerActionTypes.PAUSE_TRACK });
  });

  TrackPlayer.addEventListener('remote-next', () => {
    store.dispatch({ type: playerActionTypes.SKIP_NEXT });
  });

  TrackPlayer.addEventListener('remote-previous', () => {
    store.dispatch({ type: playerActionTypes.SKIP_NEXT });
  });

  // TrackPlayer.addEventListener('remote-stop', () => {
  //   store.dispatch(PlayerActions.reset());
  // });

  TrackPlayer.addEventListener('playback-track-changed', res => {
    console.log(`\n\n\nplayback-track-changed\t\t`, res);
  });
};
