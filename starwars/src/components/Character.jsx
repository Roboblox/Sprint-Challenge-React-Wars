// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

function Character(props) {
  const [showDetails, setShowDetails] = useState(false);
  const tablet = "(max-width: 800px)";

  const StylesDetails = styled.div`
    @media ${tablet} {
      color: purple;
    }
    border: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
          color: blue;
      }
    button {
      margin-bottom: 2rem;
      border-radius: 0.5rem;
      color: aqua;
      background-color: brown;
    }
    .name {
      border: 1px solid black;
      background-color: #6495ED;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: bisque;
      width: 50%;
      }
      .details {
          color: green;
      }
     h1{
         color: black;
     }
     span{
         width: 50%;
         background-color: white;
         color: green;
     }
    }
  `;
  return (
    <StylesDetails>
      <span className="name">
        <h1>{props.name}</h1>
      </span>
      <span className="details">
        <button onClick={() => setShowDetails(!showDetails)}>Details</button>
        {showDetails && (
          <div>
            <span>
              Name:
              {props.name}
              <p>
                Hair:
                <span>{props.hairColor}</span>
              </p>
              <p>
                Eyes:
                <span>{props.eyeColor}</span>
              </p>
              <p>
                Skin:
                <span>{props.skinColor}</span>
              </p>
              <p>
                Height:
                <span>{props.height}</span>
              </p>
              <p>
                gender
                <span>{props.gender}</span>
              </p>
              <p>
                Born:
                <span>{props.birthYear}</span>
              </p>
              <p>
                Mass:
                <span>{props.mass}</span>
              </p>
              <p>
                Species:
                <span>{props.species}</span>
              </p>
            </span>
          </div>
        )}
      </span>
    </StylesDetails>
  );
}

export default Character;
