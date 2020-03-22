import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCards from '../components/CharacterCards/CharacterCards'
const API_URL = 'https://rickandmortyapi.com/api/character/'

const RickAndMortyCharacterCards = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true)
      try {
        const { data: { results } } = await axios.get(API_URL)
        await setCharacters(results)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    getCharacters();
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [characters])

  return <CharacterCards characters={characters} isLoading={isLoading} error={error} />
}

export default RickAndMortyCharacterCards
