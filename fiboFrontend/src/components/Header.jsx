import React from 'react'
import '../assets/styles/components/Header.css'
import logo from '../assets/logo/logo.svg'

const Header = ({ title }) => (
  <header className="App-header">
    {<h1>{title}</h1>}
    <img src={logo} className="App-logo" alt="logo" />
   
  </header>
)

export default Header

