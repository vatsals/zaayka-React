import React, { Component } from 'react';
import './Header.css';
import HeaderRight from './HeaderRight';
import PropTypes from "prop-types";
// import logo from './logo.svg';

class Header extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
    super(props, context);
    this.basePage = this.basePage.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    window.location = '/login';
  }

  basePage() {
    window.location = '/dashboard';
  }

  render() {
    return (
        <nav className="navbar navbar-inverse">
        	<div className="navbar-header">
        	  <span className="fa fa-cutlery header-logo"></span>
	          <h1 className="header-title" style={{cursor: 'pointer'}} onClick={this.basePage.bind(this)}>{this.props.brand.name}</h1>
          </div>
          <div className="navbar-right" onClick={this.logout}>
            <HeaderRight user={JSON.parse(localStorage.getItem('myUser'))?JSON.parse(localStorage.getItem('myUser')).userName:''} />
          </div>
        </nav>
    );
  }
}

export default Header;
