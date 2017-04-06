import React, {Component} from 'react';
import PodcastReader from './PodcastReader';
import '../css/Podcast.css';

import Text from '../texts/l_001.js';

class Podcast extends Component {
    render() {
        return (
            <div className='Podcast'>
                <div className="Podcast-content">
                    <div className="Podcast-header">
                        Say No to the Naysayer When it comes to Your English
                    </div>
                    <div className="Podcast-text">
                        <Text/>
                    </div>
                </div>

                <PodcastReader />

            </div>
        );
    }
}

export default Podcast;
