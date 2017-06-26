import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as IndexActions from '../actions/IndexActions.js';
import {bindActionCreators} from 'redux';
import {Map} from 'immutable';
//
// @connect(
//   (state) => ({state}),
//   {
//     ...IndexActions
//   }
// )
function mapStateToProps(state) {
  return {
    state
  };
}

const actions = [
    IndexActions
];

function mapDispatchToProps(dispatch) {
  const creators = Map()
      .merge(...actions)
      .filter(value => typeof value === 'function')
      .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
// @connect(mapStateToProps, mapDispatchToProps)
class IndexPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				IndexPage
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage)
// export default IndexPage
