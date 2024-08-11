import React, { useState, useMemo } from "react";
import CardVariants from "./CardVariants";
import UserNotFound from "./UserNotFound";

function Api({ characters }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) =>
      character.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, characters]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 text-center">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          placeholder="Search characters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredCharacters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-auto">
          {filteredCharacters.map((character) => (
            <div key={character.id} data-aos="fade-up">
              <CardVariants
                key={character.id}
                id={character.id}
                family={character.family}
                imageUrl={character.imageUrl}
                firstName={character.firstName}
                title={character.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <UserNotFound />
      )}
    </div>
  );
}

export default Api;
