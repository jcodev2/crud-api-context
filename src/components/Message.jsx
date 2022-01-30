/* **************** Imports **************** */
import React from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Message = ({ msg, bgColor }) => {
  const styles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: bgColor
  }

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  )
}

/* **************** Code Execution **************** */
export default Message
