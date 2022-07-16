import ProyectosItem from "./ProyectosItem";

const ProyectosContainer = ( ) => {

    const proyectos = [
        {
            nombreProy:'Caldero Del Rey',
            imagenProy:'./images/cauldron/cauldronCover.png',
            equipoInvol:['PA']
        },
    ]

    return(
        <div className="proyectos-page">
            <div className="proyectos-container">
                {
                    proyectos.map( item => <ProyectosItem 
                        key={item.nombreProy} 
                        nombreProy={item.nombreProy} 
                        imagenProy={item.imagenProy} 
                        equipoInvol={item.equipoInvol}
                    />)
                }
            </div>
        </div>
    )
}


export default ProyectosContainer;