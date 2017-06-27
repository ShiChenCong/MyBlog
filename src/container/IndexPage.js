import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as IndexActions from '../actions/IndexActions.js';
import { bindActionCreators } from 'redux';
import {Map} from 'immutable';
//
// @connect(
//   (state) => ({state}),
//   {
//     ...IndexActions
//   }
// )
@connect((state) => {
	return {states: state}
}, (dispatch) => {
	return {
		actions: bindActionCreators(IndexActions, dispatch),
		dispatch
	}
})

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
        console.log(this.props)
		return(
			<div>
				IndexPage
			</div>
		)
	}
}

// export default connect(mapStateToProps,mapDispatchToProps)(IndexPage)
export default IndexPage
