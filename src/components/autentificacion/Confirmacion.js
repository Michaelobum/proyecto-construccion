import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Confirmacion = (props) => {
    const [usuario, guardarUsuario] = useState({
        password:'',
        confirmar:'',
    });

    //Datos del Usuario del cambio de contraseña
      const {password, confirmar } = usuario;
      const onChange = e =>{
          guardarUsuario ({...usuario,[e.target.name]:e.target.value})
      } 



    //   Cuambio de contraseña
      const onSubmit = e =>{
        e.preventDefault();
        // Valida que no haya campos vacio
        if( password.trim() === ''||
            confirmar.trim() === '') {
            //mostrar las alertas del mensaje
            alert('Todo los campos son obligatio');
            return;
        }


             // Password minimo 6 caracteres
              if(password.length < 6){
                
                //Se muestra mensaje de debe ser al menos 6 caracteres
                alert('El password debe ser al menos 6 caracteres');
                return;

             }
            

             // Que los dos password son iguales
             if(password !== confirmar){
                
            //Se muestra mensaje que el password no son iguales
                alert('Lo passowrd no son iguales', 'alerta-error');
             }
             else{
                //Se muestra mensaje que el password se cambio
                alert('Se confirma su cambio', 'alerta-error');

                return;
             }
               
                     
      }
        
    return (
            <div className="container">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-10 col-sm-8 row-cols-md-8 col-lg-4">
              <div className= "card border-dark border-2 bg-gradient bg-danger  ">
                <div className="card-body" >
                    <h2 className="text-center">Cambio de Contraseña</h2>
                    <form onSubmit={onSubmit}>
                   
                        <div className='row'>
                        <div className='col-md-15'>
                        <p className="text-capitalize fs-4" >Ingrese Nuevo Password</p>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text id=basi.addn2">**</span>    
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Ingrese password"
                                        name="password"
                                        aria-describedby="basic-adon2"
                                        value={password}
                                        onChange={onChange}
                                    />     
                                </div>
                            </div>
                            </div>
                            <div className='row'>
                        <div className='col-md-15'>
                        <p className="text-capitalize fs-4" >Confirme Password</p>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text id=basi.addn1">**</span>
                                            </div>
                                         <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirme su passowrd"
                                            name="confirmar"
                                            aria-describedby="basic-adon1"
                                            value={confirmar}
                                            onChange={onChange}
                                         />     
                                    </div>                         
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-md-6 text-center '>
                            <div className= "campo-form">
                                 <input type="submit" className="btn btn-dark  bg-gradient " value="Confirmar" ></input>
                            </div>
                         </div>
                        <div className='col-md-6 text-center'>
                        <Link to={'/'} className="btn btn-dark btn-gradient mb-3">
                            Iniciar Sesion
                        </Link>
                    </div>
                </div>
                    </form>
                </div>
              </div>
            </div>
            </div>
            </div>
     )
      
}



export default Confirmacion;