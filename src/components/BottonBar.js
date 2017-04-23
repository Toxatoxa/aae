import React, {Component} from 'react';
import Player from './Player';
import Settings from './Settings';
import FontAwesome from 'react-fontawesome';
import '../css/BottonBar.css';

class BottonBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showSettings: false
        };

    }

    cliclOnBack() {
        alert('This is doesn\'t work now');
    }

    cliclOnSettings() {

        this.setState({
            //TODO change to previous state, not trust current one.
            showSettings: (this.state.showSettings)
                ? false
                : true
        });
    }

    render() {
        let showSettings = this.state.showSettings;
        return (
            <div>

                <div className="BottonBar">
                    <Settings showSettings={this.state.showSettings} />
                    <div className={`BottonBar-main ${ (showSettings)
                        ? 'hide'
                        : ''}`}>
                        <div className="BottonBar-left bt">
                            <button onClick={this.cliclOnBack}>
                                <FontAwesome name='chevron-left' size='2x'/>
                            </button>
                        </div>
                        <div className="BottonBar-center bt">
                            <Player/>
                        </div>
                        <div className="BottonBar-right bt">
                            <button onClick={this.cliclOnSettings.bind(this)}>
                                <FontAwesome name={(showSettings)
                                    ? 'times'
                                    : 'sliders'} size='2x'/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default BottonBar;
