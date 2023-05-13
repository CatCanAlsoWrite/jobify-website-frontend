import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo, FormRow, Alert } from '../components'
import { useAppContext } from '../context/appContext'

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  // showAlert: false,
}

const Register = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState(initialValues)

  // const state = useAppContext()
  // console.log(state)
  // const { user, showAlert, isLoading, displayAlert, registerUser, loginUser } = useAppContext()
  const { user, showAlert, isLoading, displayAlert, setupUser } =
    useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const onChange = (e) => {
    // console.log(e.target.name)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target)
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }

    // console.log(values)
    /*choose several values to print */
    const currentUser = { name, email, password } //`add data into 'currentUser'`

    // if (isMember) {
    //   // console.log(currentUser)
    //   loginUser(currentUser)
    // } else {
    //   registerUser(currentUser)
    // } //`then can read data 'currentUser' in parent file 'appContext.js'`

    /*use variables to short code */
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login successful! Redirecting...',
      }) //`remember to add '{}'`
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User created! Redirecting...',
      })
    } //`th
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {/* {values.showAlert && <Alert />} */}
        {showAlert && <Alert />}

        {/* name input */}
        {!values.isMember && (
          <FormRow
            name='name'
            type='text'
            value={values.name}
            onChange={onChange}
          />
        )}
        {/* email input */}
        <FormRow
          name='email'
          type='email'
          value={values.email}
          onChange={onChange}
        />
        {/* password input */}
        <FormRow
          name='password'
          type='password'
          value={values.password}
          onChange={onChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
