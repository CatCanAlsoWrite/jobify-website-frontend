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
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
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
  createdBy: '',
  company: '',
  position: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['pending', 'interview', 'declined'],
  stauts: 'pending',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)

  /*02.use 'axios.defaults.config[name]=value' to avoid coding every time(see 1. in this file) */
  // axios.defaults.headers['Authorization'] = `Bearer ${state.token}`

  /*03.use 'axios.create()' to add more default settings*/
  // const authFetch = axios.create({
  //   baseURL: '/api',
  //   headers: { Authorization: `Bearer ${state.token}` },
  // })

  /*04.use 'interceptors' as middleware to add more default functions and error handlings*/
  const authFetch = axios.create({
    baseURL: '/api',
  })

  //request settings
  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}` //without this line of code in request settings, will lead to an 'auth error' in response settings
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  //response settings
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log(error.response)
      if (error.response.status === 401) {
        // console.log('auth error')
        logoutUser()
      }
      return Promise.reject(error)
    }
  )

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
    }
    clearAlert()
  }

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    // removeUserFromLocalStorage({ user, token, userLocation })
    removeUserFromLocalStorage()
  }

  // const updateUser = async (currentUser) => {
  //   // console.log(currentUser)

  // try {
  //   /*1.use 'axios' to read data, and set Authorization option/config to 'axios' */
  //   // const { data } = await axios.patch('api/auth/updateUser', currentUser, {
  //   //   headers: { Authorization: `Bearer ${state.token}` },
  //   // })

  //   /*2.take the config part out, use 'axios.defaults.config[name]=value'(see 02. in this file) to avoid coding every time*/
  //   // const { data } = await axios.patch('api/auth/updateUser', currentUser)

  //   /*3.use 'axios.create()' to add more default settings(see 03. in this file) */
  //   const { data } = await authFetch.patch('/auth/updateUser', currentUser)

  //   console.log(data)
  // } catch (error) {
  //   // console.log(error.response)
  //   /*4.use 'interceptors' as middleware to add more default functions and error handlings(see 04. in this file) */
  // }
  // }

  /*add actions */
  const updateUser = async (currentUser, alertText) => {
    try {
      dispatch({ type: SETUP_USER_BEGIN })

      const { data } = await authFetch.patch('/auth/updateUser', currentUser)
      // const { user, token, location } = data
      const { user, location } = data //`token won't change, so no need to update token`

      alertText = 'User Profile Updated!' //`update alertText`
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      })
      // addUserToLocalStorage({ user, token, location })
      addUserToLocalStorage({ user, token: initialState.token, location }) //`just use initial token`
    } catch (error) {
      alertText = error.response.data.msg
      // dispatch({
      //   type: SETUP_USER_ERROR,
      //   payload: { msg: alertText },
      // })
      if (error.response.status !== 401) {
        dispatch({
          type: SETUP_USER_ERROR,
          payload: { msg: alertText },
        })
      } //`add auth error condition`
    }
    clearAlert()
  }

  const createJob = async ({
    company,
    position,
    jobLocation,
    jobType,
    status,
    createdBy,
  }) => {
    try {
      dispatch({ type: CREATE_JOB_BEGIN })
    } catch (error) {}
  }

  return (
    <AppContext.Provider
      // value={{ ...state, displayAlert, registerUser, loginUser }}
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { initialState, AppProvider, useAppContext }
