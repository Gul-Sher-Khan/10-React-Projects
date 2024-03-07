import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 className="header">React Projects</h1>
      <div className="home-container">
        <div className="div">
          <Link to="/1">
            <button className="button-86" role="button">
              Birthday Reminder
            </button>
          </Link>
          <h4>Project 1</h4>
        </div>
        <div className="div">
          <Link to="/2">
            <button className="button-86" role="button">
              Tours
            </button>
          </Link>
          <h4>Project 2</h4>
        </div>
        <div className="div">
          <Link to="/3">
            <button className="button-86" role="button">
              Reviews
            </button>
          </Link>
          <h4>Project 3</h4>
        </div>
        <div className="div">
          <Link to="/4">
            <button className="button-86" role="button">
              Questions
            </button>
          </Link>
          <h4>Project 4</h4>
        </div>
        <div className="div">
          <Link to="/5">
            <button className="button-86" role="button">
              Menu
            </button>
          </Link>
          <h4>Project 5</h4>
        </div>
        <div className="div">
          <Link to="/6">
            <button className="button-86" role="button">
              Tabs
            </button>
          </Link>
          <h4>Project 6</h4>
        </div>
        <div className="div">
          <Link to="/7">
            <button className="button-86" role="button">
              Slider
            </button>
          </Link>
          <h4>Project 7</h4>
        </div>
        <div className="div">
          <Link to="/8">
            <button className="button-86" role="button">
              Lorem Ipsum
            </button>
          </Link>
          <h4>Project 8</h4>
        </div>
        <div className="div">
          <Link to="/9">
            <button className="button-86" role="button">
              Color Generator
            </button>
          </Link>
          <h4>Project 9</h4>
        </div>
        <div className="div">
          <Link to="/10">
            <button className="button-86" role="button">
              Grocery Bud
            </button>
          </Link>
          <h4>Project 10</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
