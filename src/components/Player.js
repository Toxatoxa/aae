import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Sound from 'react-sound';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeAudio, updateScroll} from '../actions/index';

import '../css/Player.css';

class Player extends Component {

    constructor(props) {
        super(props);

        this.state = {
            audio: {
                status: 'pause',
                loadingStatus: 0,  // 0 - was now loaded, 1 - loading, 2 - was loaded
            }
        };

    }

    onPlayButtonClick() {

        const loadingStatus = (this.state.audio.loadingStatus === 0) ? 1 : 2;

        const status = (this.state.audio.status == 'pause')
            ? 'play'
            : 'pause';
        this.props.changeAudio(this.state.audio);
        this.setState({
            audio: {
                status,
                loadingStatus
            }
        });
    }

    handleSongPlaying(data) {

      if(this.state.audio.loadingStatus === 1) {
        this.setState({audio:{'loadingStatus' : 2} });
      }

      this.props.updateScroll(data.position);
    }

    render() {

        const playStatus = (this.state.audio.status == 'pause')
            ? Sound.status.PAUSED
            : Sound.status.PLAYING;

        let buttonIcon;

        if(this.state.audio.loadingStatus === 1) {
          buttonIcon = 'spinner';
        } else {
          buttonIcon = (this.state.audio.status == 'pause')
              ? 'play'
              : 'pause';
        }

        return (
            <div className="Player">

                <div className="Player-button">
                    <button onClick={this.onPlayButtonClick.bind(this)}>
                        <FontAwesome name={buttonIcon} size='2x'/>
                    </button>
                </div>

                <Sound
                  url="/audio/239.mp3"
                  playStatus={playStatus}
                  onPlaying={this.handleSongPlaying.bind(this)} />

            </div>
        );
    }
}

function mapStateToProps({settings}) {
  return {settings};
}

export default connect(mapStateToProps, {changeAudio, updateScroll})(Player);
