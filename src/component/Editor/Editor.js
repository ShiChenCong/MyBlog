import React, { Component } from 'react'
import './styles.less'


export default class Editor extends Component {

	render() {
		return (
			<div className='markdown-body'>
				<textarea onChange = { this.props.populateText }></textarea>
				<div dangerouslySetInnerHTML={ this.props.getMarkdownText }></div>
			</div>
		)
	}
}
