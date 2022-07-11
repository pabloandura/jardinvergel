
const Hero = ({index, imagen, mensaje, descrip}) => {
    
    const jpg = require(`../../public/images/${imagen}`)
    return(
        <div className='hero-unit'>
            <img className="home-hero" src={jpg} alt={index}/> <p className='hero-tag'>{mensaje}</p> <p className='hero-tag2'>{descrip}</p>
            
        </div>
        )
    }

export default Hero