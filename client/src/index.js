import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { browserHistory, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import setAuthoizationToken from './utils/set_authorization_token';
import App from './App';
import Home from './components/home';
import Followers from './components/followers/followers';
import EditProfile from './components/edit_profile/edit_profile';
import Login from './components/login/login';
import RootReducer from './rootreducer';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/auth_actions';



import '../style/font-awesome.min.css';
import '../style/bootstrap.min.css';
import '../style/style.css';
import '../style/edit-profile.css';
import '../style/animate.css';
import '../style/mycss.css';
import '../style/profile.css';
import '../style/create-listing.css';
import '../style/create_survey.css';
import '../style/dash.css';

import '../style/search-results.css';



const store = createStore(
        RootReducer,
        compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

if(localStorage.jwtToken){
	setAuthoizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}










ReactDOM.render(
	
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
            <IndexRoute component={Login} />
        	<Route path="/home" component={Home} />
        	<Route path="/followers" component={Followers} />
        	<Route path="/login" component={Login} />
            <Route path="/editprofile" component={EditProfile} />
    	</Route>
    	
    	
    </Router>
  </Provider>
  , document.querySelector('.everything'));