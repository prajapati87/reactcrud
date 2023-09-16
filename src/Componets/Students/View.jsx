import React from "react";
import "./view.css";
import { useNavigate, useParams } from "react-router-dom";

const View = ({ list }) => {
  const { id } = useParams();
  const item = list[id];

  const navigation = useNavigate();
  const OnNavigate = () => {
    navigation("/reactcrud/");
  };
  return (
    <div className="viewpage">
      <h1>Student Details</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.id}</td>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={OnNavigate}>BACK TO HOME</button>
    </div>
  );
};

export default View;
