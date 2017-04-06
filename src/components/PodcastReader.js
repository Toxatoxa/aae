import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../css/PodcastReader.css';

class PodcastReader extends Component {

    render() {

        let podcastReaderClass = 'PodcastReader';

        if (typeof this.props.audio[0] !== 'undefined' && this.props.audio[0].status == 'pause') {
            podcastReaderClass += ' playing';
        }

        return (
            <div className={podcastReaderClass}>
                <div className="PodcastReader-top"></div>
                <div className="PodcastReader-middle">
                    <div className="cursor"/>
                </div>
                <div className="PodcastReader-bottom"></div>
            </div>
        );
    }
}

// export default PodcastReader;

function mapStateToProps({audio}) {
    return {audio};
}

export default connect(mapStateToProps)(PodcastReader);
