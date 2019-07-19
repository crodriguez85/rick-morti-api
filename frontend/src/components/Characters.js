import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardBox from './Card'

function Characters() {
  const [characters, setCharacters]  = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/characters')
      .then((res) => {
        setCharacters(res.data.results)
        console.log(setCharacters)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {characters.map(character => <CardBox
        key={character.id}
        character={character}
      />)}
    </div>
  )
}

export default Characters;
