import { createContext, useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const P2 = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState<any>([]);
  const removeTours = (id: any) => {
    const newTours = tours.filter((tour: any) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else
    return (
      <main>
        <Tours removeTour={removeTours} tours={tours} />
      </main>
    );
};

export default P2;
