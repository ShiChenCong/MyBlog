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
				<div className="con">
					<div id="canvas"></div>
				</div>
				<video autoPlay loop="loop" muted="">
				    <source src="https://d3hondn7jdiz1d.cloudfront.net/resources/bg-video.mp4" type="video/mp4" />
				</video>
			</div>
		)
	}
}

// export default connect(mapStateToProps,mapDispatchToProps)(IndexPage)
export default IndexPage
