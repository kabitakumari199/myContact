import api from "./api";
import { history } from '../_helpers/history';

//calls the login API
export function addContact(user) {
    console.log('user',user);
    
    return (dispatch) => {
        fetch(
            api+'/user/addContact',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(user)
            }
        )
            .then(response => response.json())
            .then(responseData => {
                 console.log("response",responseData);
                 if (responseData.error) {
                    // const {error} = responseData;
                    // dispatch({ type: 'REGISTER_FAILURE', error });
                } else {
                    // dispatch({ type: 'USERS_REGISTER', responseData });
                    // history.push('/');
                    // window.location.reload();

                }
            })
            .catch(err => {
                alert('Network Issue');
            });
    }

}



