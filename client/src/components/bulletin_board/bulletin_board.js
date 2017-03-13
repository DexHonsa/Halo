import React from 'react';
import BulletinPost from './bulletin_post';

class BulletinBoard extends React.Component{
	render() {
		return(
				<div id="bulletin-board-content" className="bulletin-board-container">
                  <div className="panel">
                    <div className="create-post">
                      <div className="create-post-title">Create Post</div>
                      <textarea className="create-post-input" placeholder="Update Status, Upload Picture, or Upload a File" type="text" defaultValue={""} />
                      <div className="create-post-bottom">
                        <div className="create-post-btn"><i className="fa fa-camera" /> Add Photo</div>
                        <div className="create-post-btn"><i className="fa fa-file" /> Add File</div>
                        <div className="create-post-post">Post</div>
                        <div className="create-post-dropdown">Everyone <i className="fa fa-eye" />
                          <div className="create-post-dropdown-content">
                            <ul>
                              <a href="#"><li>Everyone <i className="fa fa-check" /></li></a>
                              <a href="#"><li>Tenants</li></a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel">
                    <div className="bulletin-title"><i className="fa fa-comments" />&nbsp;&nbsp;Bulletin Board</div>
                    <BulletinPost
                    	name="Dex Honsa"
                    	title="Terra Lago"
                    	time="23"
                    	img="http://res.cloudinary.com/dexhonsa/image/upload/v1487638752/hi7zp2ztaq6wth4khnpf.png"
                    	likes="3"
                    	message="Don't know what I did, but the elevator on the right of the big plant is not working correctly. I think we need to get somebody down to fix it."
                    	comments="2"
                     />
                     
                    
                    
                    
                  </div>
                </div>
			);
	}
}


export default BulletinBoard;