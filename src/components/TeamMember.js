import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./teamMember.css";
import downIcon from "../icons/down-arrow.png";
import { addMemeber, deleteMemeber } from "../redux/actions/action";
import FormModal from "./FormModal";
import { useNavigate } from "react-router-dom";

export default function TeamMember() {
  let data = useSelector((state) => state.allMember.member);
  const [classList, setclassList] = useState("dropdown-check-list");
  const [rotate, setrotate] = useState("icon iconSize");
  const [count, setcount] = useState(0);
  const [popup, setpopup] = useState("formModal display");
  const [blur, setblur] = useState("table");
  const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false)
  );
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  //   const [data, setdata] = useState(data);

  const { accessToken, user } = useSelector((state) => state.authReducer);
  console.log("fooooo", accessToken, user);

  const history = useNavigate();

  const dispatch = useDispatch();

  const handelClick = (e) => {
    let elementId = e.target.id;
    dispatch(deleteMemeber(elementId));
  };

  const handleSubmit = () => {
    setpopup("formModal");
    setblur("table blur");
  };

  const handleSelect = () => {
    console.log("select");
    classList === "dropdown-check-list"
      ? setclassList("dropdown-check-list visible")
      : setclassList("dropdown-check-list");
    rotate === "icon iconSize"
      ? setrotate("icon iconSize iconRotate")
      : setrotate("icon iconSize");
  };

  const handleChangeAll = () => {
    console.log("changed");
    setIsCheckedAll(!isCheckedAll);

    setcount(data.length);

    const updatedisChecked = isChecked.map((item) => (item = true));
    setIsChecked(updatedisChecked);
  };

  const handleChange = (e) => {
    const updatedisChecked = isChecked.map((item, index) =>
      index === Number(e.target.id) ? !item : item
    );
    setIsChecked(updatedisChecked);
  };

  const handleCount = (e) => {
    e.target.checked ? setcount(count + 1) : setcount(count - 1);
  };
  console.log(count);

  useEffect(() => {
    // user ? history("/") : history("/login");
    // accessToken ? history("/") : history("/login");
    isChecked.every((value) => value === true)
      ? setIsCheckedAll(true)
      : setIsCheckedAll(false);
  }, [isChecked]);

  return (
    <>
      <div className={blur}>
        <div className="teamMember">
          <h2>Team Members</h2>
          <button onClick={handleSubmit} className="addBuuton">
            Add Members <span style={{ fontSize: "24px" }}>+</span>
          </button>
        </div>
        <hr />
        <div className="check-boxes">
          <div id="list1" className={classList}>
            <span onClick={handleSelect} className="anchor">
              <span style={{ paddingRight: "10px" }}>Company({count})</span>
              <img className={rotate} src={downIcon} alt="img" />{" "}
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
                  <li key={index}>
                    <input
                      onClick={handleCount}
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

          <div id="list2" className="dropdown-check-list">
            <span className="anchor">
              <span style={{ paddingRight: "10px" }}>Status</span>
              <img className="iconSize" alt="img" src={downIcon} />
            </span>
            <ul className="items">
              <li>
                <input type="checkbox" />
                Active
              </li>
              <li>
                <input type="checkbox" />
                Close
              </li>
            </ul>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Company</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Notes</th>
            </tr>
            {data?.map((obj, index) => {
              return (
                <tr key={index}>
                  <th>
                    <input type="checkbox" id="vehicle1" />
                  </th>
                  <td>{obj.name}</td>
                  <td>{obj.company}</td>
                  <td>{obj.status}</td>
                  <td>{obj.lastUpdate}</td>
                  <td>{obj.notes}</td>
                  <td>
                    <span>
                      <img
                        id={obj.id}
                        onClick={handelClick}
                        className="delete_icon"
                        alt="img"
                        src="https://img.icons8.com/material/48/000000/filled-trash.png"
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <FormModal popup={popup} setpopup={setpopup} setblur={setblur} />
    </>
  );
}
