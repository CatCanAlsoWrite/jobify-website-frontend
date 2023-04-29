import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='img-not-found' />
        <h3>Oops! Page not found!</h3>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}
export default Error
