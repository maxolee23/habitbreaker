import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getHabitsActionCreator, clickCreateActionCreator} from '../actions/actions';
import {useNavigate} from 'react-router-dom';
import HabitCard from './HabitCard';

const Dashboard = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const habitState = useSelector(state => state.habitReducer);
    // console.log(habitState)

    const handleCreateBtn = () => {
        dispatch(clickCreateActionCreator());
        navigate('/create')

    }
    
    useEffect(() => {
        dispatch(getHabitsActionCreator())
    }, [habitState.habitsLoaded])
    return (
        <div className="text-center pt-3">
            <h1 className="text-4xl font-extralight">Dashboard</h1>
            <button onClick={handleCreateBtn} className="inline-flex items-center my-5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">+ Create New</button>
            <div className="flex flex-col justify-center w-full">
                {
                    habitState.habitsLoaded === false && <h1>Loading...</h1>
                }



            {
                habitState.habitsLoaded === true && habitState.habits.length === 0 && <h1>No habits yet</h1>
            }
            {
                habitState.habitsLoaded === true && habitState.habits.map((habit) => {
                    return(
                        <HabitCard habit={habit} key={habit._id}/>
                    )
                })
            }
            </div>
        </div>
    )
}


export default Dashboard;