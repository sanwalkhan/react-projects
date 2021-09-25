import React, { useState } from "react";
import Data from "./data";
import { List } from "./list";

export const Scroll = () => {
  const [person, setperson] = useState(Data);

  return (
    <div className="App">
      <h1 className="Header">Scroll Bar</h1>

      <button
        type="button"
        className="btn btn-success"
        onClick={() => setperson(Data)}
      >
        Show
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setperson([])}
      >
        Hide
          </button>
    
      <List person={person} />
    </div>
  );
};
