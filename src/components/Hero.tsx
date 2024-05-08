import { THero } from "../pages/Home"
import { Link } from "react-router-dom";
import marvelDefault from "../assets/marveldefault.jpeg"

interface IHeroProps {
  hero: THero;
}

const Hero = ({ hero }: IHeroProps) => {

  return (
    <li key={hero.id}>
      <Link to={`/${hero.id}`}><img src={hero.thumbnail.path.includes('image_not_available') ? marvelDefault :`${hero.thumbnail.path}.${hero.thumbnail.extension}`} className="hero-img" alt='marvel hero' /></Link>

      <p className="hero-title">{hero.name}</p>
      <p className="hero-desc">{hero.description ? hero.description : "Too much mistery on this character, we can't reveal so easily"}</p>

      <Link to={`/${hero.id}`} className="hero-cta">
        <span>Hero Info</span>
        <img src="../assets/arrows.svg" alt='arrow to lead to details' />
      </Link>
    </li>
  )
}

export default Hero
