import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Sound from 'react-sound';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeAudio} from '../actions/index';

import '../css/Player.css';

class Player extends Component {

    constructor(props) {
        super(props);

        this.state = {
            audio: {
                'status': 'pause'
            }
        };

        this.onPlayButtonClick = this.onPlayButtonClick.bind(this);

    }

    onPlayButtonClick() {
        const newAudioStatus = (this.state.audio.status == 'pause')
            ? 'play'
            : 'pause';
        this.props.changeAudio(this.state.audio);
        this.setState({
            audio: {
                'status': newAudioStatus
            }
        });
    }

    render() {

        const playStatus = (this.state.audio.status == 'pause')
            ? Sound.status.PAUSED
            : Sound.status.PLAYING;

        const buttonIcon = (this.state.audio.status == 'pause')
            ? 'play'
            : 'pause';

        return (
            <div className="Player">

              <div className="Player-button">
                <button onClick={this.onPlayButtonClick}>
                    <FontAwesome name={buttonIcon} size='2x'/>
                </button>
              </div>

                <Sound url="/audio/239.mp3" playStatus={playStatus}/>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeAudio
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Player);
