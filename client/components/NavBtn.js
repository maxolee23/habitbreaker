import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleSignupActionCreator, logoutActionCreator} from '../actions/actions';
import {useNavigate} from 'react-router-dom';

const NavBtn = () => {
    const loginToggleCheck = useSelector(state => state.authReducer.showSignup);
    const loggedIn = useSelector(state => state.authReducer.loggedIn);
    let navigate = useNavigate();
    
    const dispatch = useDispatch();
    // return (
    //     // if login
    //     {
    //         loginCheck === true ? ()
    //     }
    //     <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
    // )

    const handleLogout = () => {
        dispatch(logoutActionCreator());
        navigate('/')
    }

    return loggedIn === false ? loginToggleCheck === true ? (
        <button onClick={() => dispatch(toggleSignupActionCreator())} className="mr-3 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none">Login</button>
    ) : (
        <button onClick={() => dispatch(toggleSignupActionCreator())} className="mr-3 mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none">Sign up</button>
    ) : (
        <button onClick={handleLogout} className="mr-3 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-indigo-500 focus:outline-none">Log out</button>
    )

    // return loginToggleCheck === true   ? (
    //     <button onClick={() => dispatch(toggleSignupActionCreator())} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none">Login</button>
    // ) : (
    //     <button onClick={() => dispatch(toggleSignupActionCreator())} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none">Sign up</button>
    // )
}

export default NavBtn;
