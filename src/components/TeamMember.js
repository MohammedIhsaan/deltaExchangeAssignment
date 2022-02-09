import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./teamMember.css";

import { addMemeber, deleteMemeber } from "../redux/actions/action";
import ActionTypes from "../redux/constants/actionTypes";

export default function TeamMember() {
  let data = useSelector((state) => state.allMember.member);
  const [classList, setclassList] = useState("visible");
  const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false)
  );
  const [isCheckedAll, setIsCheckedAll] = useState(false);
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
  let addClass = "dropdown-check-list " + classList;
  const handleSelect = () => {
    console.log("select");
    classList === "visible" ? setclassList("") : setclassList("visible");
  };

  const handleChangeAll = () => {
    console.log("changed");

    setIsCheckedAll(!isCheckedAll);
  };
  const handleChange = (e) => {
    // console.log(e.target, isChecked);

    const updatedisChecked = isChecked.map((item, index) =>
      index === Number(e.target.id) ? !item : item
    );
    setIsChecked(updatedisChecked);
  };

  console.log(
    "checking",
    isChecked.every((e) => e === true)
  );

  useEffect(() => {
    console.log("from useEffect", isChecked);
    isChecked.every((e) => e === true) && setIsCheckedAll(!isCheckedAll);
  }, [isChecked]);

  return (
    <div className="table">
      <div className="teamMember">
        <h2>Team Members</h2>
        <button onClick={handleSubmit} className="addBuuton">
          Add Members <span>+</span>
        </button>
      </div>
      <hr />
      <div id="list1" className={addClass} tabIndex="100">
        <span onClick={handleSelect} className="anchor">
          Company({2})
        </span>
        <ul className="items">
          <li>
            <input
              checked={isCheckedAll}
              onChange={handleChangeAll}
              type="checkbox"
            />
            Select All
          </li>
          {data?.map((obj, index) => {
            return (
              <li>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  id={index}
                  checked={isChecked[index]}
                />
                {obj.company}
              </li>
            );
          })}
        </ul>
      </div>

      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
        </tr>
        {data?.map((obj) => {
          return (
            <tr id={obj.id} key={obj.id}>
              <th>
                <input type="checkbox" id="vehicle1" />
              </th>
              <td>{obj.name}</td>
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
