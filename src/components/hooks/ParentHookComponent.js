import React, { useState, useCallback } from "react";
import CountHook from "./CountHook";
import HookButton from "./HookButton";
import TitleHookComponent from "./TitleHookComponent";

function ParentHookComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <TitleHookComponent></TitleHookComponent>

      <CountHook text="Age" count={age}></CountHook>
      <HookButton handleClick={incrementAge}>Increment Age</HookButton>

      <CountHook text="Salary" count={salary}></CountHook>
      <HookButton handleClick={incrementSalary}>Increment Salary</HookButton>
    </div>
  );
}

export default ParentHookComponent;
