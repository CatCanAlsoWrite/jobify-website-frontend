// const ProtectedRoute = () => {
//   return <h1>ProtectedRoute</h1>
// } //`'ProtectedRoute' in path '/'`

// export default ProtectedRoute

/*use 'children' parameter to make a default setting (just like no '<ProtectedRoute></ProtectedRoute>' pair)*/
// const ProtectedRoute = ({ children }) => {
//   // return <h1>ProtectedRoute</h1>
//   return children
// } //`default 'Status' page in path '/'`

// export default ProtectedRoute

/*read data from 'useAppContext()', add conditions to either jump into another page (use '<Navigate/>'), or stay at the default page */
import { useAppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext()
  if (!user) {
    // return <h1>when there is no user data</h1>
    return <Navigate to='/landing' />
  }
  return children
}

export default ProtectedRoute
