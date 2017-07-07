import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class BlogList extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let data = this.props.BlogListReducer.BlogList.toJS();
		return (
			<FontAwesome
        className='fa-pied-piper'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
		)
	}
}
