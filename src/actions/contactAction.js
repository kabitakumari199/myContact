import api from "./api";
import axios from 'axios';

//calls the fetchContact API
export function fetchContact() {
    return (dispatch) => {
        axios.post(api+'/user/fetchContact')
        .then(response => {
            console.log('response data',response.data);
            dispatch({ type: 'FETCH_CONTACTS', contacts:response.data});
          })
        .catch(function (error) {
            alert('Network Issue');
        })
    }

}

export function deleteContact(id){
    return (dispatch) => {
        dispatch({type:"DELETE_CONTACT",id:id});
     }
}

