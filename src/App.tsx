import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import P1 from "./project 1/P1";
import P2 from "./project 2/P2";
import P3 from "./project 3/P3";
import P4 from "./project 4/P4";
import P5 from "./project 5/P5";
import P6 from "./project 6/P6";
import P7 from "./project 7/P7";
import P8 from "./project 8/P8";
import P9 from "./project 9/P9";
import P10 from "./project 10/P10";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<P1 />} />
        <Route path="/2" element={<P2 />} />
        <Route path="/3" element={<P3 />} />
        <Route path="/4" element={<P4 />} />
        <Route path="/5" element={<P5 />} />
        <Route path="/6" element={<P6 />} />
        <Route path="/7" element={<P7 />} />
        <Route path="/8" element={<P8 />} />
        <Route path="/9" element={<P9 />} />
        <Route path="/10" element={<P10 />} />
      </Routes>
    </Router>
  );
};

export default App;
