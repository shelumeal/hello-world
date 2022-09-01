import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function CustomeHookTwo() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
}

export default CustomeHookTwo;
