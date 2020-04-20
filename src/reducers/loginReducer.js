

const initialState = {
    currentUser: {},
    message:'',
    error:'',
    loggedIn:false
}
if (localStorage.getItem('user-token')) {
    initialState.loggedIn = true;
}

const loginReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'LOGIN_USER':{
            return {
                  ...state, currentUser: action.userinfo,loggedIn:true
            }
        }
        case 'LOGIN_SUCCESS':{
            return {
                  ...state, message: action.userinfo,loggedIn:true
            }
        }
        case 'LOGIN_FAILURE':{
            return {
                  ...state, error: action.error,loggedIn:false
            }
        }
        case 'LOGOUT_USER':{
        return {
            ...state, loggedIn:false 
         }
        }
        default:
        return state;

    }
}
export default loginReducer;