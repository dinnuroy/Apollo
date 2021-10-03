import React, { Component } from "react";

export class AppHeader extends Comment {
  tabHeadData = {
    "header": [
      "phleboId",
      "Name",
      "Mobile",
      "Area",
      "DayLogin",
      "06:00 AM",
      "06:40 AM",
      "07:20 AM",
      "08:00 AM",
      "08:40 AM",
      "09:20 AM",
      "10:00 AM",
      "10:40 AM",
      "11:20 AM"
    ]
  }
  render() {
    return (
      <div>
        {this.tabHeadData.map((tabHeader, index) => {
            return(
                <tr key={index}>
                    <td>{tabHeader.header[index]}</td>
                </tr>
            )
        })}
      </div>
    );
  }
}
