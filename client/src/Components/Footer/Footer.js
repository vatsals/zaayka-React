import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
  render() {
  	var footStyle = {
  		marginBottom: '0px', 
  		fontSize: '14px'
  	};
    return (
        <footer className="Footer">
    		  <p style={footStyle}>
    		    <span>© {this.props.year} ZomatoApp</span>
    		  </p>
    		</footer>
    );
  }
}

Footer.propTypes = {
  year: PropTypes.number,
};

Footer.defaultProps = {
    year: 2018
};

export default Footer;
