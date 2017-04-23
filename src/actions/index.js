import Scroll from 'react-scroll';
var scroller = Scroll.scroller;

export const CHANGE_AUDIO = 'CHANGE_AUDIO';
export const UPDATE_SCROLL = 'UPDATE_SCROLL';
export const CHANGE_FONT = 'CHANGE_FONT';

export function changeAudio(audio) {
    // console.log('CHANGE_AUDIO');
    // console.log(audio);

    return {type: CHANGE_AUDIO, payload: audio};
}

export function changeFont(fontSize) {
    return {type: CHANGE_FONT, payload: fontSize};
}

export function updateScroll(position) {

    // const timing = [
    //   {0, 1},
    // ];
    // console.log('UPDATE_SCROLL');
    // console.log(duration);

    // scroller.scrollTo('test_scroll', {
    //     // duration: 1500,
    //     //delay: 100,
    //     offset: -230,
    //     smooth: true,
    //     containerId: 'scrollText_',
    // });

    return {type: UPDATE_SCROLL, payload: position};
}
