import React, { Component } from "react";
import TextField from "@mui/material/TextField";

export class Search extends Component {
  render() {
    return (
      <div className="search">
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </div>
    );
  }
}
