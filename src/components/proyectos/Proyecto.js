import React from 'react'

const Proyecto = ({proyecto}) => {
    return (

            <button className= "lista-group-item list-group-item-action list-group-item"        type="button">
            {proyecto.nombre} 
            </button>


    )
}

export default Proyecto