import Tour from "./Tour";

interface tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

interface props {
  tours: tour[];
  removeTour: (id: any) => void;
}

const Tours = ({ tours, removeTour }: props) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} tour={tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
