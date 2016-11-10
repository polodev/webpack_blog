import React, { Component } from 'react';
import moment from 'moment';
export default class BlogPost extends Component {
	render() {
		const {post} = this.props;
		let date = moment(post.date, "MMM-DD-YYYY");
		return (
			<div className="blogPost">
				<div className="blogPost__heading">
					<div className="blogPost__date">
						<span className="monthDate"> {moment.monthsShort()[date.month()]} {date.date()} </span>
						<br/>
						<span className="year"> {date.year()}</span>
					</div>
					<div className="blogPost__title">
						<h2> {post.title} </h2>
					</div>
				</div>
				<div className="blogPost__content">
					<div dangerouslySetInnerHTML={{__html: post.content}}></div>
				</div>
			</div>
		);
	}
}
