/* **************** Imports **************** */
import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'

/* **************** Variables **************** */

/* **************** Functions **************** */
const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext)
  return (
    <div>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  )
}

/* **************** Code Execution **************** */
export default CrudApi
