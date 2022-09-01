import React, { useEffect, useRef } from "react";

function HookUseRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input tyoe="text" ref={inputRef}></input>
    </div>
  );
}

export default HookUseRef;
