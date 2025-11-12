import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import ApiCalling from './Components/ApiCalling'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default App