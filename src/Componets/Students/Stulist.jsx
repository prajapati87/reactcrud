import React, { useState } from "react";
import "./stulist.css";
import { Link } from "react-router-dom";

const AddStudent = ({ onAddItem }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onAddItem(name, email);
    setname("");
    setemail("");
  };
  return (
    <>
      <form onSubmit={submit}>
        <h2>Add Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <button className="btn" type="submit" disabled={!name || !email}>
          Add
        </button>
      </form>
    </>
  );
};

const StudentInfo = ({ item, index, Ondelete }) => {
  const OnRemove = (item) => {
    if (window.confirm("Do you want to delete this UserID ?")) {
      Ondelete(item);
    }
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{item.Name}</td>
        <td>{item.Email}</td>
        <td className="icongap">
          <Link to={`/view/${index}`}>
            <i className="ri-eye-fill text-primary"></i>
          </Link>
          <Link to={`/edit/${index}`}>
            <i className="ri-pencil-fill text-primary"></i>
          </Link>
          <i
            onClick={() => OnRemove(item)}
            className="ri-delete-bin-5-fill text-danger"
          ></i>
        </td>
      </tr>
    </>
  );
};

const Stulist = ({ list, onAddItem, Ondelete }) => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <AddStudent onAddItem={onAddItem} />
      </div>
      <div className="col-md-6 col-sm-12">
        <h2>Students List</h2>
        <table className="stuTable">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <StudentInfo
                  item={item}
                  index={index}
                  key={item.id}
                  Ondelete={Ondelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stulist;
