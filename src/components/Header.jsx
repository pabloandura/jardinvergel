import NavItem from "./NavItem"

const Header = () => {

    const navegacion = [
        {
            nombre: 'Home',
            ruta: '/',
            key: '100'
        },
        {
            nombre: 'Artistas',
            ruta: '/artistas',
            key: '200'
        },
        {
            nombre: 'Proyectos',
            ruta: '/discos',
            key: '300'
        }
    ]

    return(
        <div className="nav-container">
            <h3>
                jardin|vergel
            </h3>
            {
                navegacion.map( nav => {return <NavItem key={nav.key} nombre={nav.nombre} ruta={nav.ruta} />} )
            }
        </div>
    )

}

export default Header;