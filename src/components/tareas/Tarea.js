import React from 'react'

const Tarea = ({tarea}) => {
    return(
            <tr>
                <td>{tarea.nombre}</td>
                <td>{tarea.estado
                    ?(<buttton className ="btn btn-success">Completada</buttton>)
                    :(<buttton className ="btn btn-warning">Incompleta</buttton>)}</td>
                <td><button className="btn btn-outline-success">Editar</button></td>
                <td><button className="btn btn-outline-success">Eliminar</button></td>


            </tr>


    )
}

export default Tarea