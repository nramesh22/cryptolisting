import { userConstants } from '../_constants';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
};

function login(user) {
	//console.log('User Data:' + user);
	localStorage.setItem('user', JSON.stringify(user));
    return dispatch => {
		dispatch(success(user));
		//history.push('/');
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    return { type: userConstants.LOGOUT };
}