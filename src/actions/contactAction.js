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


export function fetchTotal() {
    return (dispatch) => {
        axios.post(api+'/user/fetchCount')
        .then(response => {
            console.log('response data',response.data);
            dispatch({ type: 'FETCH_COUNT', totalCount:response.data});
          })
        .catch(function (error) {
            alert('Network Issue');
        })
    }

}

export function filterContact(filter) {
    return (dispatch) => {
        const filterData = filter;
        axios.post(api+'/user/fetchContact',filterData)
        .then(response => {
            console.log('filter data',response.data);
            dispatch({ type: 'FILTER_COUNT', filter:response.data});
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

