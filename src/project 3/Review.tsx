import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomInt = getRandomInt(1, 100);

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const next = () => {
    if (index === 4) setIndex(0);
    else setIndex(index + 1);
  };

  const pre = () => {
    if (index === 0) setIndex(4);
    else setIndex(index - 1);
  };

  const any = () => {
    setIndex(getRandomInt(0, 4));
  };

  return (
    <article className="p3-reviews">
      <div className="p3-img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="p3-btn-container">
        <button onClick={pre} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="next-btn">
          <FaChevronRight />
        </button>
        <button onClick={any} className="rand-btn">
          Surprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
