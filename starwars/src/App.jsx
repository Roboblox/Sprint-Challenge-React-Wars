import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import Header from "./components/header/Header";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState({}); // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    // this code runs after DOM surgery

    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        debugger;
      });
  }, []);
  const array = Object.entries(data);

  console.log(array);

  // [ ['one', 1], ['two', 2] ]
  return (
    <div className="App">
      <Header key={array.name} name={array.name} />
      {array.map((element) => {
        console.log(element[1]);
        return (
          <Character
            key={element[1].name}
            name={element[1].name}
            born={element[1].birth_year}
            gender={element[1].gender}
            height={element[1].height}
            species={element[1].species}
            mass={element[1].mass}
            eyeColor={element[1].eye_color}
            hairColor={element[1].hair_color}
            skinColor={element[1].skin_color}
          />
        );
      })}
    </div>
  );
};

export default App;
