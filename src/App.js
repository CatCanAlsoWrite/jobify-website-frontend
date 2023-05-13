/*use 'styled-components' to style */
// import { Landing } from './pages'
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

/*use 'react-router-dom' to add more pages */
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Landing, Error, Register, Dashboard } from './pages'
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path='/' element={<div>homepage</div>} /> */}
//         <Route path='/' element={<Dashboard />} />
//         <Route path='/landing' element={<Landing />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='*' element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

/*use '<Route></Route>' pair to add even more pages, add '<SharedLayout />' element to '<Route>' to set up shared component to all pages, add '<ProtectedRoute></ProtectedRoute>' pair to '<SharedLayout />' to set condition for jumping to another page in 'path'; use 'index' to set the default page in 'path' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, ProtectedRoute } from './pages'
import {
  AddJob,
  AllJobs,
  Status,
  SharedLayout,
  Profile,
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      {/* <Route path='/' element={<Dashboard />} /> */}
      <Routes>
        {/* <Route path='/' element={<SharedLayout />}> */}
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          {/* <Route path='status' element={<Status />} /> */}
          <Route index element={<Status />} />

          <Route path='add-job' element={<AddJob />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
