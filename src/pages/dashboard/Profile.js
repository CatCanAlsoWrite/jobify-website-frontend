// const Profile = () => {
//   return <h1>Profile</h1>
// }
// export default Profile

import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { FormRow, Alert } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const Profile = () => {
  const { user, isLoading, showAlert, displayAlert, updateUser } =
    useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState(user?.location)

  const onSubmit = (e) => {
    e.preventDefault()
    // if (!name || !email || !lastName || !location) {
    //   displayAlert()
    //   return
    // } //`just used for test, or the catch error will not be printed in 'updateUser()'`

    updateUser({ name, email, lastName, location })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <h3>Profile</h3>
        {showAlert && <Alert />}

        <div className='form-center'>
          <FormRow
            name='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormRow>
          <FormRow
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormRow>
          <FormRow
            name='lastName'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></FormRow>
          <FormRow
            name='location'
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></FormRow>

          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Profile
