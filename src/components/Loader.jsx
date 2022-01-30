/* **************** Imports **************** */
import React from 'react'
import '../styles/Loader.css'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

/* **************** Code Execution **************** */
export default Loader
