import React, {Component} from 'react';
import {  NavLink } from 'react-router-dom'
import './index.less'


export default class Nav extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<nav className="nav">
					<ul id="menu">
						<li><NavLink activeClassName="selected"  to='/blog'>博文</NavLink></li>
						<li><NavLink  activeClassName="selected"  to='/editor'>主页</NavLink></li>
					</ul>
				</nav>

		)
	}
}
