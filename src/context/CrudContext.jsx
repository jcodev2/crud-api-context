/* **************** Imports **************** */
import React, { createContext, useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'

/* **************** Variables **************** */
const CrudContext = createContext()

/* **************** Functions **************** */
const CrudContextProvider = ({ children }) => {
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const api = helpHttp()
  const url = 'http://localhost:5000/santos'

  useEffect(() => {
    setLoading(true)
    helpHttp()
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDb(res)
          setError(null)
        } else {
          setDb(null)
          setError(res)
        }
        setLoading(false)
      })
  }, [url])

  const createData = (data) => {
    data.id = Date.now()
    // console.log(data);

    const options = {
      body: data,
      headers: { 'content-type': 'application/json' }
    }

    api.post(url, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb([...db, res])
      } else {
        setError(res)
      }
    })
  }

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}`
    // console.log(endpoint);

    const options = {
      body: data,
      headers: { 'content-type': 'application/json' }
    }

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        const newData = db.map((el) => (el.id === data.id ? data : el))
        setDb(newData)
      } else {
        setError(res)
      }
    })
  }

  const deleteData = (id) => {
    const isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    )

    if (isDelete) {
      const endpoint = `${url}/${id}`
      const options = {
        headers: { 'content-type': 'application/json' }
      }

      api.del(endpoint, options).then((res) => {
        // console.log(res);
        if (!res.err) {
          const newData = db.filter((el) => el.id !== id)
          setDb(newData)
        } else {
          setError(res)
        }
      })
    } else {
      return false
    }
  }

  const data = {
    db,
    dataToEdit,
    setDataToEdit,
    error,
    loading,
    createData,
    updateData,
    deleteData
  }

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
}

/* **************** Code Execution **************** */
export { CrudContextProvider }
export default CrudContext
