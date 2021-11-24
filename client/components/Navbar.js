import React from 'react';
import NavBtn from './NavBtn';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import {logoutActionCreator} from '../actions/actions'

const Navbar = () => {

    // let navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.authReducer.loggedIn);
    // console.log(isLoggedIn)

    return (
        <div className="flex justify-between border-b border-gray-400 pb-2">
            <h1 className="text-lg pl-3 font-light">Habitbreaker.io</h1>
            {/* if not logged in */}
            {
            isLoggedIn === true && 
            <ul>
                <Link className="px-3 text-indigo-400" to="/dashboard">Dashboard</Link>
                <Link className="" to="/about">About</Link>
            </ul>
            }
            <NavBtn />
        </div>
    )
}


export default Navbar;