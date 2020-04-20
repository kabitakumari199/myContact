

const initialState = {
    registering: false,
    error:''
}

const registerReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'USERS_REGISTER':{
            return {...state, registering: true };
        }
        case 'REGISTER_FAILURE':{
            return {...state, error:action.error, registering: false };
        }
        default:
        return state;

    }
}


export default registerReducer;