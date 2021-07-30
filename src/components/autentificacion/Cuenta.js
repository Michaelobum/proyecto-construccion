import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export const Cuenta = (props) => {
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    //Datos del Usuario
      const {nombre, email, password, confirmar } = usuario;
      const onChange = e =>{
          guardarUsuario ({...usuario,[e.target.name]:e.target.value})
      } 



    //   Cuando se inicie sesion
      const onSubmit = e =>{
        e.preventDefault();
        // Valida que no haya campos vacio
        if(nombre.trim() === ''||
            email.trim() === ''||
            password.trim() === ''||
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
                
                //Se muestra mensaje de debe ser al menos 6 caracteres
                alert('Lo passowrd no son iguales', 'alerta-error');
                return;
             }
            
      }
        
    return (
            <div className="container">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-10 col-sm-8 row-cols-md-8 col-lg-4">
              <div className= "card border-dark border-2 bg-gradient bg-danger  ">
                <div className="card-body" >
                    <h2 className="text-center">Crear Cuenta</h2>
                    <form onSubmit={onSubmit}>
                    <div className='row'>
                        <div className='col-md-15'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text id=basi.addn1">☺</span>
                                            </div>
                                         <input
                                            type="name"
                                            className="form-control"
                                            placeholder="Ingrese su nombre"
                                            name="nombre"
                                            aria-describedby="basic-adon1"
                                            value={nombre}
                                            onChange={onChange}
                                         />     
                                    </div>                         
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-md-15'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text id=basi.addn1">@</span>
                                            </div>
                                         <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Ingrese su email"
                                            name="email"
                                            aria-describedby="basic-adon1"
                                            value={email}
                                            onChange={onChange}
                                         />     
                                    </div>                         
                            </div>
                        </div>
                        
                        <div className='row'>
                        <div className='col-md-12'>
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
                                 <input type="submit" className="btn btn-dark  bg-gradient " value="Registrarme" ></input>
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



export default Cuenta;