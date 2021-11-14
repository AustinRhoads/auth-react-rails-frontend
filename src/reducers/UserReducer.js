const initialUserState = {
    user: {},
    logged_in: false,
}

const UserReducer = (state = initialUserState, action) => {

    switch(action.type){
        case "LOGIN":

            return {...state, logged_in: true};
        case "LOGOUT":

            return {...state, logged_in:false}
        default:
            return state;
    }
}

export default UserReducer;