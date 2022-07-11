import { Link } from 'react-router-dom'

const NavItem = ({nombre, ruta}) => {
    return(
        <Link className='nav-item' to={ruta}>
            {nombre}
        </Link>
    )
}


export default NavItem;