

const initialState = {
    contacts:[]
}

const fetchContactReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_CONTACTS':{
            return {
                ...state, contacts:action.contacts };
        }
        case 'DELETE_CONTACT':{
          var data = state.contacts;
          data.map(function(user,index){
                if(action.id === user.id){
                    data.splice(index,1);
                }
             });
            return {
                ...state,
                 contacts:data
            }
        }
        default:
        return state;

    }
}


export default fetchContactReducer;