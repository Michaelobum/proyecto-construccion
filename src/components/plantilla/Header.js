import React from 'react' 

const Header = () => {
    return(
    <header className = "d-flex justify-content-between p-4 bg-success bg-gradient" >
        <p>Michael Moran</p>
        <nav>
            <a
            className= "text-light"
            href = "#!"
            >Cerrar Sesion</a>
        </nav>
    </header>
    )
}

export default  Header