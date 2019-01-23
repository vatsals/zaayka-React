import React, { Component } from 'react';
import './Dashboard.css';
import Dashboardlist from './Dashboardlist';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      myLists: [],
      cityName: ''
    };
  	this.updateCounter = this.updateCounter.bind(this);
    this.fetchCityRests = this.fetchCityRests.bind(this);
    this.showState = this.showState.bind(this);
  }

  componentDidMount() {
    var url = 'http://api.ipstack.com/117.233.60.108?access_key=5b8e6dde3bb0627d365534a4fccd16d5&format=1';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          myLists: [],
          cityName: json.city
        });
        this.fetchCityRests();
      })
      .catch((error) => {
       console.error(error);
      });
  }

  fetchCityRests() {
    var url = 'http://localhost:3000/users/city/restaurants/';
    url = url + this.state.cityName;
    fetch(url)
      .then(res => res.json())
      .then((users) => {
        this.setState({    
          myLists: users.data.slice(0, 6),
          cityName: this.state.cityName
        });
        this.showState(this.state.cityName);
      });
  }

  showState(city) {
    this.setState({    
      myLists: this.state.myLists,
      cityName: this.state.cityName
    });
  }

  updateCounter() {
  	
  }

  render() {
    var cityStyle = {
      marginLeft: '5px',
      fontSize: '16px',
      color: '#197CD3',
      fontWeight: '700'
    }
    return (
        <div>
          <div className="myCard">
            <div className="dashHead">
              <p className="gInfo"><span className="glyphicon glyphicon-star restHead"></span>Restaurants Near You!</p>
              <div className="searchButtonHead">
                <button className="searchBtn"><span className="fa fa-search searchBtnIcon"></span>
                  <Link to="/search" style={{color: 'white', textDecoration: 'none'}}>Search</Link>
                </button>
              </div>
            </div>
            <div className="styHead">
              <span className="glyphicon glyphicon-globe glb"></span><span style={{fontSize: '15px'}}>Location Detected to be </span><span style={cityStyle}>{ this.state.cityName }</span>
            </div>
            <Dashboardlist myLists={this.state.myLists} />
          </div>
        </div>
    );
  }
}

export default Dashboard;
