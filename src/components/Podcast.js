import React, {Component} from 'react';
import {connect} from 'react-redux';
import PodcastReader from './PodcastReader';
// import Scroll from 'react-scroll';
import '../css/Podcast.css';
import Text from '../texts/l_001.js';
// var Element = Scroll.Element;
// var scroller = Scroll.scroller;
// var scroll     = Scroll.animateScroll;

// var scroller = Scroll.scroller;

class Podcast extends Component {
    // test() {
    //     console.log(1);
    //     // scroll.scrollTo(100);
    //
    //     // Somewhere else, even another file
    //     scroller.scrollTo('#test_scroll', {
    //         duration: 1500,
    //         delay: 100,
    //         smooth: true,
    //         // containerId: 'ContainerElementID',
    //     });
    //
    // }

    render() {
      console.log('->');
      console.log(this.props.settings.fontSize);
        return (
            <div className='Podcast'>
                <div className="Podcast-content">
                    <div className="Podcast-header">
                        Say No to the Naysayer When it comes to Your English
                    </div>
                    <div className={`Podcast-text fs-${this.props.settings.fontSize}`}>
                        <Text/>
                    </div>
                </div>
                <PodcastReader/>
            </div>
        );
    }
}

function mapStateToProps({settings}) {
  return {settings};
}


export default connect(mapStateToProps)(Podcast);
