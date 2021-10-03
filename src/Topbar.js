import React, { Component } from "react";
import { Button } from "@material-ui/core";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ClearIcon from "@mui/icons-material/Clear";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export class Topbar extends Component {
  render() {
    return (
      <div className="topbarMain">
        <div>
          <Button color="primary" variant="outlined">
            <WbSunnyIcon></WbSunnyIcon> Morning
          </Button>
          <Button color="primary" variant="outlined">
            <WbSunnyIcon></WbSunnyIcon> Afternoon
          </Button>
          <Button color="primary" variant="outlined">
            <WbSunnyIcon></WbSunnyIcon> Evening
          </Button>
        </div>
        <div className="styledicons">
          <Button id="view" disabled>
            <RemoveRedEyeIcon></RemoveRedEyeIcon>
          </Button>
          <Button id="redbtn" disabled>
            {" "}
            <ClearIcon></ClearIcon>
          </Button>
          <Button id="greenbtn" disabled>
            {" "}
            <RemoveRedEyeIcon></RemoveRedEyeIcon>
          </Button>
          <Button id="greenbtn" disabled>
            <VisibilityOffIcon></VisibilityOffIcon>
          </Button>
        </div>
      </div>
    );
  }
}
