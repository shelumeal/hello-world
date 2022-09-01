import React from "react";

// function FrInputRef() {
//   return (
//     <div>
//       <input></input>
//     </div>
//   );
// }

const FrInputRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input tyoe="text" ref={ref}></input>
    </div>
  );
});

export default FrInputRef;
