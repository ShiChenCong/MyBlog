import  React, { Component } from 'react';
import * as actions from '../../actions/BlogDetailActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BlogDetail from '../../component/BlogDetail/BlogDetail'
import './index.less';


@connect((state) => {
	return {states:state}
},(dispatch) => {
	return {
		actions:bindActionCreators({...actions}, dispatch),
		dispatch
	}
})
export default  class BlogDetailPage extends  Component {

    componentDidMount() {
        this.props.actions.queryById('article', this.props.match.params.id)

    }


    render() {
        return (
            <div className='markdown-body'>
                <BlogDetail {...this.props} getMarkdownText={  {__html: this.props.states.BlogDetailReducer.article.toJS().data}}/>
            </div>
        )
    }
}
