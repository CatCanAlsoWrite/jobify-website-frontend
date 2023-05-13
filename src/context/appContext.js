import React, { useState, useContext, useReducer } from 'react'
import reducer from './reducer'
import axios from 'axios'

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  // REGISTER_USER_BEGIN,
  // REGISTER_USER_SUCCESS,
  // REGISTER_USER_ERROR,
  // LOGIN_USER_BEGIN,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
} from './action'

/*basic setting of initialState */
// const initialState = {
//   isLoading: false,
//   showAlert: false,
//   alertText: '',
//   alertType: '',
//   user: null,
//   token: null,
//   userLocation: '',
//   jobLocation: '',
// }

/*add 'localStorage' into initialState*/
//getItem(key) – get the value by key
const user = localStorage.getItem('user')
const token = localStorage.getItem('token')
const userLocation = localStorage.getItem('location')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
  showSidebar: false,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  //setItem(key, value) – store key/value pair
  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  } //`both key and value must be strings, or can use JSON to store objects`

  //removeItem(key) – remove the key with its value, instead of clear() – delete everything
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }

  /*read data from 'currentUser' in children file 'Register.js'*/
  // const registerUser = async (currentUser) => {
  //   // console.log(currentUser)
  //   dispatch({ type: REGISTER_USER_BEGIN })
  //   try {
  //     const response = await axios.post('/api/auth/register', currentUser) //`post data 'currentUser' into '/api/auth/register'`
  //     // console.log(response)
  //     const { user, token, location } = response.data //`grab data from 'POST'`
  //     dispatch({
  //       type: REGISTER_USER_SUCCESS,
  //       payload: { user, token, location },
  //     }) //`choose what to show in dispatch`
  //     addUserToLocalStorage({ user, token, location }) //`save key/value pairs in the browser, remember to use '{}' when parsing parameters, or the 'localStorage' in 'storage' in 'Application' in front end will be 'undefined', which could lead to an error`
  //   } catch (error) {
  //     // console.log(error.response)
  //     dispatch({
  //       type: REGISTER_USER_ERROR,
  //       payload: { msg: error.response.data.msg },
  //     })
  //     clearAlert()
  //   }
  // }

  // const loginUser = async (currentUser) => {
  //   // console.log(currentUser)

  //   dispatch({ type: LOGIN_USER_BEGIN })
  //   try {
  //     const { data } = await axios.post('/api/auth/login', currentUser) //`grab 'data' part of all the data`
  //     const { user, token, location } = data
  //     dispatch({
  //       type: LOGIN_USER_SUCCESS,
  //       payload: { user, token, location },
  //     })
  //     addUserToLocalStorage({ user, token, location })
  //   } catch (error) {
  //     dispatch({
  //       type: LOGIN_USER_ERROR,
  //       payload: { msg: error.response.data.msg },
  //     })
  //     clearAlert()
  //   }
  // }

  /*use variables to short code */
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    // console.log(currentUser)

    dispatch({ type: SETUP_USER_BEGIN })
    try {
      const { data } = await axios.post(`/api/auth/${endPoint}`, currentUser)
      const { user, token, location } = data
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
      clearAlert()
    }
  }

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    // removeUserFromLocalStorage({ user, token, userLocation })
    removeUserFromLocalStorage()
  }

  return (
    <AppContext.Provider
      // value={{ ...state, displayAlert, registerUser, loginUser }}
      value={{ ...state, displayAlert, setupUser, toggleSidebar, logoutUser }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { initialState, AppProvider, useAppContext }
