import React, { Component } from 'react';
import './Login.css';
import user from './user.png';

class Login extends Component {
  constructor() {
    super();
    localStorage.removeItem('myUser');
  }
  login(e) {
    e.preventDefault();
    var k = {
      "username": this.refs.username.value,
      "password": this.refs.password.value
    }
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(k)
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.data[0]) {
        localStorage.setItem('myUser', JSON.stringify({ userId: data.data[0]._id, userName: this.refs.username.value }));
        window.location = '/dashboard';
      }
      else {
        alert('Incorrect Credentials');
      }
    });
  }
  render() {
    return (
        <div className="mid">
          <form onSubmit={this.login.bind(this)} style={{ padding: '10px' }}>
              <div className="imgcontainer">
                  <img src={user} width="100" height="100" alt="None" className="use" />
              </div>
              <div className="container" style={{display: 'flex', flexDirection: 'column', paddingTop: '5px', 'paddingBottom': '10px'}}>
                  <label style={{height: '32px'}}>
                      <p style={{fontWeight: '600', 'margin': '10px 0px 8px 0px'}}>Username</p>
                  </label>
                  <input type="text" style={{opacity: '1', cursor: 'default', height: '32px', fontSize: '13px', padding: '7px', position: 'relative', marginBottom: '0px'}} placeholder="Enter Username" ref="username" />
                  <label style={{height: '32px'}}>
                      <p style={{fontWeight: '600', margin: '20px 0px 8px 0px'}}>Password</p>
                  </label>
                  <input type="password" style={{opacity: '1', cursor: 'default', height: '32px', fontSize: '13px', padding: '7px', position: 'relative', marginBottom: '20px', marginTop: '10px'}} placeholder="Enter Password" ref="password" />
                  <button type="submit" value="Login">Login</button>
              </div>
          </form>
        </div>
    );
  }
}

export default Login;
