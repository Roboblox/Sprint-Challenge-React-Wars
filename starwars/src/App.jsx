import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import Header from "./components/header/Header";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]); // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    // this code runs after DOM surgery

    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {characters.map((character) => {
        return <Character key={character.name} character={character} />;
      })}
    </div>
  );
};

export default App;
