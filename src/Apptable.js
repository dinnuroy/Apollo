import React, { Component } from "react";
import PostData from "../src/Data/posts.json";
import "./App.css";
import PhoneIcon from "@mui/icons-material/Phone";

export class AppTable extends Component {
  constructor() {
    super();
    this.state = {
      setRes: { PostData },
      currentPage: 1,
      resultsPerPage: 10,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  render() {
    // const {setRes, currentPage, resultsPerPage } = this.state;
    // const indexofLastresult = currentPage * resultsPerPage;
    // const indexofFirstresult = indexofLastresult - resultsPerPage;
    // const currentResults = setRes.slice(indexofFirstresult , indexofLastresult);

    // const renderResults = currentResults.map((setRes, index) =>{
    //   return <li key={index}>{setRes}</li>
    // })
    return (
      <div className="container">
        <table className="dataTable">
          <thead>
            <tr>
              <th>phleboId</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Area</th>
              <th>DayLogin</th>
              <th>06:00 AM</th>
              <th>06:40 AM</th>
              <th>07:20 AM</th>
              <th>08:00 AM</th>
              <th>08:40 AM</th>
              <th>09:20 AM</th>
              <th>10:00 AM</th>
              <th>10:40 AM</th>
              <th>11:20 AM</th>
            </tr>
          </thead>
          {PostData.map((tabDetails, index) => {
            return (
              <tbody className="table table-striped" key = {index}>
                <tr>
                  <td>{tabDetails.id}</td>
                  <td>{tabDetails.userName}</td>
                  <td id="mobile">
                    <PhoneIcon fontSize="large"/>
                    {tabDetails.mobile}
                  </td>
                  <td>{tabDetails.areaName}</td>
                  <td>
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      X
                    </label>
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "06:00 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "06:40 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "07:20 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "08:00 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "08:40 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "09:20 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "10:00 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "10:40 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                  <td>
                    {tabDetails.slots.filter(
                      (sltTime) => sltTime.slotTime === "11:20 AM"
                    ) ? (
                      <label id="time">Available</label>
                    ) : (
                      <label id="time1">Unavailable</label>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <hr></hr>
      </div>
    );
  }
}
