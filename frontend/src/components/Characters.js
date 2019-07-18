import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import Card from './Card'

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
      <div className="Gallery">
        {characters.map(character => <Card
          key={character.id}
          character={character}
        />)}
      </div>
    </div>
    </Fragment>
  )
}

export default Characters;
