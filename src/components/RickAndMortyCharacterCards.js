import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from './RickAndMortyCharacterCards.module.scss'

const API_URL = 'https://rickandmortyapi.com/api/character/'
const UNKNOWN_AVATAR_URL = `${process.env.PUBLIC_URL}/images/unknown-avatar.png`

const RickAndMortyCharacterCards = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const { data: { results } } = await axios.get(API_URL)
      await setCharacters(results)
    }
    getCharacters();
  }, [])

  return (
    <div>
      {characters.map(({ name, image = UNKNOWN_AVATAR_URL, species, gender }) => (
        <div className={style['id-card-wrapper']} key={name}>
          <div className={style['id-card']}>
            <div className={style['profile-row']}>
              <div className={style["profile-row__avatar"]}>
                <img src={image} alt={`${name}'s avatar`} className={style["avatar__image"]} />
              </div>
              <div className={style["profile-row__desc"]}>
                <h2 className={style["desc__name"]}>{name}</h2>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RickAndMortyCharacterCards
