import React from 'react'
import BlogPage from 'bundle-loader?lazy!./BlogPage'
import Bundle from '../bundle.js';

export const Blog = () => (
	<Bundle load={BlogPage}>
		{(List) => <List/>}
	</Bundle>
)
