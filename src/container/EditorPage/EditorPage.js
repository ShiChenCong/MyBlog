import React, { Component } from 'react';
import Editor from '../../component/Editor/Editor.js';
import marked from 'marked';
import '../../static/highlight.pack.js';
import '../../static/highlight.css';
import '../../static/markdown.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EditorActions  from '../../actions/EditorActions.js';

import './index.less'
import find from '../../utils/find.js'

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

		// marked.setOptions({
		//   highlight: function (code) {
		//     return require('highlight.js').highlightAuto(code).value;
		//   }
		// });
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


	SubmitText = () => {
		let header = find('query','.header input').value;
		if( header == ''){
			alert('标题不能为空');
			return
		}
		let self = this;
		let data = {
			time:new moment(),
			data:marked(self.state.content),
			header:header
		}
		self.props.actions.SubmitText(data)
	}

	render() {

        return (
			<div className='container'>
				<div className='header'>
					<div onClick={() => { this.SubmitText() }}>发布文章</div>
					<input placeholder='请输入文章标题'></input>
				</div>
				<Editor populateText ={ this.populateText } getMarkdownText={ this.getMarkdownText() }/>
			</div>
		)
	}
}
