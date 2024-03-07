import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

const P10 = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name) {
      //display alert
    } else if (name && isEditing) {
      //deal with edit
    }
  };
  return (
    <section className="p10-section">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery-in"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn-10">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">clear all</button>
      </div>
    </section>
  );
};

export default P10;
