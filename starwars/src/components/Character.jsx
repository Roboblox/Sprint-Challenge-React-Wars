// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

function Character(props) {
  const [showDetails, setShowDetails] = useState(false);

  const StylesDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .name {
      margin-top: 5rem;
      background-color: #191970;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #00ff00;
      width: 50%;
      h2 {
        color: #98fb98;
      }
    }
    button {
      width: 7rem;
      height: 3rem;
      font-size: 1rem;
      border-radius: 0.5rem;
      color: red;
      background-color: black;
    }
    span {
      width: 50%;
      background-color: black;
      color: red;
      padding-bottom: 2rem;
    }
  `;

  return (
    <StylesDetails>
      <span className="name">
        <h2>{props.character.name}</h2>
      </span>
      <span className="details">
        <button type="primary" onClick={() => setShowDetails(!showDetails)}>
          Details
        </button>
        {showDetails && (
          <span>
            <p>
              Name: <span>{props.character.name}</span>
            </p>

            <p>
              Hair: <span>{props.hair_color}</span>
            </p>
            <p>
              Eyes: <span>{props.character.eye_color}</span>
            </p>
            <p>
              Skin: <span>{props.skin_color}</span>
            </p>
            <p>
              Height: <span>{props.height}</span>
            </p>
            <p>
              gender: <span>{props.gender}</span>
            </p>
            <p>
              Born: <span>{props.birth_year}</span>
            </p>
            <p>
              Mass: <span>{props.mass}</span>
            </p>
          </span>
        )}
      </span>
    </StylesDetails>
  );
}

export default Character;
