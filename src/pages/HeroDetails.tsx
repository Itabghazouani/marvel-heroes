import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { THero } from "./Home"
import Hero from "../components/Hero"

const HeroDetails = () => {
  const { id } = useParams();
  const [hero, setHero] = useState<THero>()
  const [loading, setLoading] = useState(false)

  const baseUrl: string = "https://gateway.marvel.com:443/v1/public/characters/"
  const publicKey: string = "457612148b948e3c4771d2bdbf51bff2"
  const apiKey: string = `ts=1&apikey=${publicKey}&hash=0236da579f58c9355561e88329fbec2d`
  const url: string = `${baseUrl}${id}?${apiKey}`

  useEffect(() => {
    const fetchHero = async () => {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.data.results)
      setHero(data.data.results[0])
      setLoading(false)
    }
    fetchHero()
  }, [url])

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="hero-container">
      {hero && <Hero hero={hero}/>}
    </div>
  )
}

export default HeroDetails
