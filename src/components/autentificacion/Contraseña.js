import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Contraseña = () => {
    const [usuario, guardarUsuario] = useState({
        email:'',
        confirmo:'',
        
        
    })
      const {email, } = usuario;
      const onChange = e =>{
          guardarUsuario ({...usuario,[e.target.name]:e.target.value})
      } 

    //   Cuando se inicie sesion
   
        const onSubmit = e =>{
          e.preventDefault();
          // Valida que no haya campos vacio
          if( email.trim() === '') {
              //mostrar las alertas del mensaje
              alert('Todo los campos son obligatio');
              return;
          }
      
        // Que el correo se igual al que creo
             if(email!== email){
                
                //Se muestra mensaje de debe ser al menos 6 caracteres
                alert('No es el correo', 'alerta-error');
                return;
             }
      }
    return (
         
            <div className="container">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-10 col-sm-8 row-cols-md-8 col-lg-4">
              <div className= "card border-dark border-2 bg-gradient bg-danger  ">
                <div className="card-body" >
                    <h2 className="text-center">Verifique Su Email</h2>
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
                                            placeholder="Verifique su email"
                                            name="email"
                                            aria-describedby="basic-adon1"
                                            value={email}
                                            onChange={onChange}
                                         />     
                                    </div>                         
                            </div>
                        </div>               
                        <div className='row'>
                        <div className='col-md-6 text-center '>
                            <div className= "campo-form"> 
                            <Link to= {'/Confirmacion'} className="btn btn-dark  bg-gradient " > Confirmar
                           </Link>         
                            </div>
                         </div>
                        <div className='col-md-6 text-center'>
                        <Link to={'/'} className="btn btn-dark btn-gradient mb-3">
                            Regresar
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



export default Contraseña;