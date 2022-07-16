import { Link } from 'react-router-dom'

const NavItem = ({nombre, ruta, variable, func, estado}) => {
    return(
        <Link onClick={() => {
            func(variable)
        }} className={
            estado === variable
            ?
            'nav-item-active'
            :
            'nav-item'
            } to={ruta}>
            {nombre}
        </Link>
    )
}


export default NavItem;