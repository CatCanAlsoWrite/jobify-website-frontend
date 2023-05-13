// const SharedLayout = () => {
//     return <h1>SharedLayout</h1>
//   }

// export default SharedLayout

/*use '<Link></Link>' to jump into another page through 'App.js' */
// import { Outlet, Link } from 'react-router-dom'
// import Wrapper from '../../assets/wrappers/SharedLayout'
// const SharedLayout = () => {
//   return (
//     <Wrapper>
//       <nav>
//         <Link to='add-job'>AddJob</Link>
//         <Link to='all-jobs'>AllJobs</Link>
//       </nav>
//       <Outlet />
//     </Wrapper>
//   )
// }

// export default SharedLayout

/*slice and add more components to build the page ('<BigSidebar/>''<SmallSidebar/>'won't execute together, for the conditions are set in css in 'Wrapper': '@media (min-width: 992px){...}' vs '@media (min-width: 992px) { display: none; }...') */
import { Outlet, Link } from 'react-router-dom'
import { Navbar, BigSidebar, SmallSidebar } from '../../components'

import Wrapper from '../../assets/wrappers/SharedLayout'
const SharedLayout = () => {
  return (
    <Wrapper>
      {/* <nav>
        <Link to='add-job'>AddJob</Link>
        <Link to='all-jobs'>AllJobs</Link>
      </nav> */}
      <main className='dashboard'>
        <BigSidebar />
        <SmallSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout
