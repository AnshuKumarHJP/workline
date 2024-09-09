import React, { Children } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    <div style={{minHeight:'80dvh'}}>
      {children}
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout