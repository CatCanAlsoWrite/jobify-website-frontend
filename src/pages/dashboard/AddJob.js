// const AddJob = () => {
//   return <h1>AddJob</h1>
// }

// export default AddJob

import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { FormRow, Alert } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const { user, isLoading, showAlert, createJob } = useAppContext()

  const [company, setCompany] = useState(company)
  const [position, setPosition] = useState(position)

  const onSubmit = (e) => {
    e.preventDefault()
    createJob({ company, position, jobLocation, jobType, status, createdBy })
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <h3>AddJob</h3>
        {showAlert && <Alert />}

        <div className='form-center'>
          <FormRow
            type='text'
            name='company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className='form-input'
          />
          <FormRow
            type='text'
            name='position'
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className='form-input'
          />
          <FormRow
            type='text'
            name='jobLocation'
            value={jobLocation}
            className='form-input'
          />
          <FormRow
            type='select'
            labelText='job type'
            value={jobType}
            className='form-options'
          />
          <FormRow
            type='select'
            name='status'
            value={status}
            className='form-options'
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            submit
          </button>
          <button className='btn btn-block' type='button'>
            clear
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
