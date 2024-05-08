import { ChangeEvent, FormEvent, useState } from "react"
import { THero } from "../pages/Home"
import { FaSearch } from "react-icons/fa";

interface ISearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<THero[]>([])

  const baseUrl: string = "https://gateway.marvel.com/v1/public/";
  const apiKey: string = "ts=1&apikey=457612148b948e3c4771d2bdbf51bff2&hash=0236da579f58c9355561e88329fbec2d";
  const url: string = `${baseUrl}characters?nameStartsWith=${query}limit=10&${apiKey}`

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    fetchSuggestions(newQuery)
  }

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const limitedSuggestions = data.data.results.slice(0, 5)
      setSuggestions(limitedSuggestions)
    } catch (error) {
      console.error("Error fetching suggestions: ", error)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(query)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search heroes..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map(hero => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      )}
      <button><FaSearch /></button>
    </form>
  )
}

export default SearchBar
