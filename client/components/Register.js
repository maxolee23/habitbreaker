import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {setFirstNameActionCreator, setLastNameActionCreator, setEmailActionCreator, setPasswordActionCreator, setConfirmActionCreator, setRegisterSubmitActionCreator, toggleSignupActionCreator} from '../actions/actions';
import {useNavigate, Link} from 'react-router-dom'


const Register = () => {
    const currentUser = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    // console.log(currentUser)
    // const {firstName, lastName, email, password, confirm } = currentUser;
    // console.log(firstName, lastName, email, password, confirm)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(currentUser)
        dispatch(setRegisterSubmitActionCreator(currentUser));
        navigate('/dashboard')
    }
    return (
        <div className="p-8 border-2 mr-2 border rounded-md border-gray-500">
            <div>
                <h3 className="text-xl leading-6 font-medium text-gray-900 text-center">Sign up</h3>
            </div>

            <form onSubmit={(e) => handleSubmit(e)} className="text-center">
                <div className="flex pt-2">
                <div>
                <label>First Name</label>
                <input onChange={(e) => dispatch(setFirstNameActionCreator(e.target.value))} className="pl-2 border rounded-md focus:border-indigo-500-rounded-md text-sm w-7/12" placeholder="Ex. John" />
                </div>
                <div>
                <label>Last Name</label>
                <input onChange={(e) => dispatch(setLastNameActionCreator(e.target.value))} className="pl-2 border rounded-md focus:border-indigo-500-rounded-md text-sm w-7/12" placeholder="Ex. Doe" />
                </div>
                </div>

                <div className="pt-5">
                <label>Email</label>
                <input onChange={(e) => dispatch(setEmailActionCreator(e.target.value))} className="ml-2 pl-2 border rounded-md focus:border-indigo-500-rounded-md text-sm w-10/12" placeholder="john@gmail.com" />
                </div>
                <div className="pt-3">
                <label>Password</label>
                <input type="password" onChange={(e) => dispatch(setPasswordActionCreator(e.target.value))} className="ml-2 pl-2 border rounded-md focus:border-indigo-500-rounded-md text-sm w-8/12"/>
                </div>
                <div className="pt-3">
                <label>Confirm Password</label>
                <input type="password" onChange={(e) => dispatch(setConfirmActionCreator(e.target.value))} className="ml-2 pl-2 border rounded-md focus:border-indigo-500-rounded-md text-sm w-7/12"/>
                </div>
            
                <button type="submit" className="inline-flex items-center mt-5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Sign up</button>
                <p className="text-xs">Already have an account? Click on Log in </p>
            </form>
            
            
        </div>


    )
}


export default Register;