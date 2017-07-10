import React, { Component } from 'react';
import BlogList from '../../component/BLogList/BlogList.js'
import * as Actions from '../../actions/BlogListActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import './index.less'


@connect((state) => {
	return {states:state}
},(dispatch) => {
	return {
		actions:bindActionCreators({...Actions}, dispatch),
		dispatch
	}
})
export default class BlogPage extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.actions.queryHeaderAndTime(10,0,'artilce');
	}

	render() {
		return (
			<div className='BlogPage'>
				<BlogList   {...this.props} />
			</div>
		)
	}
}
