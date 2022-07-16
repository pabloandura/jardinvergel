import { useState } from "react"
import NavItem from "./NavItem"

const Header = () => {

    const [nav, setNav] = useState('home');

    const handleClick = (nombre) => {
        setNav(nombre);
        console.log(nav);
    }

    const opcionesMenu = [
        {
            nombre: 'Home',
            variable: 'home',
            key: '100',
            ruta: '/'
        },
        {
            nombre: `Equipo Jardín`,
            variable: 'equipoJardin',
            key: '200',
            ruta: '/equipo-jardin'
        },
        {
            nombre: 'Proyectos',
            variable: 'proyectos',
            key: '300',
            ruta: '/proyectos'
        }
    ]


    return(
        <div className="nav-container">
            <div className="nav-logo-container">
                <img alt='a network of roots' src='./images/logoJardin.png' className="nav-logo"/>
                <h2 className="nav-logo-text">
                    jard&iacute;n | vergel
                </h2>
            </div>
            {
                opcionesMenu.map( tab => <NavItem 
                    key={tab.key} 
                    nombre={tab.nombre}
                    variable={tab.variable} 
                    ruta={tab.ruta} 
                    estado={nav}
                    func={handleClick} 
                /> )
            }
        </div>
    )

}

export default Header;