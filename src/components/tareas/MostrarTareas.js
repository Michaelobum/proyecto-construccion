import React,{ Fragment }from 'react'
import Tarea from './Tarea'

const MostrarTareas = () => {
    const tareas = [
         {nombre: 'Eligir Sistema Operativo',estado:true},
         {nombre: 'Eligir Base de Datos',estado:false},
         {nombre: 'Eligir lengujae',estado:true},
         {nombre: 'Eligir Frameworks',estado:false},
        {nombre: 'Tarea Nueva', estado:false}
    ];

    return(
    <Fragment>
        <div className="d-flex justify-content-center">
            <h2><span className="text-danger">Proyecto:</span> Comercio Electronico </h2>
            <button type ="button" className="btn btn-outline-danger h-50 m-2">Eliminar</button>
        </div>
            {tareas.lenght===0
                ?(<h1>No hay Tareas</h1>)
                :(<div className="table-responsive">
                    <table className ="table">
                        <thead>
                            <tr>
                            <th scope="col">Tarea</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tareas.map(tarea => (
                                <Tarea tarea={tarea}/>

                            ))}
                        </tbody>
                    </table>          
                    </div>)

                }          

    </Fragment>

    )
}
export default MostrarTareas