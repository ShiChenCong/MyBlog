import  React, { Component } from 'react';
import * as actions from '../../actions/BlogDetailActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

@connect((state) => {
	return {states:state}
},(dispatch) => {
	return {
		actions:bindActionCreators({...actions}, dispatch),
		dispatch
	}
})
export default  class BlogDetail extends  Component {
    render() {
        console.log(this.props.match.params.id);
        console.log(this.props)
        return (
            <div>
                this is blog detail
            </div>
        )
    }
}
