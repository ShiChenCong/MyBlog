import React, {Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import  Nav from '../../component/Nav/Nav.js'

export default class NavPage extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div style={{height:'100%'}}>
				<Nav />
				{ this.props.children}
			</div>
		);
	}
}
