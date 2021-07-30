import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export const Login = () => {
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
        
    })
      const {email, password } = usuario;
      const onChange = e =>{
          guardarUsuario ({...usuario,[e.target.name]:e.target.value})
      } 

    //   Cuando se inicie sesion
      const onSubmit = e =>{
        e.preventDefault();
        // Valida que no haya campos vacio
        if(email.trim() === ''|| password.trim() === ''){
            //mostrar las alertas
            alert('Todo los campos son obligatorios');
        }
      }

    return (
         
            <div className="container">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-10 col-sm-8 row-cols-md-8 col-lg-4">
              <div className= "card border-dark border-2 bg-gradient bg-danger  ">
                <div className="card-body" >
                    <h2 className="text-center">Iniciar Sesion</h2>
                    <form onSubmit={onSubmit}>
                        <div className='row'>
                        <div className='col-md-15'>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text id=basi.addn1">@</span>
                                            </div>
                                         <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Ingrese email"
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
                                        <span className="input-group-text id=basi.addn2">*</span>
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
                                <div className='col-md-6 text-center '>
                                    <div className= "campo-form">
                                         <input type="submit" className="btn btn-dark  bg-gradient " value="Iniciar Sesion" ></input>
                                    </div>
                                 </div>
                                <div className='col-md-6 text-center'>
                                <Link to={'/cuenta'} className="btn btn-dark btn-gradient mb-3">
                                    Crear Cuenta 
                                </Link>
                                <div className='col text-bg-warning'>
                                <Link to={'/contraseña'} className="btn btn-close-white btn-outline-danger btn-sm ">
                                    ¿Olvidaste la Contraseña?
                                </Link>
                                </div>
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



export default Login;