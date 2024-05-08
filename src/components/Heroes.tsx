import { THero } from "../pages/Home"
import Hero from "./Hero"

interface IHeroesProps {
  heroes: THero[]
}
const Heroes = ({ heroes }: IHeroesProps) => {

  const heroElements = heroes.map(hero => (
    <Hero
      key={hero.id}
      hero={hero}
    />
  ))
  return (
    <ul className="featured-heroes">
      {heroElements}
    </ul>
  )
}

export default Heroes
