import React, { Component } from 'react';
import './Search.css';
import Searchlist from './Searchlist';

class Search extends Component {
  state = {
      myLists: [], 
      countrys: ["India", "USA"],
      citys: [],
      cuisines: [], 
      search: [], 
      shouldHide: true
    };
  constructor(props) {
    super(props);
    this.fetchCityRests = this.fetchCityRests.bind(this);
    this.fetchRests = this.fetchRests.bind(this);
    this.fetchRestsName = this.fetchRestsName.bind(this);
    this.fetchDelivery = this.fetchDelivery.bind(this);
    this.fetchCuisine = this.fetchCuisine.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
  }

  updateCounter() {
  	
  }

  componentWillMount() {
    this.setState({shouldHide: true}, function () {
      });
    var url1 = 'http://localhost:3000/users/country';
    var url2 = 'http://localhost:3000/users/city';
    var c1 = []; var c2 = [];
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        for(var i=0;i<data.data.length;i++) {
          c1.push(data.data[i]._id);
        }
        c1.sort(function(a, b){
          return a.Country === b.Country ? 0 : +(a.Country > b.Country) || -1;
        });
        this.setState({countrys: c1}, function () {
        });
      })
      .catch((error) => {
       console.error(error);
      });
    fetch(url2)
      .then((res) => res.json())
      .then((data) => {
        for(var i=0;i<data.data.length;i++) {
          c2.push(data.data[i]);
        }
        c2.sort();
        this.setState({citys: c2}, function () {
        });
      })
      .catch((error) => {
       console.error(error);
      });
      var c3 = ["Cafe", "North Indian", "South Indian", "Cake", "Chinese", "Bakery", "American", "Italian", "European", "Filipino", "Pizza", "Korean", "Mexican", "Desserts", "Ice Cream"];
      c3.sort();
      this.setState({cuisines: c3}, function () {
        
      });
  }

  fetchCityRests() {
    this.refs.search.value = '';
    var url = 'http://localhost:3000/users/city/';
    url = url + this.refs.country.value;
    var c2 = [];
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        for(var i=0;i<data.data.length;i++) {
          c2.push(data.data[i]);
        }
        c2.sort();
        this.setState({citys: c2}, function () {
        });
    });
    if(parseInt(this.refs.country.value, 10)!==999 && parseInt(this.refs.city.value, 10)===999) {
      var url2 = 'http://localhost:3000/users/country/restaurants/';
      url2 = url2 + this.refs.country.value;
      fetch(url2)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({myLists: data.data}, function () {
        });
      });
    }
    else if(parseInt(this.refs.country.value, 10)!==999 && parseInt(this.refs.city.value, 10)!==999) {
      var url3 = 'http://localhost:3000/users/countity/restaurants/';
      url3 = url3 + this.refs.country.value + '/' + this.refs.city.value;
      fetch(url3)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({myLists: data.data}, function () {
        });
      });
    }
    else {}
  }

  fetchRests() {
    this.refs.search.value = '';
    if(parseInt(this.refs.country.value, 10)===999 && parseInt(this.refs.city.value, 10)!==999) {
      var url2 = 'http://localhost:3000/users/city/restaurants/';
      url2 = url2 + this.refs.city.value;
      fetch(url2)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({myLists: data.data}, function () {
        });
      });
    }
    else if(parseInt(this.refs.country.value, 10)!==999 && parseInt(this.refs.city.value, 10)!==999) {
      var url3 = 'http://localhost:3000/users/countity/restaurants/';
      url3 = url3 + this.refs.country.value + '/' + this.refs.city.value;
      fetch(url3)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({myLists: data.data, shouldHide: false}, function () {
        });
      });
    }
    else {}
  }

  fetchRestsName() {
    if(this.refs.search.value!=='') {
      if(parseInt(this.refs.country.value, 10)!==999 && parseInt(this.refs.city.value, 10)===999) {
        var url2 = 'http://localhost:3000/users/countryname/restaurants/';
        url2 = url2 + this.refs.country.value + '/' + this.refs.search.value;
        fetch(url2)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({myLists: data.data}, function () {
          });
        });
      }
      else if(parseInt(this.refs.country.value, 10)===999 && parseInt(this.refs.city.value, 10)!==999) {
        var url3 = 'http://localhost:3000/users/cityname/restaurants/';
        url3 = url3 + this.refs.city.value + '/' + this.refs.search.value;
        fetch(url3)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({myLists: data.data}, function () {
          });
        });
      }
      else if(parseInt(this.refs.country.value, 10)!==999 && parseInt(this.refs.city.value, 10)!==999) {
        var url4 = 'http://localhost:3000/users/countityname/restaurants/';
        url4 = url4 + this.refs.country.value + '/' + this.refs.city.value + '/' + this.refs.search.value;
        fetch(url4)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({myLists: data.data}, function () {
          });
        });
      }
      else {
        var url5 = 'http://localhost:3000/users/name/restaurants/';
        url5 = url5 + this.refs.search.value;
        fetch(url5)
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({myLists: data.data}, function () {
          });
        });
      }
    }
  }

  fetchDelivery() {
    this.refs.cuisine.value = '';
    if(this.refs.delivery.checked) {
      var url2 = 'http://localhost:3000/users/delivery/restaurants/';
      url2 = url2 + this.refs.country.value + '/' + this.refs.city.value;
      fetch(url2)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({myLists: data.data}, function () {
        });
      });
    }
    else {
      var url3 = 'http://localhost:3000/users/countity/restaurants/';
      url3 = url3 + this.refs.country.value + '/' + this.refs.city.value;
      fetch(url3)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({myLists: data.data}, function () {
        });
      });
    }
  }

  reset() {
    this.refs.search.value = '';
    this.refs.country.value = 999;
    this.refs.city.value = 999;
    this.refs.cuisine.value = 999;
    this.setState({myLists: [], shouldHide: true}, function () {
    });
    this.componentWillMount();
  }

  fetchCuisine() {
    var url = 'http://localhost:3000/users/cuisine/restaurants/';
      url = url + this.refs.country.value + '/' + this.refs.city.value + '/' + this.refs.cuisine.value;
      fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({myLists: data.data}, function () {
        });
      });
  }

  render() {
    return (
        <div>
          <div className="myCard">
            <div className="dashHead">
              <p className="gInfo"><span className="glyphicon glyphicon-filter restHead"></span>Filters</p>
              <div style={{display: 'flex', flex: '3'}}>
                  <div className="form-group mClass">
                      <select onChange={this.fetchCityRests.bind(this)} ref="country" className="selectClass" style={{flex: '4'}}>
                        <option value="999" selected="selected" disabled style={{textTransform: 'capitalize'}}>
                        Select Country
                        </option>
                        {this.state.countrys.map(function(country, i) {
                            return (
                              <option key={i} value={country.Country}>{country.Country}</option>
                            );
                        })}
                      </select>
                  </div>
                  <div className="form-group mClass">
                    <select onChange={this.fetchRests.bind(this)} ref="city" className="selectClass" style={{flex: '4'}}>
                        <option value="999" selected="selected" disabled style={{textTransform: 'capitalize'}}>
                        Select City
                        </option>
                        {this.state.citys.map(function(city, i) {
                            return (
                              <option key={i} value={city}>{city}</option>
                            );
                        })}
                      </select>
                  </div>
                  <div className="textFlat">
                    <input type="text" onChange={this.fetchRestsName.bind(this)} placeholder="Search.." ref="search" className="mySrh" />
                  </div>
                  <button onClick={this.reset.bind(this)} className="reset"><span className="glyphicon glyphicon-edit glyEdit"></span>Reset</button>
              </div>
            </div>
            <div id="checkTab" className={this.state.shouldHide ? 'checks' : 'visp'}>
                <div style={{display: 'flex', flex: '3'}}></div>
                <div className="div2">
                  <label className="container dayWeek" style={{padding: '0px', paddingLeft: '10px', fontSize: '13px', color: '#444'}}>Delivery
                      <input onChange={this.fetchDelivery.bind(this)} type="checkbox" ref="delivery" value="Delivery" id="1" />
                      <span className="checkmark"></span>
                    </label>
                </div>
                <div className="div3">
                  <div className="form-group mClass intMclass">
                    <select onChange={this.fetchCuisine.bind(this)} ref="cuisine" className="selectClass">
                        <option value="999" selected="selected" disabled style={{textTransform: 'capitalize'}}>
                        Select Cuisine
                        </option>
                        {this.state.cuisines.map(function(cuisine, i) {
                            return (
                              <option key={i} value={cuisine}>{cuisine}</option>
                            );
                        })}
                      </select>
                  </div>
              </div>
              <div style={{display: 'flex', flex: '2'}}></div>
            </div>
            <Searchlist myLists={this.state.myLists} />
          </div>
        </div>
    );
  }
}

export default Search;
