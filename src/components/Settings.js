import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import {changeFont} from '../actions/index';
import SettingsMenuItems from './SettingsMenuItems';
import '../css/Settings.css';

const MAX_FONT_SIZE = '20';
const MIN_FONT_SIZE = '16';

const MENU_TEXT_SIZE = 'text_size';
const MENU_PLAY_OPTIONS = 'play_options';


class Settings extends Component {

  constructor(props) {
      super(props);

      this.state = {
          activeMenu: MENU_TEXT_SIZE
      };

      this.onClickActiveMenu = this.onClickActiveMenu.bind(this);
  }

  clickOnMakeFontSmall() {
      if (this.props.settings.fontSize > MIN_FONT_SIZE)
          this.props.changeFont(--this.props.settings.fontSize);
      }

  clickOnMakeFontBig() {
      if (this.props.settings.fontSize < MAX_FONT_SIZE)
          this.props.changeFont(++this.props.settings.fontSize);
  }

  onClickActiveMenu(activeMenu)
  {
    this.setState({activeMenu});
  }

  onClickChangePlayerSpeed(speed){
    console.log('speed');
    console.log(speed);
  }

  render() {

    let menuElements = [
      {type : MENU_TEXT_SIZE, 'title' : 'Font'},
      {type : MENU_PLAY_OPTIONS, 'title' : 'Speed'}
    ];

    let speedButtons = [0.50, 0.60, 0.80, 1.00];

    return (
      <div className={`Settings ${ (this.props.showSettings)
          ? ''
          : 'hide'}`}>
        <div className="menu">
            <SettingsMenuItems
              elements={menuElements}
              active={this.state.activeMenu}
              onClickActiveMenu={this.onClickActiveMenu} />
            {/* <div className={`menu-item ${ (this.state.activeMenu == MENU_TEXT_SIZE) ? 'active' : ''}`} onClick={() => this.onClickActiveMenu(MENU_TEXT_SIZE)}>
                <span>Text side</span>
            </div>
            <div className={`menu-item ${ (this.state.activeMenu == MENU_PLAY_OPTIONS) ? 'active' : ''}`} onClick={() => this.onClickActiveMenu(MENU_PLAY_OPTIONS)}>
                <span>Audio Speed</span>
            </div> */}
        </div>

        <div className={`menu-content ${ (this.state.activeMenu == MENU_TEXT_SIZE) ? 'active' : ''}`}>
            <button onClick={this.clickOnMakeFontSmall.bind(this)} className="btn">
                <FontAwesome name="minus"/>
            </button>
            <span className="num">{this.props.settings.fontSize}</span>
            <button onClick={this.clickOnMakeFontBig.bind(this)} className="btn">
                <FontAwesome name="plus"/>
            </button>
        </div>
        <div className={`menu-content ${ (this.state.activeMenu == MENU_PLAY_OPTIONS) ? 'active' : ''}`}>
          <div className="audio-speed">
            0.50x 0.60x 0.80x <span className="active">1.00x</span>
          </div>
          {/* {speedButtons.map((speed, key) => {
            return(
              <button key={key} onClick={() => this.onClickChangePlayerSpeed(speed)} className="btn">{speed}x</button>
            );
          })} */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({settings}) {
    return {settings};
}

export default connect(mapStateToProps, {changeFont})(Settings);
