import Wrapper from '../assets/wrappers/LandingPage'
import { useEffect } from 'react'

const Dashboard = () => {
  /*(1)use 'cors' to link backend and frontend data */
  /*'import cors from 'cors'' and set 'app.use(cors())' in backend 'server.js'*/
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/')
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  /*(2)use 'proxy' to link backend and frontend data*/
  /*set '"proxy":"http://localhost:5000"' in frontend 'package.json' to tell the development server to proxy any unknown requests to your API server in development, then run 'npm start' to restart the frontend and backend*/
  const fetchData = async () => {
    try {
      // const response = await fetch('/') //SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
      const response = await fetch('/api') //msg: 'API'
      // const response = await fetch('/api/anything') //SyntaxError: Unexpected token 'p', "page does not exist" is not valid JSON

      // const response = await fetch('/data.json') //???

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Wrapper>
      <h1>Dashboard</h1>
    </Wrapper>
  )
}

export default Dashboard
