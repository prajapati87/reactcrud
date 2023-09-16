import React, { useState } from "react";
import "./edit.css";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ list, OnUpdateStu }) => {
  const { id } = useParams();
  const item = list[id];

  const navigation = useNavigate();
  const BackToHome = () => {
    navigation("/reactcrud/");
  };

  const [name, setname] = useState(item.Name);
  const [email, setemail] = useState(item.Email);

  const OnUpdate = (name, email, item) => {
    OnUpdateStu(name, email, item);
    alert("Values are updated");
  };
  return (
    <div className="editpage">
      <h2>Edit Student</h2>
      <div className="top">
        <div className="left">
          <label htmlFor="">Id</label>
          <input type="text" disabled value={item.id} />
        </div>
        <div className="right">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
      </div>
      <div className="bottom">
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <button
        className="btn"
        id="btn1"
        onClick={() => {
          OnUpdate(name, email, item);
        }}
      >
        Update
      </button>
      <br />
      <button id="btn2" onClick={BackToHome}>
        BACK TO HOME
      </button>
    </div>
  );
};

export default Edit;
