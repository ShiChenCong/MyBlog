import React, { Component } from 'react';
import Editor from '../component/Editor/Editor.js';
import { Button } from 'antd';
import marked from 'marked';
import '../static/highlight.pack.js';
import '../static/highlight.css';
import '../static/markdown.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EditorActions  from '../actions/EditorActions.js';



@connect((state) => {
	return {states: state}
}, (dispatch) => {
	return {
		actions: bindActionCreators(EditorActions, dispatch),
		dispatch
	}
})

export default class EditorPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			content:''
		}
	}

	//实时修改
	populateText = (e) => {
		this.setState({content:e.target.value})
	}

	//转换成markdown格式
	getMarkdownText = () => {
		let rawMarkup = marked(this.state.content);
		return {__html: rawMarkup};
	}

	//加了这个markdown才有样式
	componentDidUpdate() {
		document.querySelectorAll('.markdown-body code').forEach((val, index) => {
		  	hljs.highlightBlock(val);
		})
	}


	render() {
		return (
			<div className='container'>
				<Button type="primary" onClick={() => { this.props.actions.SubmitText(this.state.content)} }>提交</Button>
				<Editor populateText ={ this.populateText } getMarkdownText={ this.getMarkdownText() }/>
			</div>
		)
	}
}
