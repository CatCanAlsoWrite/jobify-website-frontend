import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby lomo edison bulb flannel man bun marfa kale chips venmo
            thundercats knausgaard mustache migas. 8-bit neutral milk hotel
            gatekeep cloud bread, quinoa photo booth street art hot chicken ugh
            whatever typewriter. Keffiyeh gastropub 8-bit street art health goth
            polaroid cronut solarpunk kogi microdosing before they sold out.
            Quinoa actually glossier portland, health goth mustache solarpunk
            cornhole pitchfork.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='main' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
