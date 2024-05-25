import React from "react";
import { TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <div>
      <TextField
        variant="outlined"
        label="outlined"
        onchange={(event) => {
          console.log(event.target.value);
        }}
      ></TextField>
      <TextField variant="filled" label="filled"></TextField>

      <TextField variant="standard" label="standard"></TextField>
    </div>
  );
};

export default MuiTextField;
