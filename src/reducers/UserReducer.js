const initialUserState = {
    user: {},
    logged_in: false,
    laoding: false,
}

const UserReducer = (state = initialUserState, action) => {

    switch(action.type){
        case "LOGGING_IN":
            return{...state, loading: true}
        case "LOGIN":
            return {...state, logged_in: true,  laoding: false};
        case "LOGOUT":

            return {...state, logged_in:false}
        default:
            return state;
    }
}

export default UserReducer;