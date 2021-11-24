import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginSubmitActionCreator, setPasswordActionCreator, setEmailActionCreator} from '../actions/actions';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.authReducer);
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(currentUser)
        dispatch(loginSubmitActionCreator(currentUser));
        navigate('/dashboard')
    }
    
    return (
        <div className="p-8 border-2 mr-2 border rounded-md border-gray-500">
            <div>
                <h3 className="text-xl leading-6 font-medium text-gray-900 text-center">Log in</h3>
            </div>

            <form onSubmit={(e) => handleSubmit(e)} className="text-center">
                

                <div className="pt-5">
                <label>Email</label>
                <input onChange={(e) => dispatch(setEmailActionCreator(e.target.value))} className="ml-2 pl-2 border rounded-md focus:border-indigo-500-rounded-md text-sm w-10/12" />
                </div>
                <div className="pt-3">
                <label>Password</label>
                <input type="password" onChange={(e) => dispatch(setPasswordActionCreator(e.target.value))} className="ml-2 pl-2 border rounded-md focus:border-indigo-500-rounded-md text-sm w-8/12"/>
                </div>
            
                <button type="submit" className="inline-flex items-center mt-5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Log in</button>
                <p className="text-xs">Don't have an account? Click on Sign up</p>
            </form>
            
            
        </div>
    )
}


export default Login;