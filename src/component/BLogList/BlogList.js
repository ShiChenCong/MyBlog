import React, {Component} from 'react';

export default class BlogList extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let data = this.props.states.BlogListReducer.toJS().BlogList.map( (value, key) =>
				<li  key={ key } onClick={() => { this.props.history.push(`detail/${value['_id']}`) }}>
					<span>{ value['header'] }</span>
					<div><i className="fa fa-calendar fa-lg"></i>{ moment(value['time']).format("YYYY-MM-DD") }</div>
				</li>
			)

		return (
			<ul>
				{ data }
			</ul>
		)
	}
}
