import Hero from './Hero'
import './HeroContainer.css'

const HeroContainer = () => {


const heroList = [
    {
        key:'estudios',
        mainText: 'Estudio Jardin',
        smallerText: 'estudios de grabacion, mezcla y mastering',
        imagen:'jardin.jpg'
    },
    {
        key:'vergel',
        mainText: 'vergel sonido',
        smallerText: 'equipos de audio profesional y reparaciones',
        imagen:`vergel.jpg`
    }
]

    return(
        <div className='hero-container'>
        {
            heroList.map((hero, index) => {
                return <Hero descrip={hero.smallerText} key={hero.key} index={index} mensaje={hero.mainText} imagen={hero.imagen}/>
               })
        }
        </div>
    )
}


export default HeroContainer;
