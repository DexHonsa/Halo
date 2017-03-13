 import axios from 'axios';
 import setAuthorizationToken from '../utils/set_authorization_token';
 import { SET_CURRENT_USER } from './types';
 import jwtDecode from 'jwt-decode';
 import { browserHistory } from 'react-router';

export function setCurrentUser(user){
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function userLogin(data) {
	return dispatch => {
		return axios.post('/api/login', data).then(res => {
			const token = res.data.token;
			localStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			//console.log(jwtDecode(token));
			

			dispatch(setCurrentUser(jwtDecode(token)));
			var path = '/home';
			browserHistory.push(path);
		})
	}
}