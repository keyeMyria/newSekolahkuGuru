//import axios from 'axios';
//import { AsyncStorage } from 'react-native';
import NavigatorService from '../services/navigator';

import {
	USERNAME_CHANGED,
	PASSWORD_CHANGED,
	TOKEN_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS,
	GANTI_PASSWORD,
	GANTI_PASSWORD_SUCCESS,
	GANTI_PASSWORD_FAIL,
	TOKEN_SUBMIT,
	TOKEN_SUBMIT_SUCCESS,
	TOKEN_SUBMIT_FAIL,
	CANCEL_REPLACE
} from './types';

const TIMEOUT = 10000;

export const usernameChanged = (text) => {
	return {
		type: USERNAME_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const tokenChanged = (text) => {
	return {
		type: TOKEN_CHANGED,
		payload: text
	};
};

export const loginUser = ({ username, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		if (!!username.trim() && !!password.trim()) {
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: 'testSaja'
			});
			NavigatorService.navigate('App');
		}
		else {
			dispatch({ type: LOGIN_USER_FAIL });
		}
	};
};

export const gantiPassword = ({ username, password }) => {
	return (dispatch) => {
		dispatch({ type: GANTI_PASSWORD });

		if (!!username.trim() && !!password.trim()) {
			dispatch({
				type: GANTI_PASSWORD_SUCCESS
			});
		}
		else {
			dispatch({ type: GANTI_PASSWORD_FAIL });
		}
	};
};

export const submitTokenPassword = ({ username, password, token }) => {
	return (dispatch) => {
		dispatch({ type: TOKEN_SUBMIT });

		if (!!username.trim() && !!password.trim() && !!token.trim()) {
			dispatch({
				type: TOKEN_SUBMIT_SUCCESS
			});
			NavigatorService.reset('login');
		}
		else {
			dispatch({ type: TOKEN_SUBMIT_FAIL });
		}
	};
};

export const cancelReplace = () => {
	return (dispatch) => {
		dispatch({ type: CANCEL_REPLACE });
		NavigatorService.reset('login');
	};
};
