import React from 'react'

const FormularioTarea = () => {
    return (
        <div className= "border border-dark mt-2">
            <h2 className= "text-dark fw-bold fs-1 text-center mb-0 mt-2">Formulario de Tareas</h2>
            <from className= "">
                <div className= 'row'>
                <div className = 'cold-md-12'>
                    <div className= "input-group mb-2">
                        <div className= "input-group-prepend">
                            <span className= "input-group-text text-danger fs-2 fw-bold" id="">&#128194;</span> 
                        </div>
                        <input
                            type="text"
                            className="form-control fs-2"
                            placeholder="Nombre de la tarea"
                            name="nombre"
                        />
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className = 'cold-md-12 text-center mb-4'>
                        <div className="d-grid">
                        <input type="submit" className="btn btn-dark bg-gradient fs-2 "></input>
                    </div>
                    </div>
                </div>
            </from>

        </div>
    )
}

export default FormularioTarea