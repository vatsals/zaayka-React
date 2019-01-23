import React, { Component } from 'react';
import './Dashboard.css';

class Dashboardlist extends Component {
	constructor() {
	  	super();
	  	this.state = {
	    	search: ''
	    };
	}

	updateSearch(e) {
		this.setState({search: e.target.value.substr(0,20)});
	}

	render() {
		let filterMap = this.props.myLists.filter(
			(myList)=> {
				return myList.Restaurant_Name.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1;
			}
		);
		return (
			<div className="tab" id="tab" style={{marginTop: '10px'}}>
				<div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
					<input type="text" 
					  	className="ipt"
					  	placeholder="Search here"
					  	value={this.state.search}
					  	style={{height: '28px', fontSize: '13px', width: '30%', marginLeft: '35%', 'borderRadius': '3px'}}
					   	onChange={this.updateSearch.bind(this)} />
					<span className="glyphicon glyphicon-search restHead"></span>
			   	</div>
              <table className="table table-hover">
                <thead>
                  <tr style={{display: 'flex'}}>
                    <th className="thHead fl2" style={{display: 'flex'}}>Restaurant Name</th>
                    <th className="thHead" style={{display: 'flex', flex: '2'}}>Address</th>
                    <th className="thHead" style={{display: 'flex', justifyContent: 'center', flex: '1'}}>Rating</th>
                  </tr>
                </thead>
                <tbody>
					{filterMap.map((myList, i) => {
						return (
					      	<tr className="flexMan" key={i}>
								<td className="fl2" style={{display: 'flex', alignItems: 'center', flex: '1'}}>
						          <div className="flexMan">
						            <div className="flexDiv">
						              <span className="padLft flexSpan">{myList.Restaurant_Name}</span>
						            </div>
						          </div>
						        </td>
						        <td style={{display: 'flex', flex: '2', alignItems: 'center', textAlign: 'left'}}>
						            <div className="flexMan">
						              <div className="flexDiv">
						                <span className="padLft flexSpan">{myList.Address}</span>
						              </div>
						            </div>
						        </td>
						        <td style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center'}}>
						            <div className="flexMan">
						              <div className="divHead">
						                <span className="glyphicon glyphicon-star divStar"></span><span className="padLft flexSpan">{myList.Rating}</span>
						              </div>
						            </div>
						        </td>
						    </tr>
						)
					})}
				</tbody>
              </table>
            </div>
		)
	}
}

export default Dashboardlist;
