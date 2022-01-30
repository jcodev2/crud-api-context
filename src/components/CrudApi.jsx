/* **************** Imports **************** */
import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'

/* **************** Variables **************** */

/* **************** Functions **************** */
const CrudApi = () => {
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

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  )
}

/* **************** Code Execution **************** */
export default CrudApi
