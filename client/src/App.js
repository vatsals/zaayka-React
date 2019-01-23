import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Search from './Components/Search/Search';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';


class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('http://localhost:3000/users/test')
      .then(res => res.json())
      .then(users => this.setState( { users }));
  }

  render() {
    var myBrand = {
      name: "ZomatoApp"
    };
    return (
      <div className="App">
        <Header brand={myBrand} />
        {/*<ul>
              {this.state.users.map(user => 
                <li key={user.id}>{user.username}</li>
              )}
            </ul> */}
        <Router>
          <div>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/login" component={Login}></Route>
          </div>
        </Router>
        <Footer year={2018} />
      </div>
    );
  }
}

export default App;
