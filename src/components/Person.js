import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        {person.id}, {person.name}, {person.age} {person.skil}
      </h2>
    </div>
  );
}

export default Person;
