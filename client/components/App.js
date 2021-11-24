import React, { useEffect } from 'react';

//components
import Navbar from './Navbar';
import Hero from './Hero';
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";

// import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux' ;
import {loginCheckActionCreator} from '../actions/actions'
import Dashboard from './Dashboard';
import  About  from './About';
import CreateHabit from './CreateHabit';

function App(){

    //note: deal with routing later
    const currentUser = useSelector(state => state.authReducer);
    const habitState = useSelector(state => state.habitReducer);
    // console.log(currentUser)
    const dispatch = useDispatch();

    //do a useeffect to see if the user is signed in 
    //in useeffect dispatch an action to do the get request, to see if there is a token
    //only show certain routes if user is logged in 
    //redirect? 
    console.log(currentUser.loggedIn)
    useEffect(() => {
        dispatch(loginCheckActionCreator())
    }, [currentUser.loggedIn])




        return (
            <Router>
                <div>
                    {habitState.createHabitClicked === false && <Navbar />}
                

                <Switch>
                    {/* if not logged in, render hero component on this path */}

                    {currentUser.loggedIn === false && <Route path="/" element={<Hero/>} />}
                    
                    {/* must be logged in to see these components */}
                    {currentUser.loggedIn === true && <Route path="/dashboard" element={<Dashboard />} />}
                    {currentUser.loggedIn === true && <Route path="/about" element={<About />} />}


                    {/* if create habit is clicked we get new routes */}
                    {/* {habitState.createHabitClicked === true && <Route path={`/create/page${habitState.createHabitPage}`} element={<CreateHabit />}/>} */}
                    {habitState.createHabitClicked === true && <Route path={`/create`} element={<CreateHabit />}/>}
                        
                    
                    
                        {/* <Dashboard />
                    </Route> */}
                    

                </Switch>
                </div>
            </Router>
            
        )
    };

export default App;