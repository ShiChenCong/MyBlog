import React, { Component } from 'react';
import BlogList from '../../component/BLogList/BlogList.js'
import * as Actions from '../../actions/BlogListActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import './index.less'
import { withRouter } from 'react-router'

@connect((state) => {
	return {states:state}
},(dispatch) => {
	return {
		actions:bindActionCreators({...Actions}, dispatch),
		dispatch
	}
})
class BlogPage extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount() {
		this.props.actions.queryHeaderAndTime(10,0,'artilce');
	}

	render() {
	    console.log(this)
		return (
			<div className='BlogPage'>
				<BlogList   {...this.props} />
			</div>
		)
	}
}
export default withRouter (BlogPage)