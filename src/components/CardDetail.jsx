import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function CardDetail() {
  const { characters } = useContext(UserContext);
  const { id } = useParams();

  // Find the character based on the id from the URL
  const character = characters.find((char) => char.id.toString() === id);
  console.log(characters);
  console.log(character);
  console.log(id);

  // If character is not found, show a "not found" message
  if (!character) {
    return (
      <div className="container mx-auto p-4">
        <Link to="/" className="bg-sky-600 p-2 text-white rounded">
          Home
        </Link>
        <div className="text-center mt-4">Character not found</div>
      </div>
    );
  }

  // If character is found, display the character details
  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="bg-sky-600 p-2 text-white rounded">
        Home
      </Link>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-4">
        <img
          className="w-full h-128 object-cover"
          src={character.imageUrl}
          alt={character.fullName}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{character.fullName}</div>
          <p className="text-gray-700 text-base">{character.title}</p>
          <p className="text-gray-700 text-base">{character.family}</p>
          <p className="text-gray-700 text-base">{character.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
