import React from "react";

function HookButton({ handleClick, children }) {
  console.log("Rendering button - ", children);
  return (
    <div>
      <button onClick={handleClick}>children</button>
    </div>
  );
}

export default React.memo(HookButton);
