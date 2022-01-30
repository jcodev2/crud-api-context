/* **************** Imports **************** */
import React from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Header = ({ logo, logoName, title }) => {
  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <img src={logo} alt={logoName} />
          <h2 className="fluid-3 text-center text-w-600">{title}</h2>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  logo: '',
  logoName: 'Not found',
  title: 'React'
}

/* **************** Code Execution **************** */
export default Header
