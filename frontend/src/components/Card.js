import React from 'react'
import { Card, Image } from 'semantic-ui-react';

  const CardBox = (props) => (
    <Card centered>
      <Image src={props.character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Description>
          <li>{props.character.status}</li>
          <li>{props.character.species}</li>
          <li>{props.character.gender}</li>
          <li>{props.character.origin.name}</li>
          <li>{props.character.location.name}</li>
        </Card.Description>
      </Card.Content>
    </Card>
    
  )

export default CardBox;