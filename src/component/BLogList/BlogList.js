import React, {Component} from 'react';

export default class BlogList extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let data = this.props.states.BlogListReducer.toJS().BlogList.map( ({header, time}, key) =>
				<li  key={ key }>
					<span>{ header }</span>
					<div><i className="fa fa-calendar fa-lg"></i>{ moment(time).format("YYYY-MM-DD") }</div>
				</li>
			)

		return (
			<ul>
				{ data }
			</ul>
		)
	}
}
