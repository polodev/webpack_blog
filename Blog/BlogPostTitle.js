import React, { Component } from 'react';
import moment from 'moment';

export default class BlogPostTitle extends Component {
	render() {
		const {post, activePostId, _changeActivePostId} = this.props;
		let className = 'singlePostTitle';
		if(post.id === activePostId) {
			className = 'singlePostTitle active'
		}
		let date = moment(post.date, "MMM-DD-YYYY");
		console.log("date", date);
		return (
			<div className={className} onClick={()=>{_changeActivePostId(post.id)}}>
				<div className="postDate">{moment.monthsShort()[date.month()]} {date.date()}</div>
				<div className="postTitle">{post.title}</div>
			</div>
		);
	}
}
