import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface question {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: question) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{question}</h4>
        <button
          onClick={() => {
            setShowInfo(!showInfo);
          }}
          className="btn-toggle"
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo ? <p className="para">{answer}</p> : <></>}
    </article>
  );
};

export default Question;
