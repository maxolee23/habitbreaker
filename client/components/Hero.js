import React from 'react';
import Register from './Register';
import {useSelector} from 'react-redux';
import Login from './Login';

const Hero = () => {
    const showSignup = useSelector(state => state.authReducer.showSignup);
    // return (
    //     <div className="flex content-center pt-10">
    //         <h1 className="text-5xl w-3/4 font-sans px-5 text-gray-500 font-light">Have a bad habit you want to break? Start dialing back on  bad habits today with HabitBreaker.io! </h1>
    //         <Register />
    //     </div>
    // )

    return showSignup === true ? (
        <div className="flex content-center pt-10">
             <h1 className="text-5xl w-3/4 font-sans px-5 text-gray-500 font-light">Have a bad habit you want to break? Start dialing back on  bad habits today with HabitBreaker.io! </h1>
            <Register />
         </div>
    ) : (
        <div className="flex content-center pt-10">
             <h1 className="text-5xl w-3/4 font-sans px-5 text-gray-500 font-light">Welcome back! Log in to see how you’re doing 
on those habits you’re trying to break! </h1>
            <Login />
         </div>
    )
}

export default Hero;