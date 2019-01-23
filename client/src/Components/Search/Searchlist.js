import React, { Component } from 'react';
import './Search.css';

class Searchlist extends Component {
	constructor(props) {
	  	super();
	}

	render() {
		return (
			<div className="tab" id="tab" style={{marginTop: '30px'}}>
              <table className="table table-hover">
                <thead>
                  <tr style={{display: 'flex'}}>
                    <th className="thHead fl2" style={{display: 'flex'}}>Restaurant Name</th>
                    <th className="thHead" style={{display: 'flex', flex: '2'}}>Address</th>
                    <th className="thHead" style={{display: 'flex', justifyContent: 'center', flex: '1'}}>Rating</th>
                  </tr>
                </thead>
                <tbody>
					{this.props.myLists.map((myList, i) => {
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
        );
	}
}

export default Searchlist;
