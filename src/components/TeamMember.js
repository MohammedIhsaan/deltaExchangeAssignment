import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./teamMember.css";

import { addMemeber, deleteMemeber } from "../redux/actions/action";
import ActionTypes from "../redux/constants/actionTypes";

export default function TeamMember() {
  let data = useSelector((state) => state.allMember.member);
  //   const [data, setdata] = useState(data);
  const dispatch = useDispatch();

  const handelClick = (e) => {
    let elementId = e.target.id;
    dispatch(deleteMemeber(elementId));
  };

  const handleSubmit = () => {
    console.log("submit");
    dispatch(
      addMemeber({
        id: 3,
        company: "myCompany",
        status: "Act",
        lastUpdate: "01/02/2022",
      })
    );
  };

  return (
    <div className="table">
      <div className="teamMember">
        <h2>Team Members</h2>
        <button onClick={handleSubmit} className="addBuuton">
          Add Members <span>+</span>
        </button>
      </div>
      <hr />
      <select name="subject" id="subject">
        <option value="">Select subject</option>
      </select>

      <table>
        <tr>
          <th></th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
        </tr>
        {data?.map((obj) => {
          return (
            <tr id={obj.id} key={obj.id}>
              <th>o</th>
              <td>{obj.company}</td>
              <td>{obj.status}</td>
              <td>{obj.lastUpdate}</td>
              <td>All work done</td>
              <td>
                <span>
                  <img
                    id={obj.id}
                    onClick={handelClick}
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
