import { useState } from "react";

interface tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

interface Props {
  tour: tour;
  removeTour: (id: any) => void;
}

const Tour = ({ tour, removeTour }: Props) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
          <p>{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}</p>
          <button
            className="readnore-btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            Read {readMore ? " Less" : "More"}
          </button>
          <button onClick={() => removeTour(tour.id)} className="tour-rem">
            Remove
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
