import React from "react";

function TitleHookComponent() {
  console.log("Rendering Title");
  return (
    <div>
      <h2>useCall back hook</h2>
    </div>
  );
}

export default React.memo(TitleHookComponent);
