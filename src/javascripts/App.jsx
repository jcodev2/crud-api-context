/* **************** Imports **************** */
import React from 'react'
import Header from '../components/Header'
import logo from '../assets/svg/favicon.svg'
import CrudApi from '../components/CrudApi'

/* **************** Variables **************** */
const logoName = 'Vite React'
const title = 'CRUD API Context'

/* **************** Functions **************** */
function App() {
  return (
    <>
      <Header logo={logo} logoName={logoName} title={title} />
      <div className="container">
        <CrudApi />
      </div>
    </>
  )
}

/* **************** Code Execution **************** */
export default App
