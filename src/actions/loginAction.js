import api from "./api";
import { history } from '../_helpers/history';

//calls the login API
export function login(username, password) {

    return (dispatch) => {

        fetch(
            api+'/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        )
            .then(response => response.json())
            .then(responseData => {
                  
                  if (responseData.error) {
                    const {error} = responseData;
                    dispatch({ type: 'LOGIN_FAILURE', error });
                
                } else {
                    const { token,userinfo } = responseData;
                    localStorage.setItem("user-token", token);
                    dispatch({ type: 'LOGIN_USER', userinfo});
                    dispatch({ type: 'LOGIN_SUCCESS', userinfo });
                    history.push('/mycontacts');
                    window.location.reload();
                }
            })
            .catch(err => {
                alert('Network Issue');
            });
    }

}

export function logout() {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_USER',loggedIn:false});
    }

}

