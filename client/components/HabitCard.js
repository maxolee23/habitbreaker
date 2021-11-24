import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {startOverActionCreator, deleteHabitActionCreator} from '../actions/actions';
import TimeDisplay from './TimeDisplay';

const HabitCard = (props) => {

    const habitState = useSelector(state => state.habitReducer);
    const dispatch = useDispatch(); 

    const startOver = () => (
        dispatch(startOverActionCreator(props.habit._id))
        )

    const deleteHabit = () => {
        dispatch(deleteHabitActionCreator(props.habit._id))
    }


    return (
        
        <div className="mx-20 my-2 w-4/5 border rounded">
            <TimeDisplay props={props.habit.startDate} />
            <h1>Habit name: {props.habit.title}</h1>
            <p>Start Date: {new Date(props.habit.startDate).toLocaleString()}</p>
            {/* <p>Time Passed since commitment: {`${new Date().getHours() - new Date(props.habit.startDate).getHours()} hours and ${new Date().getMinutes() - new Date(props.habit.startDate).getMinutes()} minutes`}</p> */}

    <p>Reason: {props.habit.reason}</p>
            <button onClick={startOver} className="mx-3 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-indigo-500 focus:outline-none">Start Over</button>
            <button onClick={deleteHabit} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-indigo-500 focus:outline-none">Delete Habit</button>
        </div>
    )
}


export default HabitCard;