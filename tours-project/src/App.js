// import Tours from "./Tours";
import Loading from "./Loading";
import Tour from "./Tour";
import { useState, useEffect } from "react";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const toursArr = await resp.json();
      setLoading(false);
      setTours(toursArr);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // fetchTours(); --- infinitive loop ??
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="refresh-container">
          <h2>No tours Left</h2>
          <button className="refresh" type="button" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
