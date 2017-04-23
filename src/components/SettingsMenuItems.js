import React from 'react';

const SettingsMenuItems = (props) => {
  return (
    <div>
      {props.elements.map((element, key) => {
        return (
          <div key={key} className={`menu-item ${ (props.active == element.type) ? 'active' : ''}`} onClick={() => props.onClickActiveMenu(element.type)}>
            <span>{element.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SettingsMenuItems;
