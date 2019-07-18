import React, { useState, useEffect, Fragment } from "react";
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
    <Fragment>
    <div>
      <div>
        {characters.map(character => <CardBox
          key={character.id}
          character={character}
        />)}
      </div>
    </div>
    </Fragment>
  )
}

export default Characters;
