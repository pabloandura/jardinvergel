const ProyectosItem = ({nombreProy, imagenProy, equipoInvol}) => {
    return(
        <div className="proyectos-item">
            <img className='proyectos-item-imagen' src={imagenProy} alt={nombreProy}/>
            <p className="proyectos-item-title">{nombreProy}</p>
            <div className="proyectos-item-equipo">
                {
                    equipoInvol.map( (item, index) => <IntegranteEquipo key={`${nombreProy}-${index}`} nombreIntegrante={item}/> )
                }
            </div>
        </div>
    )
}

const IntegranteEquipo = ({nombreIntegrante}) => {
    return(
        <p className="proyectos-item-equipo-integrante"> 
            {nombreIntegrante}
        </p>
    )
}

export default ProyectosItem;