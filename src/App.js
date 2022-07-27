import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    // we are passing the state that we get from our controlled input component

    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <>
      {" "}
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColor(e.target.value)}
            type="text"
            value={color}
            placeholder="#f15025"
            style={error ? { border: "3px solid red" } : null}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
