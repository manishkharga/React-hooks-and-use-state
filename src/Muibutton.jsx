import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Muibutton = () => {
  return (
    <div>
      <div>
        <h1>Variant</h1>
        <Button variant="conatined">Contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">Text</Button>
      </div>
      <div>
        <h1>Color</h1>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="warning">Warning</Button>
        <Button color="error" variant="outline">
          Error
        </Button>
      </div>
      <div>
        <h1>buttom with icons and text</h1>
        <Button color="success" variant="outlined" startIcon={<SendIcon />}>
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default Muibutton;
