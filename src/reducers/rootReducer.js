import { combineReducers } from "redux"

import UserReducer from "./UserReducer"

const rootReducer = combineReducers({
    userStatus: UserReducer
})

export default rootReducer;
