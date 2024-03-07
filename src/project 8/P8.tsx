import data from "./data";
import { useState } from "react";
import "./App.css";

const P8 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string[]>([]);
  const [no, setNo] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setNo(count);
    setText(data);
  };
  return (
    <section className="p8-section">
      <h3>Tired of Boring Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e: any) => setCount(e.target.value)}
        />
        <button type="submit" className="p8-btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          if (index < no) return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default P8;
