import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';


function Characters() {
  const [items, setItems]  = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/characters')
      .then((res) => {
        setItems(res.data.results)
        console.log(setItems)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Fragment>
    <div>
    {items.map(item => 
      <h4 key={item.id}>{item.name}</h4>
      )}
    </div>

    </Fragment>
  )
}


export default Characters;
