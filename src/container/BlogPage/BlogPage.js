import React, { Component } from 'react';
import BlogList from '../../component/BLogList/BlogList.js'
import * as Actions from '../../actions/BlogListActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

@connect((state) => {
	return {states:state}
},(dispatch) => {
	return {
		actions:bindActionCreators(Actions, dispatch),
		dispatch
	}
})
export default class BlogPage extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.actions.queryHeaderAndTime(2,2,'artilce')
	}

	render() {
		return (
			<div>
				<BlogList {...this.props.states}/>
			</div>
		)
	}
}
