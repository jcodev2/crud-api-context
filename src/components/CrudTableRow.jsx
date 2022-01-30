/* **************** Imports **************** */
import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext'

/* **************** Variables **************** */

/* **************** Functions **************** */

const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext)
  const { name, constellation, id } = el

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

/* **************** Code Execution **************** */
export default CrudTableRow
