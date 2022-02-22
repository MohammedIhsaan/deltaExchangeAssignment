import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMemeber } from "../redux/actions/action";
import "./formmodal.css";

export default function FormModal({ popup, setpopup, setblur }) {
  let data = useSelector((state) => state.allMember.member);
  const dispatch = useDispatch();

  let nameRef = useRef(null),
    companyRef = useRef(null),
    statusRef = useRef(null),
    noteRef = useRef(null);
  const handlePopup = () => {
    setpopup("formModal display");
    setblur("table");
  };
  const handleCancel = () => {
    handlePopup();
  };
  const handleSubmit = () => {
    console.log(
      "handleSubmit",
      nameRef.current.value,
      companyRef.current.value,
      statusRef.current.value,
      noteRef.current.value
    );
    let name = nameRef.current.value,
      companyName = companyRef.current.value,
      status = statusRef.current.value,
      note = noteRef.current.value,
      today = new Date();

    if (name === "" || companyName === "" || status === "" || note === "") {
      return;
    }
    dispatch(
      addMemeber({
        id: data.length,
        name: name,
        company: companyName,
        status: status,
        notes: note,
        lastUpdate:
          today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear(),
      })
    );
    handlePopup();
  };
  return (
    <div className={popup}>
      <button className="button-closed" onClick={handlePopup}>
        x
      </button>

      <h3>Add members</h3>
      <form>
        <label>Name</label>
        <br />
        <input className="modal-input" type="text" ref={nameRef} />
        <br />
        <label>Company</label>
        <br />
        <input className="modal-input" type="text" ref={companyRef} />
        <br />
        <label>Status</label>
        <br />
        <input className="modal-input" type="text" ref={statusRef} />
        <br />
        <label>Notes</label>
        <br />
        <input className="modal-input" type="text" ref={noteRef} />
      </form>
      <div className="button-div">
        <button className="modal-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="modal-button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
