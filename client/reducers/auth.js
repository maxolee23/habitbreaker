// import {CHECK_LOGGED_IN} from '../constants/actionTypes';
import * as types from '../constants/actionTypes';

const defaultState = {
    showSignup: true,
    loggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: ''
}

const authReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.SET_FIRST_NAME :
            const updatedFirstName = {
                ...state,
                firstName: action.payload
            };

            return updatedFirstName;

        case types.SET_LAST_NAME :
            const updatedLastName = {
                ...state,
                lastName: action.payload
            };

            return updatedLastName;

        case types.SET_EMAIL : 
            const updatedEmail = {
                ...state,
                email: action.payload
            };

            return updatedEmail;
        
        case types.SET_PASSWORD :
            const updatedPassword = {
                ...state,
                password: action.payload
            };
            return updatedPassword;

        case types.SET_CONFIRM : 
            const updatedConfirm = {
                ...state, 
                confirm: action.payload
            };
            return updatedConfirm;

        case types.REGISTER_SUBMIT : 
            const user = {
                ...state,
                loggedIn: true
            };
            return user;
        
        case types.TOGGLE_SIGNUP :
            const toggled = {
                ...state,
                showSignup: !state.showSignup
            };
            return toggled;

        case types.LOGIN_SUBMIT : 
            const login = {
                ...state,
                loggedIn: true
            };
            return login;
        
        case types.LOGIN_CHECK : 
            const loggedIn = {
                ...state, 
                loggedIn: action.payload
            };

            // console.log(loggedIn)
            return loggedIn;

        case types.LOGOUT :
            const logOut = {
                ...state,
                loggedIn: false
            };
            return logOut;

           default: 
           return state;

    }
}




export default authReducer;