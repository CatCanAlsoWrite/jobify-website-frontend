// import Wrapper from '../assets/wrappers/BigSidebar'

// const BigSidebar = () => {
//   return (
//     <Wrapper>
//       <h4>BigSidebar</h4>
//     </Wrapper>
//   )
// }

// export default BigSidebar

/*add more CSS and conditions */
import Wrapper from '../assets/wrappers/BigSidebar'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import NavLinks from './NavLinks'

const BigSidebar = () => {
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
