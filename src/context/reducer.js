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

import { initialState } from './appContext' //`remember to import the right data 'initialState', instead of 'useAppContext'`

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'please provide all values',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }

  // if (action.type === REGISTER_USER_BEGIN) {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   }
  // }
  // if (action.type === REGISTER_USER_SUCCESS) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     user: action.payload.user,
  //     token: action.payload.token,
  //     userLocation: action.payload.location,
  //     jobLocation: action.payload.location,
  //     showAlert: true,
  //     alertType: 'success',
  //     alertText: 'User created! Redirecting...',
  //   } //`read data from 'payload'`
  // }
  // if (action.type === REGISTER_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertType: 'danger',
  //     alertText: action.payload.msg,
  //   }
  // }

  // if (action.type === LOGIN_USER_BEGIN) {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   }
  // }
  // if (action.type === LOGIN_USER_SUCCESS) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     user: action.payload.user,
  //     token: action.payload.token,
  //     userLocation: action.payload.location,
  //     jobLocation: action.payload.location,
  //     showAlert: true,
  //     alertType: 'success',
  //     alertText: 'Login successful! Redirecting...',
  //   }
  // }
  // if (action.type === LOGIN_USER_ERROR) {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     showAlert: true,
  //     alertType: 'danger',
  //     alertText: action.payload.msg,
  //   }
  // }

  /*use variables to short code */
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    } //`read data from 'payload'`
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar }
  } //`remember to add 'state.' to read data from object 'state'`

  /*'logout' needs to reset 'initialState' */
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: '',
      jobLocation: '',
    }
  }

  throw new Error(`not found action: ${action.type}`)
}
export default reducer
