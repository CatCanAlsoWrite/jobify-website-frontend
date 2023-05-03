import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Landing, Error, Register, Dashboard } from './pages'

// import styled from 'styled-components'

// const Btn = styled.button`
//   background: black;
//   color: white;
// `

// function App() {
//   return (
//     <div>
//       <Btn>Click ME</Btn>
//       <h1>jobify</h1>
//       <Landing />
//       </div>
//   )
// }

// export default App

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<div>homepage</div>} /> */}
        <Route path='/' element={<Dashboard />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
