import React from "react";

import Character from "./Character";

const CharacterList = props => {
  console.log("character List props: ",props.characters)
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
