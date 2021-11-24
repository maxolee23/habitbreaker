// import {CHECK_LOGGED_IN, LOGIN, REGISTER} from '../constants/actionTypes';
import * as types from '../constants/actionTypes';

const URL = 'http://localhost:8080'

export const setFirstNameActionCreator = (input) => ({
    type: types.SET_FIRST_NAME,
    payload: input
})

export const setLastNameActionCreator = (input) => ({
    type: types.SET_LAST_NAME,
    payload: input
})

export const setEmailActionCreator = (input) => ({
    type: types.SET_EMAIL,
    payload: input
})

export const setPasswordActionCreator = (input) => ({
    type: types.SET_PASSWORD,
    payload: input
})

export const setConfirmActionCreator = (input) => ({
    type: types.SET_CONFIRM,
    payload: input
})

export const setRegisterSubmitActionCreator = (user) => {
    return (dispatch) => {
        fetch('/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                confirm: user.confirm
            })
        }).then(response => {
            console.log(response);
            dispatch({type: types.REGISTER_SUBMIT, payload: response})
        }).catch(err => {
            console.log(error)
        })
    }
}

export const toggleSignupActionCreator = () => ({
    type: types.TOGGLE_SIGNUP
})

export const loginSubmitActionCreator = (user) => {
    return (dispatch) => {
        fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            })
        }).then(response => {
            console.log(response);
            dispatch({type: types.LOGIN_SUBMIT, payload: response})
        }).catch(err => {
            console.log(err)
        })
    }
}

export const loginCheckActionCreator = () => {
    return (dispatch) => {
        fetch('/api/auth/loggedin')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            dispatch({type: types.LOGIN_CHECK, payload: data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const logoutActionCreator = () => {
    return (dispatch) => {
        fetch('/api/auth/logout')
        .then(dispatch({type: types.LOGOUT}))
        .catch(err => {
            console.log(err)
        })
    }
}



//habits

export const getHabitsActionCreator = () => {
    return (dispatch) => {
        fetch('/api/habits')
        .then(response => response.json())
        .then(data => {
            dispatch({type: types.GET_HABITS, payload: data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const clickCreateActionCreator = () => ({
    type: types.CLICK_CREATE
})

export const clickNextActionCreator = () => ({
    type: types.CLICK_NEXT
})

export const enterTitleActionCreator = (title) => ({
    type: types.ENTER_TITLE,
    payload: title
})

export const enterReasonActionCreator = (reason) => ({
    type: types.ENTER_REASON,
    payload: reason
})

export const submitHabitActionCreator = (habit) => {
    return (dispatch) => {
        fetch('/api/habits/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: habit.title,
                reason: habit.reason
            })
        }).then(response => {
            console.log(response)
            dispatch({type: types.SUBMIT_HABIT, payload: response})
        }).catch(err => console.log(err))
    }
};

export const startOverActionCreator = (id) => {
    // console.log(habit._id);
    // console.log(id)
    return (dispatch) => {
        fetch(`/api/habits/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startDate: new Date()
            })
        }).then(response => {
            console.log(response)
            dispatch({type: types.START_OVER, payload: response})
        })
    }
} 

export const deleteHabitActionCreator = (id) => {
    return(dispatch) => {
        fetch(`/api/habits/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
              }
        }).then(response => dispatch({type: types.DELETE_HABIT, payload: response}))
        .catch(err => console.log(err))
    }
}






