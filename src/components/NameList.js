import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bob",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Mark",
      age: 30,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Luke",
      age: 30,
      skill: "React",
    },
  ];
  const personList = persons.map((item) => (
    <Person key={item.id} person={item}></Person>
  ));
  return <div>{personList}</div>;
}

export default NameList;
