import React from 'react';
import logo from '../../../images/Halo.png';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Header extends React.Component {
	render(){
		const { isAuthenticated } = this.props.auth;

		
		var navLinks = <div><li><Link to="/home"><span className="glyphicon glyphicon-home" aria-hidden="true" /></Link></li>
			            <li><a href="messages.html"><span className="glyphicon glyphicon-envelope" aria-hidden="true" /></a></li>
			            <li id="notifications" style={{position: 'relative'}}><a href="#"><span className="glyphicon glyphicon-bell" aria-hidden="true" /></a>
			              <div className="notification-dropdown animated"><div className="top-caret" />
			                <div className="notification-title">Conversations</div>
			                <div className="notification-list">
			                  <a href="messages.html"><div className="notification-item">
			                      <div className="not-img" style={{backgroundImage: 'url(images/128.jpg)'}} />
			                      <div className="not-time">Just Now</div>
			                      <div className="not-title">Tom Low</div>
			                      <div className="not-close"><i className="fa fa-times" /></div>
			                      <div className="not-content">Hey Buddy! Just seeing how youre doing.</div>
			                    </div></a>
			                  <div className="notification-item">
			                    <div className="not-img" style={{backgroundImage: 'url(images/129.jpg)'}} />
			                    <div className="not-time">24m</div>
			                    <div className="not-title">Jerry Bulmer</div>
			                    <div className="not-close"><i className="fa fa-times" /></div>
			                    <div className="not-content">Hows life?</div>
			                  </div>
			                  <div className="notification-item">
			                    <div className="not-time">Yesterday</div>
			                    <div className="not-title"><span style={{color: '#1B7FC8'}}>Jan Lewis</span> has just made you a favorite.</div>
			                    <div className="not-close"><i className="fa fa-times" /></div>
			                  </div>
			                  <div className="end-not-list">View all Notifications</div>
			                </div>
			              </div>
			            </li>
			            <li><a href="#"><span className="glyphicon glyphicon-cog" aria-hidden="true" /></a></li></div>;
		return(
			<div>
				<header className="header">
			        <div className="container">
			          <div className="logo-container"><img style={{height: 20, lineHeight: 50, display: 'inline-block'}} src={logo} /></div>
			          <ul className="user-nav">
			          {isAuthenticated ? navLinks : null}
			            
			            
			           
			          </ul>
			        </div>
			      </header>

			</div>
			);
	}
}
function mapStateToProps(state){
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Header);