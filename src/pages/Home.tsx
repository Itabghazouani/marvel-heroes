import Heroes from "../components/Heroes"
import { useEffect, useState } from "react"
import Pagination from "../components/Pagination"
// import SearchBar from "../components/SearchBar"

export type THero = {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: [
    {
      type: string,
      url: string
    }
  ],
  thumbnail: {
    path: string,
    extension: string
  },
  comics: {
    available: number,
    returned: number,
    collectionURI: string,
    items: [
      {
        resourceURI: string,
        name: string
      }
    ]
  }
}

const Home = () => {
  const [heroes, setHeroes] = useState<THero[]>([])
  const [limit] = useState(10)
  const [loading, setLoading] = useState(false)
  const [totalHeroes, setTotalHeroes] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  // const [searchQuery, setSearchQuery] = useState('')
  const offset: number = currentPage > 1 ? currentPage * limit : 0
  const baseUrl: string = "https://gateway.marvel.com/v1/public/";
  const apiKey: string = "ts=1&apikey=457612148b948e3c4771d2bdbf51bff2&hash=0236da579f58c9355561e88329fbec2d";
  // const url: string = searchQuery ? `${baseUrl}characters?nameStartsWith=${searchQuery}limit=10&${apiKey}` : `${baseUrl}characters?limit=${limit}&offset=${offset}&${apiKey}`
  const url: string = `${baseUrl}characters?limit=${limit}&offset=${offset}&${apiKey}`

  useEffect(() => {
    const fetchHeroes = async () => {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      setTotalHeroes(data.data.total)
      setHeroes(data.data.results)
      setLoading(false)
    }
    fetchHeroes()
  }, [url])

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage])

  // const handleSearch = (query: string) => {
  //   setSearchQuery(query)
  // }

  const previousPage = () => setCurrentPage(prevPage => prevPage -= 1)
  const nextPage = () => setCurrentPage(prevPage => prevPage += 1)
  const firstPage = () => setCurrentPage(1)
  const lastPage = () => setCurrentPage(Math.ceil(totalHeroes / limit) - 1)


  if (loading) {
    return <h2 className="loading">Loading...</h2>
  }
  return (
    <div className="wrapper hero">

      <div className="main-copy">
        <h1>Find your <span>MARVEL</span> Hero</h1>
        <p className="sub-desc">The Marvel Universe is a fictional shared universe where the stories in most American comic book titles and other media published by Marvel Comics take place.</p>
        {/* <SearchBar onSearch={handleSearch} /> */}
      </div>

      <Heroes
        heroes={heroes}
      />

      <Pagination
        totalPages={Math.ceil(totalHeroes / limit) - 1}
        currentPage={currentPage}
        previousPage={previousPage}
        nextPage={nextPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </div>
  )
}

export default Home
