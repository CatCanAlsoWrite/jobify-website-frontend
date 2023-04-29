{
  /* <label htmlFor='name' className='form-label'>
  name
</label>
<input
  type='text'
  value={values.name}
  name='name'
  onChange={onChange}
  className='form-input'
/> */
}

const FormRow = ({ name, type, value, onChange, labelText }) => {
  return (
    <>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className='form-input'
      />
    </>
  )
}
export default FormRow
