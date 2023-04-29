import { useState } from 'react'
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
  const [values, setValues] = useState(initialValues)

  // const state = useAppContext()
  // console.log(state)
  const { showAlert, isLoading, displayAlert } = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target)
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }
  const onChange = (e) => {
    // console.log(e.target.name)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <Wrapper classname='full-page'>
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
        <button type='submit' className='btn btn-block'>
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
