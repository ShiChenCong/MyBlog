import React, { Component } from 'react'
import { Button } from 'antd'
import './styles.less'


export default class Editor extends Component {

	render() {
		return (
			<div className='container'>
				<div className='markdown-body'>
					<textarea onChange = { this.props.populateText }></textarea>
					<div dangerouslySetInnerHTML={ this.props.getMarkdownText }></div>
				</div>
				 <Button type="primary" onClick={ this.props.submit }>提交</Button>
			</div>
		)
	}
}
