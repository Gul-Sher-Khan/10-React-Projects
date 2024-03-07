import "./App.css";
import SingleColor from "./SingleColor";
import Values from "values.js";
import { useState } from "react";

const P9 = () => {
  const [colorInput, setColorInput] = useState(""); // Separate state for color input
  const [error, setError] = useState(false);
  const [list, setList] = useState<any>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(false);
    try {
      let colors = new Values(colorInput).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="p9-container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="color"
            className="color-input"
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
          />

          <button className="p9-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color: any, index: number) => (
          <SingleColor key={index} color={color} index={index} />
        ))}
      </section>
    </>
  );
};

export default P9;
