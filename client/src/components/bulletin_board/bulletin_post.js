import React from 'react';

class BulletinPost extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return(
				<div className="bulletin-item">
                      <div className="bulletin-post-img" style={{backgroundImage: 'url('+ this.props.img +')'}} />
                      <div className="bulletin-post-time">{this.props.time}m ago</div>
                      <div className="bulletin-post-title">{this.props.name}<br /><span>{this.props.title}</span></div>
                      <div className="bulletin-post-content">{this.props.message}</div>
                      <div className="bulletin-options">
                        <div className="like"><i className="fa fa-heart" />&nbsp;&nbsp;{this.props.likes} Likes</div>
                        <div className="comment"><i className="fa fa-comment" />&nbsp;&nbsp;{this.props.comments} Comments</div>
                      </div>
                      <div className="comment-section">
                        <div className="add-new-comment-container">
                          <div className="add-comment-img" />
                          <textarea className="add-comment-input" defaultValue={""} />
                          <label className="add-comment-label">Add Comment...</label>
                          <div className="add-comment-btn">Comment</div>
                        </div>
                      </div>
                    </div>
			);
	}
}
export default BulletinPost;