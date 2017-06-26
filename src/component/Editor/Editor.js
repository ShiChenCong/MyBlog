import React, { Component } from 'react';
import { Button } from 'antd'
import './styles.less'

export default class Editor extends Component {
	constructor(props){
		super(props);
		this.state = {
			content:''
		}
	}

	populateText = (e) => {
		console.log(e.target.value)
	}

	render() {
		return (
			<div className='container'>
				<textarea onChange = { this.populateText }></textarea>
				<div></div>
			</div>
		)
	}
}
