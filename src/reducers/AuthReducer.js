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
} from '../actions/types';

const INITIAL_STATE = {
	username: '',
	password: '',
	token: '',
	sessId: null,
	error: '',
	loading: false,
	tokenRec: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USERNAME_CHANGED:
			return { ...state, username: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case TOKEN_CHANGED:
			return { ...state, token: action.payload };

		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, sessId: action.payload };
		case LOGIN_USER_FAIL:
			return {
				...state,
				error: 'Authentikasi Gagal.',
				password: '',
				loading: false
			};
		case LOGOUT_USER:
			return { ...state, loading: true, error: '' };
		case LOGOUT_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE };

		case GANTI_PASSWORD:
			return { ...state, loading: true, error: '' };
		case GANTI_PASSWORD_SUCCESS:
			return { ...state, loading: false, tokenRec: true };
		case GANTI_PASSWORD_FAIL:
			return {
				...state,
				error: 'Permintaan Token Gagal.',
				password: '',
				loading: false
			};
		case TOKEN_SUBMIT:
			return { ...state, loading: true, error: '' };
		case TOKEN_SUBMIT_SUCCESS:
			return {
				...state,
				password: '',
				token: '',
				sessId: null,
				error: '',
				loading: false,
				tokenRec: false,
			};
		case TOKEN_SUBMIT_FAIL:
			return {
				...state,
				error: 'Submit Token Gagal.',
				token: '',
				loading: false
			};

		case CANCEL_REPLACE:
			return {
				...state,
				password: '',
				token: '',
				sessId: null,
				error: '',
				loading: false,
				tokenRec: false,
			};

		default:
			return state;
	}
};
