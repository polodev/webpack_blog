import React, { Component } from 'react';
import BlogPostTitle from './BlogPostTitle';

export default class BlogSidebar extends Component {
	render() {
		let {posts, activePostId, _changeActivePostId} = this.props;
		let blogPostTitle = posts.map((post, index) => {
			return <BlogPostTitle post={post} key={index} _changeActivePostId={_changeActivePostId} activePostId={activePostId} />
		})	
		return (
			<div>
				{blogPostTitle}
			</div>
		);
	}
}

