import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clickNextActionCreator, enterTitleActionCreator, enterReasonActionCreator, submitHabitActionCreator} from '../actions/actions';
import {useNavigate} from 'react-router-dom';

const CreateHabit = () => {
    let navigate = useNavigate();
    const habitState = useSelector(state => state.habitReducer);
    const dispatch = useDispatch();

    const nextHandler = () => {
        dispatch(clickNextActionCreator());
        // useNavigate(`/create/page${habitState.createHabitPage + 1}`)
    }  

    const inputHandlerTitle = (e) => {
        dispatch(enterTitleActionCreator(e.target.value))
    }

    const inputHandlerReason = (e) => {
        dispatch(enterReasonActionCreator(e.target.value))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(submitHabitActionCreator(habitState.newHabit))
        navigate('/dashboard')
    }
    return (
        <div>
        
        {
        habitState.createHabitPage === 1 && (
            <div className="text-center rounded-md border h-1/4 w-3/6 mt-5 ml-52">
                <h1 className="pt-3">What kind of habit would you like to work on breaking?</h1>
                <input className="border-gray-300 border rounded mr-5" onChange={(e) => inputHandlerTitle(e)} placeholder="ex. cigarettes"/>
                <button onClick={nextHandler} className="inline-flex items-center mt-5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
            </div>)
            }

            {
                habitState.createHabitPage === 2 && (
                    <div className="text-center rounded-md border h-1/4 w-3/6 mt-5 ml-36">
                <h1 className="pt-3">What are your reasons for quitting? optional</h1>
                <textarea className="border-gray-300 border rounded mr-5 mt-5" onChange={(e) => inputHandlerReason(e)} />
                <button onClick={submitHandler} className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </div>
                )
            }
            </div>
    )
}


export default CreateHabit;