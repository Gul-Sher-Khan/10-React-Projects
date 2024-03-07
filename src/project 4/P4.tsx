import "./App.css";
import data from "./data";
import Question from "./Question";

const P4 = () => {
  const questions = data;
  return (
    <main className="p4-main">
      <section className="p4-container">
        <h2 className="p4-title">Questions</h2>
        {questions.map((question: any) => (
          <Question {...question} />
        ))}
      </section>
    </main>
  );
};

export default P4;
