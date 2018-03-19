import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Container = ({ children }) => (
  <div>
    <Header/>
    <section className="container">{children}</section>
    <Footer/>
  </div>
)

export default Container
