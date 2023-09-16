import "./home.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stulist from "../Students/Stulist";
import View from "../Students/View";
import Edit from "../Students/Edit";

let nextId = 5;

const Home = () => {
  var Users = [
    {
      id: "1",
      Name: "Prince Prajapati",
      Email: "prince@gmail.com",
    },
    {
      id: "2",
      Name: "Prince Prajapati",
      Email: "prince@gmail.com",
    },
    {
      id: "3",
      Name: "Prince Prajapati",
      Email: "prince@gmail.com",
    },
    {
      id: "4",
      Name: "Prince Prajapati",
      Email: "prince@gmail.com",
    },
  ];

  Users = JSON.parse(localStorage.getItem("list"));

  const [list, setlist] = useState(Users);

  const onAddItem = (name, email) => {
    // its a function for first letter convert to upper letter and remender letter  convert into lower
    let arr = name.split(" ");
    let UpperName = arr.map(
      (element) =>
        element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    );

    // its a usestate updeter function and its add new value in list
    setlist([
      ...list,
      { id: nextId++, Name: UpperName.join(" "), Email: email },
    ]);
  };

  //its for delete an item , which have been seleted from list.
  const Ondelete = (value) => {
    setlist(list.filter((item) => item !== value));
  };

  const OnUpdateStu = (name, email, item) => {
    // its a function for first letter convert to upper letter and remender letter  convert into lower
    let arr = name.split(" ");
    let UpperName = arr.map(
      (element) =>
        element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    );

    // its a usestate updeter function and its edit the values which have been selected form list
    setlist(
      list.map((val) => {
        if (val === item) {
          return {
            ...val,
            Name: UpperName.join(" "),
            Email: email,
          };
        } else {
          return {
            ...val,
          };
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <div className="headline">
        <h1>React CRUD with API Call</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/reactcrud/"
            element={
              <Stulist list={list} onAddItem={onAddItem} Ondelete={Ondelete} />
            }
          />
          <Route path="view/:id" element={<View list={list} />} />
          <Route
            path="edit/:id"
            element={<Edit list={list} OnUpdateStu={OnUpdateStu} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
