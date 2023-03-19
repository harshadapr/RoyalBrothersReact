import { applyMiddleware, combineReducers, createStore } from "redux";
import initialReducer from "./initialReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Login_Singup_Reducer from "./Login_Signup_Reducer";
import searchReducer from "./search/searchReducer"
import themeReducer from "./themeMode/themeReducer";

//Do not change anything and use combine reducer to combine and provide your reducer to the app.

const rootReducer = combineReducers({
    initialReducer,
    LoginSignupRed: Login_Singup_Reducer,
    searchReducer,
    themeReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger))