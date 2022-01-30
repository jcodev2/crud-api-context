/* **************** Imports **************** */
import React from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
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
