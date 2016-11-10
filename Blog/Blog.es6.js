import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BlogSidebar from './BlogSidebar';
import BlogPost from './BlogPost'
import posts from './posts';
 
export class Blog extends Component {
	constructor() {
		super();
		this.state = {
			activePostId : posts[0].id,
			activePost : posts[0],
			hasNextPost : true,
			hasPrevPost : false,
			activePostIndex : 0
		}
		this._changeActivePostId = this._changeActivePostId.bind(this);
		this._changePost = this._changePost.bind(this);
	}
	_changeActivePostId(activePostId) {
		let activePost = posts.find(post=>post.id === activePostId);
		let activePostIndex = posts.findIndex(post=>post.id === activePostId);
		let hasNextPost = true;
		let hasPrevPost = false;
		if(activePostIndex >= (posts.length - 1)) {
			hasNextPost = false;
		}
		if(activePostIndex >= 1) {
			hasPrevPost = true;
		}
		this.setState({activePostId, activePost, hasPrevPost, hasNextPost, activePostIndex});
	}
	_changePost(type) {
		console.log("type", type);
		let {hasNextPost, hasPrevPost, activePostIndex} = this.state;
		if(type === 'prev') {
			if(hasPrevPost) {
				this._changeActivePostId(posts[activePostIndex - 1].id);
			}
		}else if(type === 'next') {
			if(hasNextPost) {
				this._changeActivePostId(posts[activePostIndex + 1].id);
			}

		}
	}
	render() {
		let {activePostId, activePost, hasPrevPost, hasNextPost} = this.state;
		let prevPostClassName = hasPrevPost ? 'prevPost' : 'prevPost inactive';
		let nextPostClassName = hasNextPost ? 'nextPost' : 'nextPost inactive';
		return (
			<div className="container">
				<div className="reactBlog">
					<div className="blogSideBar">
						<BlogSidebar _changeActivePostId={this._changeActivePostId} posts={posts} activePostId={activePostId} />
					</div>
					<div className="blogPost">
						<BlogPost post={activePost} />
						<div className="blogPost__pagination">
							<div className={prevPostClassName}>
								<div onClick={()=>this._changePost('prev')}>PREVIOUS</div>
							</div>
							<div className={nextPostClassName}>
								<div onClick={()=>this._changePost('next')}>Next</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Blog />, document.getElementById('reactBlog'));


