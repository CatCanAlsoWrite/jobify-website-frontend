// import Wrapper from '../assets/wrappers/Navbar'
// import { FaHome } from 'react-icons/fa' //add icon from 'react-icons'

// const Navbar = () => {
//   return (
//     <Wrapper>
//       <FaHome />
//       <h4>Navbar</h4>
//     </Wrapper>
//   )
// }

// export default Navbar

/*add more features */
// import Wrapper from '../assets/wrappers/Navbar'
// import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
// import Logo from './Logo'

// const Navbar = () => {
//   return (
//     <Wrapper>
//       <div className='nav-center'>
//         <button
//           type='button'
//           className='toggle-btn'
//           onClick={() => console.log('toggle sidebar')}
//         >
//           <FaAlignLeft />
//         </button>

//         <div>
//           <Logo />
//           <h3 className='logo-text'>dashboard</h3>
//         </div>
//         <div className='btn-container'>
//           <button
//             type='button'
//             className='btn'
//             onClick={() => console.log('show/hide dropdown')}
//           >
//             <FaUserCircle />
//             Lee
//             <FaCaretDown />
//             <div className='dropdown show-dropdown'>
//               <button
//                 type='button'
//                 className='dropdown-btn'
//                 onClick={() => console.log('logout user')}
//               >
//                 logout
//               </button>
//             </div>
//           </button>
//         </div>
//       </div>
//     </Wrapper>
//   )
// }

// export default Navbar

/*add actions to features using 'useContext' */
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'

const Navbar = () => {
  const { user, toggleSidebar, logoutUser } = useAppContext() //`remember to grab data from 'useAppContext()' inside the 'Navbar' component, instead of from 'useAppContext' nor outside of the 'Navbar' component, otherwise 'toggleSidebar' and 'logoutUser' will not make sense to 'Navbar' component`
  const [showLogout, setShowLogout] = useState(false)
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          // onClick={() => console.log('toggle sidebar')}
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            // onClick={() => console.log('show/hide dropdown')}
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {/* Lee */}
            {user?.name} {/*or {user && user.name} */}
            <FaCaretDown />
            {/* <div className='dropdown show-dropdown'> */}
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              // onClick={() => console.log('logout user')}
              onClick={logoutUser}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
