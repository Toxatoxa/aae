import React, {Component} from 'react';
import Player from './Player';
import FontAwesome from 'react-fontawesome';
import '../css/BottomBar.css';

class BottomBar extends Component {
    render() {
        return (
            <div className="BottomBar">
                <div className="BottomBar-left">
                  <button>
                    <FontAwesome name='chevron-left' size='2x' />
                  </button>
                </div>
                <div className="BottomBar-center">
                  <Player />
                </div>
                <div className="BottomBar-right">
                  <button>
                    <FontAwesome name='sliders' size='2x' />
                  </button>
                </div>
            </div>
        );
    }
}

export default BottomBar;
