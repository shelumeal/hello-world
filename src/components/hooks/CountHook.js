import React from "react";

function CountHook({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(CountHook);
