import React from "react";

function ErrorDemo({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("This is not a hero");
  }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  );
}

export default ErrorDemo;
