import React, { useState } from "react";

const Count = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // const newCount = count + 1;
          // setcount(newCount);
          return setcount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Count;
