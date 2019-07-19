import React, {Component} from 'react'
import styled from 'styled-components';
import "../App.css";

export default class Cardbox extends Component {
  render() {
    const {name, image, status, species, gender,  } = this.props.character
      return (
        <CharacterWrapper className="col-9 mx-auto col-md-6 col-lg-3">
          <div className="card mb-2">
            <div className="img-container p-5">
              <img className="card-img-top" src={image} alt="rick-morti-api"/>
            </div>
            <div className="card-footer justify-content-center pb-5">
              <h8 className="name">
                {name}
              </h8>
              <p className="char-description">
                {status} - {species} - {gender}
              </p>
            </div>
          </div>
        </CharacterWrapper>
      )
  }
}

const CharacterWrapper = styled.div`
 img {
  transition: transform .2s
 }
 &:hover {
   img {
    transform: scale(1.5)
   }

 }
`