import React, { useState } from "react";

const StudentDetails = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: "Manish",
    age: 20,
    college: "Trinity college",
  });

  return (
    <div>
      <h1>{studentInfo.name} </h1>

      <h3>Age: {studentInfo.age}</h3>
      <p>Enrolled college: {studentInfo.college}</p>

      {/* <button
        onClick={() => {
          setStudentInfo({
            name: "Kharga",
            age: 24,
            college: "New horizon",
          });
        }}
      >
        Change Student
      </button> */}

      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            const newName = event.target.value;
            setStudentInfo({ ...studentInfo, name: newName });
          }}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => {
            const newAge = event.target.value;
            setStudentInfo({ ...studentInfo, age: newAge });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Collge"
          onChange={(event) => {
            const newCollege = event.target.value;
            setStudentInfo({ ...studentInfo, college: newCollege });
          }}
        />
      </div>
    </div>
  );
};

export default StudentDetails;
