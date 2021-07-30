import React from 'react'
import CrearProyecto from '../proyectos/CrearProyecto'
import MostrarProyecto from '../proyectos/MostrarProyectos'
const MenuVertical = () => {
    return (
        <aside className = "text-center p-4">
           <h1 id="h1" className = " fst-blood-italic text-success bg-danger fw-bold"> Generar<a className="text-light"> Proyectos</a></h1>
           <CrearProyecto/>
           <h3 className ="text-light border border-secondary fw-bold">Panel de Proyecto</h3>
           <MostrarProyecto/>
        </aside>
    )
}

export default MenuVertical