const initialState = {
    newUser: null,
    userDeleted: null,
    editCustomer: false,
    deliveryBoys:{}

}
const manageCustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_USER_CREATED': {
            return {
                ...state,
                newUser: action.status
            }
        }

        case 'DELETE_USER': {
            return {
                ...state,
                userDeleted: action.status
            }
        }

        case 'RESET_ACTION_VALUES': {
            return {
                ...state,
                newUser: null,
                userDeleted: null,
                editCustomer: false
            }
        }

        case 'UPDATE_CUSTOMER': {
            return {
                ...state,
                editCustomer: action.status
            }
        }

        case 'DELIVERY_BOYS': {
            return {
                ...state,
                deliveryBoys: action.data
            }
        }
        default:
            return state;
    }
}
export default manageCustomerReducer;
