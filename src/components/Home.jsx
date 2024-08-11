import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import Api from "./Api";

function Home() {
  const { characters, setCharacters } = useContext(UserContext);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [setCharacters]);

  return (
    <div>
      <Api characters={characters} />
    </div>
  );
}

export default Home;
