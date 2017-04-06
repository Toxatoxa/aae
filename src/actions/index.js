export const CHANGE_AUDIO = 'CHANGE_AUDIO';

export function changeAudio(audio) {
  // console.log('CHANGE_AUDIO');
  // console.log(audio);

  return {
    type: CHANGE_AUDIO,
    payload: audio
  };
}
