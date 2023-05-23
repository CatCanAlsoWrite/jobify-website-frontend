// import Wrapper from '../assets/wrappers/SmallSidebar'

// const SmallSidebar = () => {
//   return (
//     <Wrapper>
//       <h4>SmallSidebar</h4>
//     </Wrapper>
//   )
// }

// export default SmallSidebar

/*add sidebar CSS */
// import Wrapper from '../assets/wrappers/SmallSidebar'
// import { FaTimes } from 'react-icons/fa'
// import Logo from './Logo'

// const SmallSidebar = () => {
//   return (
// <Wrapper>
//       {/* <h4>SmallSidebar</h4> */}
//       <div className='sidebar-container show-sidebar'>
//         <div className='content'>
//           <button
//             type='button'
//             className='close-btn'
//             onClick={() => console.log('toggle sidebar')}
//           >
//             <FaTimes />
//           </button>
//           <header>
//             <Logo />
//           </header>
//           <div className='nav-links'>nav links</div>
//         </div>
//         sidebar
//       </div>
//     </Wrapper>
//   )
// }

// export default SmallSidebar

/*add conditions to toggle sidebar */
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      {/* <div className='sidebar-container show-sidebar'> */}
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          {/* <button
            type='button'
            className='close-btn'
            onClick={() => console.log('toggle sidebar')}
          > */}
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          {/* <div className='nav-links'>nav links</div> */}
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
