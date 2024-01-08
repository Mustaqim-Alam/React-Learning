import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <Header />
        <Outlet /> //You can change thing where its used and beside things are same
        <Footer />
    </>
  )
}

export default Root