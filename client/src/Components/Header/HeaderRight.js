import React, { Component } from 'react';
import './Header.css';

class HeaderRight extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
        this.props && <li className="dropdown dSign">
          <span className="glyphicon glyphicon-user logIcon"></span>
          <div className="dId" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <span className="cardSp">{this.props.user}</span>
          </div>
        </li>
    );
  }
}

export default HeaderRight;
