import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCards from '../components/CharacterCards/CharacterCards'
const API_URL = 'https://rickandmortyapi.com/api/character/'

const RickAndMortyCharacterCards = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const { data: { results } } = await axios.get(API_URL)
      await setCharacters(results)
    }
    getCharacters();
  }, [])

  return <CharacterCards characters={characters} />
}

export default RickAndMortyCharacterCards
