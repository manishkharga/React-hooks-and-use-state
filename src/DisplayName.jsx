import React, { useState } from "react";

const DisplayName = () => {
  const [studentName, setstudentName] = useState("");
  return (
    <div>
      <h1>{studentName}</h1>
      <input
        type="text"
        style={{ border: "2px solid black", borderRadius: "5px" }}
        onChange={(event) => {
          // console.log(event.target.value);

          const newValue = event.target.value;
          setstudentName(newValue);
        }}
      ></input>
    </div>
  );
};

export default DisplayName;
