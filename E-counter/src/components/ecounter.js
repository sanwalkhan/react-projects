import React, { useState } from "react";

export const Ecounter = () => {
  const [number, setnumber] = useState(0);

  const [Flag, setFlag] = useState(true);

  function increment() {
    Flag && setnumber(number + 1);
  }

  function decrement() {
    Flag && setnumber(number - 1);

    if (number <= 0) {
      alert("Can't Go Below Zero");
      setnumber(0);
    }
  }

  return (
    <div>

<h1>Ecounter</h1>

      <div className="header">
        

        <h2> {number} </h2>
      </div>

      <div className="btn">
        <button type="button" className="btn btn-secondary" onClick={increment}>
          Increase
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setFlag(!Flag)}
        >
          {Flag ? "Lock" : "Unlock"}
        </button>

        <button type="button" className="btn btn-secondary" onClick={decrement}>
          Decrease
        </button>

       
      </div>
    </div>
  );
};
