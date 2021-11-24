import * as types from '../constants/actionTypes';

const defaultState = {
    habits: [],
    createHabitClicked: false,
    habitsLoaded: false,
    createHabitPage: null,
    newHabit: {
        title: '',
        reason: '',
    },

}

const habitReducer = (state=defaultState, action) =>{
    switch(action.type){
        case types.GET_HABITS : 
            const populateHabits = {
                ...state,
                habits: action.payload,
                habitsLoaded: true
            }
            // console.log(populateHabits);
            
            return populateHabits;

        case types.CLICK_CREATE : 
            const clicked = {
                ...state,
                createHabitClicked: true,
                createHabitPage: 1
            };

            return clicked;

        case types.CLICK_NEXT : 
            const next = {
                ...state,
                createHabitClicked: true,
                createHabitPage: state.createHabitPage + 1
            };

            return next;

        case types.ENTER_TITLE : 
            const updatedTitle = {
                ...state,
                newHabit: {
                    ...state.newHabit,
                    title: action.payload
                }
            };

            return updatedTitle;

        case types.ENTER_REASON : 

            // // if (action.payload === ''){
            // //     const uReason = {
            // //         ...state,
            // //         newHabit: {
            // //             ...state.newHabit,
            // //             reason: 'None specified'
            // //         }
            // //     };
            //     return uReason;
            // }
            const updatedReason = {
                ...state,
                newHabit: {
                    ...state.newHabit,
                    reason: action.payload
                }
            };
            return updatedReason;

        case types.SUBMIT_HABIT : 
            const newState = {
                ...state,
                createHabitClicked: false,
                createHabitPage: null,
                habitsLoaded: false,
                newHabit: {
                    title: '',
                    reason: ''
                }
            };

            return newState;

        case types.START_OVER : 
            const updated = {
            ...state,
            habitsLoaded: false
            }
            return updated;

        case types.DELETE_HABIT : 
            const deleted = {
                ...state,
                habitsLoaded: false
            };
            return deleted;

        default: 
            return state;
    }
};



export default habitReducer;