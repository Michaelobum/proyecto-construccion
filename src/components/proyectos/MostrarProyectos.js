import React from 'react'
import Proyecto from './Proyecto'

const MostrarProyectos = () => {
    const proyectos = [

    ]
    return (
        <div className="list-group" >
            {proyectos.map(proyecto => (
                <Proyecto proyecto={proyecto}/>

            ))}
        </div>
    )
}

export default MostrarProyectos