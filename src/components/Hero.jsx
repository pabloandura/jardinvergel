import { useEffect } from "react"

const Hero = ({index, imagen, mensaje}) => {
    
    const jpg = require(`../../public/images/${imagen}`)
    return(
        <div className='hero-unit'>
            <img className="home-hero" src={jpg} alt={index}/> <p className='hero-tag'>{mensaje}</p>
            
        </div>
        )
    }

export default Hero