import { FaAngleDoubleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loading from "../project 6/Loading";
import "./App.css";
const url = "https://course-api.com/react-tabs-project";

interface Props {
  company: string;
  dates: string;
  duties: string[];
  title: string;
}

const P6 = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Props[]>([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="p6-section">
      <div className="p6-title">
        <h2>Experience</h2>
        <div className="p6-underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setValue(index);
              }}
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty: string, index: number) => (
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className="job-icon" />
              {duty}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default P6;
