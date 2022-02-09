import React from "react";
import "./teamMember.css";

export default function TeamMember() {
  let data = [
    {
      company: "wipro",
      status: "Active",
      lastUpdate: "01/02/2022",
    },
    {
      company: "infosy",
      status: "Close",
      lastUpdate: "01/02/2022",
    },
    {
      company: "tcs",
      status: "Active",
      lastUpdate: "01/02/2022",
    },
  ];
  return (
    <div className="table">
      <div className="teamMember">
        <h2>Team Members</h2>
        <button className="addBuuton">
          Add Members <span>+</span>
        </button>
      </div>
      <hr />
      <select name="subject" id="subject">
        <option value="" selected="selected">
          Select subject
        </option>
      </select>

      <table>
        <tr>
          <th></th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
        </tr>
        {data.map((obj) => {
          return (
            <tr>
              <th>o</th>
              <td>{obj.company}</td>
              <td>{obj.status}</td>
              <td>{obj.lastUpdate}</td>
              <td>All work done</td>
              <td>
                <span>
                  <img
                    className="delete_icon"
                    src="https://img.icons8.com/material/48/000000/filled-trash.png"
                  />
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
