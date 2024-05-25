import React, { useState } from "react";
import "./App.css";

const ProductCards = () => {
  const [updateImage, setUpdateImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
  );
  const [updateName, setUpdateName] = useState("Headphone");
  const [updatePrice, setUpdatePrice] = useState("2000");
  let newName;
  let newPrice;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          width: "300px",
          height: "350px",
          backgroundColor: "#B08EA2",

          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <img
          src={updateImage}
          style={{ width: "100%", height: "60%", objectFit: "fill" }}
        ></img>
        <h3>{updateName}</h3>
        <h4>Rs. {updatePrice}</h4>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "300px",
        }}
      >
        <button
          onClick={() => {
            setUpdateImage("../src/assets/cooker.jpeg");
          }}
          style={{ height: "40px", borderRadius: "20px", fontWeight: "bolder" }}
        >
          Update Image
        </button>

        <input
          type="text"
          placeholder="Enter New Name"
          onChange={(event) => {
            // const newName = event.target.value;
            newName = event.target.value;
            // setUpdateName(newName);
          }}
          style={{ height: "40px" }}
        ></input>
        <button
          style={{ height: "40px", borderRadius: "20px", fontWeight: "bolder" }}
          onClick={() => {
            setUpdateName(newName);
          }}
        >
          Update Name
        </button>
        <input
          type="number"
          placeholder="update Price"
          onChange={(event) => {
            newPrice = event.target.value;
            // setUpdatePrice(newPrice);
          }}
          style={{ height: "40px" }}
        ></input>
        <button
          style={{ height: "40px", borderRadius: "20px", fontWeight: "bolder" }}
          onClick={() => {
            setUpdatePrice(newPrice);
          }}
        >
          Update Price
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
